import React  from 'react'
import { NavLink } from 'react-router-dom';
import aboutimg from '../imgs/code.svg'
import Common from './Common'

const About = () => {
    return(
        <>
            <Common 
            heading="We are a team of enthusiasts and experts on MERN"
            secondary="Wanna work with us"
            btnname="Contact Us"
            link="/contact"
            imgsrc={aboutimg}
            stong=" "
            />
        </>
    )
}


export default About;