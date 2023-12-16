import React from "react";
import './GalleryItem.css';

const GalleryItem = (props) => {
    return (
        <div className="gallery_item">
          <img src={props.image} alt="" />
        </div>
    )
}

export default GalleryItem;