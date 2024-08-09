import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BookCategory() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:3100/book-category");
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
      const response = await axios.delete(`http://127.0.0.1:3100/book-category/${id}`);
      console.log(response);
      if (response.status === 200) {
        console.log("Berhasil menghapus data");
        const res = await axios.get("http://127.0.0.1:3100/book-category");
        setData(res.data.data);
      } else {
        console.error("Gagal menghapus data");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
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
                <h2>Book Category List</h2>
                <div></div>
                <Link to="/book-category-create" id="add-book-category">
                  <i class="fa-solid fa-table-list"></i>
                  <h2> Add Category</h2>
                </Link>
              </div>
              <div className="card-list">
                <ul>
                  {data.map((bookCategory, index) => (
                    <a href="#" key={index}>
                      <li>
                        <div className="card-title">
                          <p>{bookCategory.category}</p>
                        </div>
                        <div className="card-control">
                          <div className="card-icon">
                            <Link to="/update-book-category">
                              <i class="fa-solid fa-pen-to-square"></i>
                            </Link>
                          </div>
                          <div className="card-icon">
                            <Link onClick={() => handleDelete(bookCategory._id)}>
                              <i class="fa-solid fa-trash"></i>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </a>
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
