import React from 'react';
import web from "../src/image/about.png"
import { NavLink } from "react-router-dom"; 
import Common from './Common';

const About = () => {
    return (
        <React.Fragment>
           <Common 
           name="Welcome to About us page ..!! " 
           imgsrc={web}
            visit="/contact"
            btname="Contact Now"
           />
        </React.Fragment>
    );
};
export default About;
