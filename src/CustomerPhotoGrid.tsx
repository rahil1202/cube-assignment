import React from "react";

interface CustomerPhotoGridProps {
  images: string[];
}

const CustomerPhotoGrid: React.FC<CustomerPhotoGridProps> = ({ images }) => {
  return (
    <div className="customer-photo-grid">
      {images.map((image) => (
        <img key={image} src={image} alt="" />
      ))}
    </div>
  );
};

export default CustomerPhotoGrid;
