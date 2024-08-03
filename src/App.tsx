// src/App.tsx
import React, { useState } from "react";
import "./App.css";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import customers from "./data";
import { Customer } from "./types";

function App() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const handleSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="App">
      <center>
        <h1>Customer Details Portal</h1>
      </center>
      <div className="container">
        <CustomerList customers={customers} onSelect={handleSelect} />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
}

export default App;
