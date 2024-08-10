import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import axios from "axios";

export default function BookCategoryCreate() {
  const [formData, setFormData] = useState({});
  const [alert, setalert] = useState({});

  const handleChange = (event) => {
    const result = event.target.value;
    setFormData({ category: result });
    console.log(event.target.value);
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tes = JSON.stringify(formData);
    console.log(tes);
    fetch("http://127.0.0.1:3100/book-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setalert(data);
        console.log("Success:", data);
        console.log(alert);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setFormData({
      category: "",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="main">
        <Sidebar />
        <section className="main-content">
          <div className="card-container">
            <div className="container-title">
              <h2>Create Category</h2>
            </div>
            <div className="container-form">
              <form onSubmit={handleSubmit}>
                <label>Category: </label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} />
                <button type="submit">Submit</button>
              </form>
              <div className="alert">
                <h1>{alert.message}</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
