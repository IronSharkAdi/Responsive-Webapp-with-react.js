import React  from 'react'
import Card from '../components/Card'
import server from '../imgs/server.svg'



const Service = () => {
    return(
        <>
            <div >
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-4 col-10 gy-4 mx-auto">
                                <Card 
                                title="test"
                                body="card"
                                btnname="Contact me"
                                imgsrc={server}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Service;