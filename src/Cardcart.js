import React from 'react';

const Cardcart = (props) => {
    return (
        <div className="col-md-3 col-10 mx-auto mb-5 mt-5">
            <ul className="list-group">
 <li className="list-group-item list-group-item-action active">You selected</li>
  <li className="list-group-item list-group-item-action">Item: {props.menuname}</li>
  <li className="list-group-item list-group-item-action">Price: {props.price}</li>
  <li className="list-group-item list-group-item-action">Type: {props.category}</li>
</ul>
        </div>
        
    )
}

export default Cardcart;