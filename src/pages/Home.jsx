import React  from 'react'
import webimg from '../imgs/hero-img.png'
import Common from './Common'

const Home= () => {
    return(
        <>
            <section id="home" >
            <Common
                heading="Grow your business with"
                secondary="I am a full stack developer"
                btnname="Get Started"
                link="service"
                imgsrc={webimg}
                strong="IS"
            />
            </section>

        </>
    )
}


export default Home;