import "./App.css";
import Book from "./pages/Book";
import BookCategory from "./pages/BookCategory";
import BookCreate from "./pages/BookCreate";
import BookCategoryCreate from "./pages/BookCategoryCreate";
import UpdatedBook from "./pages/UpdatedBook";
import UpdatedBookCategory from "./pages/UpdatedBookCategory";

import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/book" replace />} />
      <Route path="/book" element={<Book />} />
      <Route path="/book-category" element={<BookCategory />} />
      <Route path="/book-create" element={<BookCreate />} />
      <Route path="/update-book" element={<UpdatedBook />} />
      <Route path="/book-category-create" element={<BookCategoryCreate />} />
      <Route path="/update-book-category" element={<UpdatedBookCategory />} />
    </Routes>
  );
}

export default App;
