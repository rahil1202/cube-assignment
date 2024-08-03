// src/CustomerList.tsx
import React, { useState } from "react";
import CustomerCard from "./CustomerCard";
import { Customer } from "./types";

interface CustomerListProps {
  customers: Customer[];
  onSelect: (customer: Customer) => void;
}

const CustomerList: React.FC<CustomerListProps> = ({ customers, onSelect }) => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(0);

  const isSelected = (customer: Customer): boolean => {
    return selectedCustomerId === customer.id;
  };

  const handleSelect = (customer: Customer): void => {
    setSelectedCustomerId(customer.id);
    onSelect(customer);
  };

  return (
    <div className="customer-list">
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          customer={customer}
          isSelected={isSelected(customer)}
          onClick={() => handleSelect(customer)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
