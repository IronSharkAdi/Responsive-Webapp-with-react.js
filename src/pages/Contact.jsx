import React  from 'react'
import { NavLink } from 'react-router-dom';


const  Contact = () => {
    return(
        <>
            <div>
                <h1 className="text-center">Contact me</h1>
                <div>
                    
                        <div className="container contact_div">
                            <div className="row">
                                <div className="col-md-6 col-10 mx-auto">
                                    <form action="">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Name</label>
                                            <input type="text" required class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                            <input type="email" required class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                            <textarea class="form-control" required id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                        <div class="col-12">
                                            <NavLink class="btn btn-primary" required to="/">Submit form</NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </>
    )
}


export default Contact;