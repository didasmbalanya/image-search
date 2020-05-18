import React from "react";
import "./ImageList.css";
import { ImageCard } from "./ImageCard";

export const ImageList = ({ images }) => {
  const displayImages = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{displayImages}</div>;
};
