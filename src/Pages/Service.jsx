import React from "react";
import ServiceComponent from "../Components/ServiceComponent/ServiceComponent";
import data_product from '../Components/Assets/data';
import Item from "../Components/Item/Item";


const Service = () => {
    return (
        <div>
           <ServiceComponent />
           <div className="service-item">
              {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} productDiscription={item.productDiscription}/>
              })}
           </div>
        </div>
    )
}

export default Service;