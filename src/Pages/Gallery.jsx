import React from "react";
import './Gallery.css';
import GalleryItem from "../Components/GalleryItem/GalleryItem";
import galleryProduct from '../Components/Assets/gallery_products';

const Gallery = () => {
    return (
        <div>
           <div className="hero-div">
               <h1>Our Gallery</h1>
               <hr />
           </div>
           <div className="gallery-item">
              {galleryProduct.map((item,i)=>{
                return <GalleryItem key={i} image={item.image} />
              })}
           </div>
        </div>
    )
}

export default Gallery;