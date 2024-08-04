import  { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import HomePage from "./HomePage";
import customers from "./data";
import { Customer } from "./types";

const CustomerPortal = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const handleSelect = (customer: Customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="App">
      <center>
        <h1>Customer Portal</h1>
      </center>
      <div className="container">
        <CustomerList customers={customers} onSelect={handleSelect} />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/customer-portal" Component={CustomerPortal} />
      </Routes>
    </Router>
  );
}

export default App;
