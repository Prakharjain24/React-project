import React from 'react';
import web from "../src/image/img1.jpg"
import { NavLink } from "react-router-dom";
import Common from './Common';
const Home = () => {
  return (
    <React.Fragment>
      <Common
        name="Grow your Bussiness with "
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </React.Fragment>
  );
};
export default Home;
