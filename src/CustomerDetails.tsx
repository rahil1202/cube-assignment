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
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random/?count=9&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
      );
      setImages(response.data.map((item: any) => item.urls.small));
    } catch (error) {
      console.error("Error fetching images from Unsplash:", error);
    }
  };

  useEffect(() => {
    fetchImages();

    const interval = setInterval(() => {
      fetchImages();
    }, 5000);

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
