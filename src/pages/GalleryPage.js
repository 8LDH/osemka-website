import React from "react";
import { useParams } from "react-router-dom";
import ImageGalleryComponent from "../components/ImageGalleryComponent";

const GalleryPage = () => {
  const { folderPath } = useParams();

  return (
    <div>
      <ImageGalleryComponent folderPath={folderPath} />
    </div>
  );
};

export default GalleryPage;
