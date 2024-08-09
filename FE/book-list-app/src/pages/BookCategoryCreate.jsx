import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import axios from "axios";

export default function BookCategoryCreate() {
  const [formData, setFormData] = useState({
    category: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tes = JSON.stringify(formData);
    console.log(tes);
    axios
      .post("http://127.0.0.1:3100/book-category", formData)
      .then((response) => console.log(response.data))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
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
                <input type="text" name="Category" onChange={handleChange} />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
