import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
// import axios from "axios";

export default function UpdatedBook() {
  const [formData, setFormData] = useState({});
  const [localStorageData, setlocalStorageData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [alert, setalert] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const storedValue = localStorage.getItem("book");
    console.log(storedValue);
    const storedValues = JSON.parse(storedValue);
    console.log(storedValues);
    setlocalStorageData(storedValues);
    setIsLoading(false);
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const tes = JSON.stringify(formData);
    console.log(tes);
    fetch(`http://127.0.0.1:3100/book/${localStorageData._id}`, {
      method: "PUT",
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
              <h2>Update Book</h2>
            </div>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="container-form">
                <form onSubmit={handleSubmit}>
                  <label>Title: </label>
                  <input type="text" name="title" placeholder={localStorageData.title} value={formData.title} onChange={handleChange} />
                  <label>Author: </label>
                  <input type="text" name="author" placeholder={localStorageData.author} value={formData.author} onChange={handleChange} />
                  <label>Publication Date:</label>
                  <input type="text" name="publication_date" placeholder={localStorageData.publication_date} value={formData.publication_date} onChange={handleChange} />
                  <label>Publisher:</label>
                  <input type="text" name="publisher" placeholder={localStorageData.publisher} value={formData.publisher} onChange={handleChange} />
                  <label>Number of Page:</label>
                  <input type="text" name="number_of_page" placeholder={localStorageData.number_of_page} value={formData.number_of_page} onChange={handleChange} />
                  <label>Category:</label>
                  <input type="text" name="category" placeholder={localStorageData.category} value={formData.category} onChange={handleChange} />
                  <button type="submit">Submit</button>
                </form>
                <div className="alert">
                  <h1>{alert.message}</h1>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
