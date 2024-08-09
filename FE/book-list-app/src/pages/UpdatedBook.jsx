import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
// import axios from "axios";

export default function UpdatedBook() {
  const [formData, setFormData] = useState({
    title: "",
    publication_date: "",
    publisher: "",
    number_of_Page: "",
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
    fetch("http://127.0.0.1:3100/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
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
              <h2>Update Book</h2>
            </div>
            <div className="container-form">
              <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="Title" onChange={handleChange} />
                <label>Publication Date:</label>
                <input type="text" name="Publication Date" placeholder="YYYY-MM-DD" onChange={handleChange} />
                <label>Publisher:</label>
                <input type="text" name="Publisher" onChange={handleChange} />
                <label>Number of Page:</label>
                <input type="text" name="Number of Page" onChange={handleChange} />
                <label>Category:</label>
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
