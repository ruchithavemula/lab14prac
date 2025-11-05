import React, { useEffect, useState } from "react";
import DressForm from "./components/DressForm.jsx";
import DressList from "./components/DressList.jsx";
import { API_URL } from "./components/config.js";
import "./style.css";

function App() {
  const [dresses, setDresses] = useState([]);
  const [editDress, setEditDress] = useState(null);

  const fetchDresses = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      setDresses(data);
    } catch (err) {
      console.error("Error fetching dresses:", err);
      alert("Cannot connect to backend Make sure Spring Boot is running!");
    }
  };

  useEffect(() => {
    fetchDresses();
  }, []);

  return (
    <div className="App">
      <h1>Dress Management</h1>
      <DressForm fetchDresses={fetchDresses} editDress={editDress} setEditDress={setEditDress} />
      <DressList dresses={dresses} fetchDresses={fetchDresses} setEditDress={setEditDress} />
    </div>
  );
}

export default App;
