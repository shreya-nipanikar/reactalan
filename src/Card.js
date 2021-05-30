import React from 'react';
import './Card.css';



const Card = (props) => {
    return (
        <div className="col-md-4 col-10 mx-auto my-4">
        <div className="card">
<img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
<div className="card-body">
 <h5 className="card-title">{props.title}</h5>
 <p className="card-text">${props.price} {props.category}</p>
 <a href="#" className="btn btn-primary" onClick={props.btn}>Add to Cart</a>
</div>
</div>
</div>
    )
}

export default Card;