import React from "react";
import { useDispatch } from "react-redux";
import { toggletheme } from "../../../../shared/state/themeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const handleThemeChange = () => {
    dispatch(toggletheme());
  };
  return (
    <div>
      <h1>This is my home dashboard page</h1>
      <button onClick={handleThemeChange}>Change theme</button>
    </div>
  );
};

export default Home;
