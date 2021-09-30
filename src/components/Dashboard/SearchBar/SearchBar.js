import React, { useState } from "react";
import iconArrow from "../../../images/icon-arrow.svg";
import classes from "./SearchBar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../store/ipThunk";

const SearchBar = () => {
  const dispatch = useDispatch();
  const dataFailed = useSelector((state) => state.ipify.ipError);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    setError("");
  };
  const ipHandler = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      dispatch(
        fetchData(
          `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API_KEY}&ipAddress=${searchValue}`
        )
      );
    } else {
      setError("Invalid");
    }
    console.log("Success");
  };
  return (
    <>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          onChange={changeHandler}
        />
        <button onClick={ipHandler} type="submit">
          <img src={iconArrow} alt="arrow_icon" />
        </button>
      </div>
      {error && <div className={classes.error}>Invalid Search!!</div>}
      {dataFailed && <div className={classes.error}>Invalid Search!!</div>}
    </>
  );
};

export default SearchBar;
