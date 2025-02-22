import { useState } from "react";
import { Button, Container, Form, Table, Pagination } from "react-bootstrap";
import { getOldStorage, setLocalStorageData } from "../Servise/LocalStorageData";
import { FaEye, FaTrash, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState(getOldStorage());
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(books);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;

  const handleEdit = (id) => navigate(`/edit/${id}`);
  const handleView = (id) => navigate(`/view/${id}`);

  const handleDelete = (id) => {
    setBooks((prevBooks) => {
      const updatedData = prevBooks.filter((book) => book.id !== id);
      setLocalStorageData(updatedData);
      setSearchResults(updatedData);
      return updatedData;
    });
  };

  const handleSearch = () => {
    const filteredBooks = books.filter(
      (book) =>
        book.book_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.book_category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.book_author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    const sortedBooks = [...searchResults].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setSortField(field);
    setSortOrder(order);
    setSearchResults(sortedBooks);
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return <FaSort />;
    return sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = searchResults.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(searchResults.length / booksPerPage);

  return (
    <Container className="book-list-section">
      <h2 className="book-data">Book List</h2>
      <div className="d-flex mb-3">
        
        <Form.Control
          type="text"
          placeholder="Search by title, category, or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="serch-bar me-2"
        />
        <Button className="search-btn" onClick={handleSearch} variant="primary">Search</Button>
      </div>

      <Table  bordered >
        <thead>
          <tr>
            <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}># {getSortIcon("id")}</th>
            <th>Image</th>
            <th onClick={() => handleSort("book_title")} style={{ cursor: "pointer" }}>Title {getSortIcon("book_title")}</th>
            <th onClick={() => handleSort("book_desc")} style={{ cursor: "pointer" }}>Description {getSortIcon("book_desc")}</th>
            <th onClick={() => handleSort("book_price")} style={{ cursor: "pointer" }}>Price {getSortIcon("book_price")}</th>
            <th onClick={() => handleSort("book_author")} style={{ cursor: "pointer" }}>Author {getSortIcon("book_author")}</th>
            <th onClick={() => handleSort("book_category")} style={{ cursor: "pointer" }}>Category {getSortIcon("book_category")}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBooks.map((book, index) => (
            <tr key={book.id}>
              <td>{indexOfFirstBook + index + 1}</td>
              <td>
                <img src={book.book_image} alt={book.book_title} width="50" height="50" />
              </td>
              <td>{book.book_title}</td>
              <td>{book.book_desc}</td>
              <td>💲 {book.book_price}</td>
              <td>✍ {book.book_author}</td>
              <td>📚 {book.book_category}</td>
              <td>
                <Button onClick={() => handleView(book.id)} className="me-2" variant="info">
                  <FaEye />
                </Button>
                <Button onClick={() => handleEdit(book.id)} className="me-2" variant="secondary">
                  <FaPenToSquare />
                </Button>
                <Button onClick={() => handleDelete(book.id)} variant="danger">
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="justify-content-center">
        <Pagination.Prev disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} />
      </Pagination>
    </Container>
  );
};

export default Home;
