// src/CustomerDetails.tsx
import React, { useState, useEffect } from "react";
import { Customer } from "./types";
import CustomerPhotoGrid from "./CustomerPhotoGrid";
import axios from "axios";

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [images, setImages] = useState<string[]>([]);

  const fetchImages = async () => {
    const response = await axios(
      "https://api.unsplash.com/photos/random/?count=9&client_id=bQdUYNHYmphYzquiuHP8lL4vzQ-V2hrzuQQgGrE90J0"
    );
    setImages(response.data.map((item: any) => item.urls.small));
  };

  useEffect(() => {
    fetchImages();

    const interval = setInterval(() => {
      fetchImages();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="customer-details-container">
      <div className="customer-details">
        <h2 className="customer-name">{customer.name} details here...</h2>
        <p className="customer-title">Position : {customer.title}</p>
        <p className="customer-address">Address : {customer.address}</p>
      </div>
      <CustomerPhotoGrid images={images} />
    </div>
  );
};

export default CustomerDetails;
