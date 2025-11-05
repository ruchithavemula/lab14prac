import React from "react";
import { API_URL } from "./config";

const DressList = ({ dresses, fetchDresses, setEditDress }) => {

  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchDresses();
    } catch (err) {
      console.error("Error deleting:", err);
      alert("Backend connection failed.");
    }
  };

  return (
    <div className="dress-list">
      {dresses.map((dress) => (
        <div key={dress.id} className="dress-item">
          <h3>{dress.name}</h3>
          <p>Type: {dress.type}</p>
          <p>Price: ₹{dress.price}</p>
          <button onClick={() => setEditDress(dress)}>Edit</button>
          <button onClick={() => handleDelete(dress.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DressList;
