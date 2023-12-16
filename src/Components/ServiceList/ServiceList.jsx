import React from "react";
import './ServiceList.css';
import data_product from '../Assets/data';
import Item from "../Item/Item";

const ServiceList = () => {
    return (
        <div className="serviceList">
           <h1>Our Services</h1>
           <hr />
           <div className="service-item">
              {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} productDiscription={item.productDiscription}/>
              })}
           </div>
        </div>
    )
}

export default ServiceList;