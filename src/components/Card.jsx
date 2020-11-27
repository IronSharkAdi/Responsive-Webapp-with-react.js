import React  from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return(
        <>
            <div class="card" style={{width: '20rem'}}>
                <img src={props.imgsrc}  style={{width: '100%' , height:'200px'}}  class="card-img-top" alt="..." />
                <hr/>
                <div class="card-body">
                    <div className="d-flex justify-content-center flex-column aligh-item-center">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.body}</p>
                    <NavLink to="https://ironshark.herokuapp.com/" class="btn btn-primary">{props.btnname}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Card;