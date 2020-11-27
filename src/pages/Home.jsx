import React  from 'react'
import { NavLink } from 'react-router-dom';
import webimg from '../imgs/hero-img.png'
import Common from './Common'

const Home= () => {
    return(
        <>
            <Common
                heading="Grow your business with"
                secondary="We are a team of talented developer and problem solvers"
                btnname="Get Started"
                link="/service"
                imgsrc={webimg}
                strong="IS"
            />
        </>
    )
}


export default Home;