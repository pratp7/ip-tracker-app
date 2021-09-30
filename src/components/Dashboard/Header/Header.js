import React from "react";
import classes from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { sawoActions } from "../../../store/sawoAuth-slice";
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(sawoActions.logout());
    history.replace("/");
  };
  return (
    <div className={classes.header}>
      <h2>IP Address Tracker</h2>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Header;
