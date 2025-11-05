import React, { useState, useEffect } from "react";
import { API_URL } from "./config";

const DressForm = ({ fetchDresses, editDress, setEditDress }) => {
  const [dress, setDress] = useState({ name: "", type: "", price: "" });

  useEffect(() => {
    if (editDress) setDress(editDress);
  }, [editDress]);

  const handleChange = (e) => {
    setDress({ ...dress, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editDress) {
        await fetch(`${API_URL}/${editDress.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dress),
        });
        setEditDress(null);
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dress),
        });
      }
      setDress({ name: "", type: "", price: "" });
      fetchDresses();
    } catch (err) {
      console.error("Error connecting to backend:", err);
      alert("Backend connection failed. Make sure Spring Boot is running!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dress-form">
      <input
        type="text"
        name="name"
        placeholder="Dress Name"
        value={dress.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="type"
        placeholder="Dress Type"
        value={dress.type}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={dress.price}
        onChange={handleChange}
        required
      />
      <button type="submit">{editDress ? "Update" : "Add"} Dress</button>
    </form>
  );
};

export default DressForm;
