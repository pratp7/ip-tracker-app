import React, { useEffect } from "react";
import "./LandingPage.module.scss";
import Sawo from "sawo";
import Card from "../Card/Card";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { sawoActions } from "../../store/sawoAuth-slice";
require("dotenv").config();

const LandingPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // sending user details to database
    const SendUserData = async (info) => {
      const response = await fetch(
        "https://sawo-ip-tracker-default-rtdb.firebaseio.com/user.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(info),
        }
      );
      if (!response.ok) {
        throw new Error("failed to sent data!!");
      }
    };
    //Sawo SDK
    var config = {
      // should be same as the id of the container created on 3rd step
      containerID: "sawo-container",
      // can be one of 'email' or 'phone_number_sms'
      identifierType: "email",
      // Add the API key copied from 5th step
      apiKey: process.env.REACT_APP_API_KEY,
      // Add a callback here to handle the payload sent by sdk
      onSuccess: async (payload) => {
        // console.log(payload);
        await SendUserData(payload);
        dispatch(sawoActions.login(payload.user_id));
        history.replace("/dashboard");
      },
    };

    let sawo = new Sawo(config);
    sawo.showForm();
  });
  return (
    <div>
      <h1>IP Address Tracker</h1>
      <Card>
        <h2>Login </h2>
        <div
          id="sawo-container"
          style={{ height: "300px", width: "300px" }}
        ></div>
      </Card>
    </div>
  );
};

export default LandingPage;
