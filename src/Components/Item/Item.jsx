import React from "react";
import './Item.css';

const Item = (props) => {
    return (
        <div className="item">
          <img src={props.image} alt="" />
          <h1>{props.name}</h1>
          <p>{props.productDiscription}</p>
        </div>
    )
}

export default Item;