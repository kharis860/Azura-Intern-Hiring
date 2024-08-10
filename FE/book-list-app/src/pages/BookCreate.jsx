import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import axios from "axios";

export default function BookCreate() {
  const [formData, setFormData] = useState({});
  const [alert, setalert] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
    console.log(event.target.value);
    console.log(formData);
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
        setalert(data);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setFormData({
      title: "",
      author: "",
      publication_date: "",
      publisher: "",
      number_of_page: "",
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
              <h2>Create Book</h2>
            </div>
            <div className="container-form">
              <form onSubmit={handleSubmit}>
                <label>Title: </label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                <label>Author: </label>
                <input type="text" name="author" value={formData.author} onChange={handleChange} />
                <label>Publication Date:</label>
                <input type="text" name="publication_date" placeholder="YYYY-MM-DD" value={formData.publication_date} onChange={handleChange} />
                <label>Publisher:</label>
                <input type="text" name="publisher" value={formData.publisher} onChange={handleChange} />
                <label>Number of Page:</label>
                <input type="text" name="number_of_page" value={formData.number_of_page} onChange={handleChange} />
                <label>Category:</label>
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
