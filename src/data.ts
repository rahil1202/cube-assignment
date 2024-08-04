import { Customer } from "./types";

const customers: Customer[] = [
  {
    id: 1,
    name: "Vishal Kumar",
    title: "Full Stack Web Developer",
    address: "Amar Chapra (Saran), Patna, India",
    images: [],
  },
  {
    id: 2,
    name: "Alice Johnson",
    title: "Software Engineer",
    address: "456 Elm St, Townburg, USA",
    images: [],
  },
  {
    id: 3,
    name: "Emma Davis",
    title: "Sales Representative",
    address: "789 Oak St, Villagetown, USA",
    images: [],
  },
  {
    id: 4,
    name: "Michael Lee",
    title: "Data Analyst",
    address: "101 Pine St, Hamletville, USA",
    images: [],
  },
  {
    id: 5,
    name: "Sarah Brown",
    title: "Graphic Designer",
    address: "202 Maple St, Boroughburg, USA",
    images: [],
  },
  {
    id: 6,
    name: "David Rodriguez",
    title: "Frontend Developer",
    address: "303 Cedar St, Township, USA",
    images: [],
  },
  {
    id: 7,
    name: "Lisa Nguyen",
    title: "Marketing Specialist",
    address: "404 Birch St, Villageville, USA",
    images: [],
  },
  {
    id: 8,
    name: "Ryan Wilson",
    title: "IT Consultant",
    address: "505 Walnut St, Citytown, USA",
    images: [],
  },
  {
    id: 9,
    name: "Olivia Taylor",
    title: "Project Coordinator",
    address: "606 Spruce St, Townsville, USA",
    images: [],
  },
  {
    id: 10,
    name: "James Carter",
    title: "Field Technician",
    address: "707 Cherry St, Metropolis, USA",
    images: [],
  },
  {
    id: 11,
    name: "Emily White",
    title: "Operations Manager",
    address: "808 Cedar St, Cityville, USA",
    images: [],
  },
  {
    id: 12,
    name: "Daniel Garcia",
    title: "Mechanical Engineer",
    address: "909 Elm St, Townburg, USA",
    images: [],
  },
  {
    id: 13,
    name: "Sophia Martinez",
    title: "Sales Representative",
    address: "1010 Oak St, Villagetown, USA",
    images: [],
  },
  {
    id: 14,
    name: "Logan Brown",
    title: "Financial Analyst",
    address: "1111 Pine St, Hamletville, USA",
    images: [],
  },
  {
    id: 15,
    name: "Mia Lopez",
    title: "UI/UX Designer",
    address: "1212 Maple St, Boroughburg, USA",
    images: [],
  },
  {
    id: 16,
    name: "Benjamin Clark",
    title: "Backend Developer",
    address: "1313 Cedar St, Township, USA",
    images: [],
  },
  {
    id: 17,
    name: "Ava Rodriguez",
    title: "Digital Marketer",
    address: "1414 Birch St, Villageville, USA",
    images: [],
  },
  {
    id: 18,
    name: "Ethan Nguyen",
    title: "Business Consultant",
    address: "1515 Walnut St, Citytown, USA",
    images: [],
  },
  {
    id: 19,
    name: "Isabella Turner",
    title: "Office Coordinator",
    address: "1616 Spruce St, Townsville, USA",
    images: [],
  },
  {
    id: 20,
    name: "Alexander Wright",
    title: "Support Technician",
    address: "1717 Cherry St, Metropolis, USA",
    images: [],
  },
  // Add more customers as needed
  // For example, you can extend up to id 1000 similarly
];

for (let i = 21; i < 1000; i++) {
  customers.push({
    id: i,
    name: `Customer ${i}`,
    title: `Position ${i}`,
    address: `Address ${i}`,
    images: [],
  });
}

export default customers;

