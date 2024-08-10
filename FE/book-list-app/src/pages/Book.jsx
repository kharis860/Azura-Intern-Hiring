import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Book() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3100/book");
        setData(res.data.data);
        console.log(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:3100/book/${id}`);
      console.log(response);
      if (response.status === 200) {
        console.log("Berhasil menghapus data");
        const res = await axios.get("http://127.0.0.1:3100/book");
        setData(res.data.data);
      } else {
        console.error("Gagal menghapus data");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const [formData, setFormData] = useState();
  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:3100/book?search=${formData}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setData(data.data);
        setError(data.message);
        console.log(data.message);
        console.log(error);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleClick = (book) => {
    const books = JSON.stringify(book);
    localStorage.setItem("book", books);
  };
  return (
    <div>
      <Navbar />
      <div className="main">
        <Sidebar />
        <section className="main-content">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="card-container">
              <div className="container-title">
                <h2>Book Title List</h2>
                <div className="container-form">
                  <form onSubmit={handleSubmit} id="book-search">
                    <input type="text" placeholder="Title, author, publisher.." name="Title" onChange={handleChange} />
                    <button type="submit">
                      <i class="fa-solid fa-magnifying-glass" id="search-button"></i>
                    </button>
                  </form>
                </div>
                <Link to="/book-create" id="add-book">
                  <i class="fa-solid fa-book"></i>
                  <h2>Add Book</h2>
                </Link>
              </div>
              <div className="error-message">
                <h1>{error}</h1>
              </div>
              <div className="card-list">
                <ul>
                  {data.map((book, index) => (
                    <Link to="#" key={index}>
                      <li>
                        <div className="card-title">
                          <p>{book.title}</p>
                        </div>
                        <div className="card-control">
                          <div className="card-icon">
                            <Link to="/update-book/" onClick={() => handleClick(book)}>
                              <i class="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </div>
                          <div className="card-icon">
                            <Link onClick={() => handleDelete(book._id)}>
                              <i class="fa-solid fa-trash"></i>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
