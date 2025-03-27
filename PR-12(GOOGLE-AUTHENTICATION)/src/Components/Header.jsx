
import { useState } from "react";
import { Navbar, Button, Card, Row, Col, Container } from "react-bootstrap";
import { FaSearch, FaShoppingCart,  FaStore } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutAsync } from "../Servise/action/auth.action";

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false); 
    const products = useSelector(state => state.productReducer.products);
    const {user} = useSelector((state) => state.userReducer)
    const { cartItems } = useSelector((state) => state.cartReducer);
    const cartCount = cartItems.length;


    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleLogout = () => {
        dispatch(logOutAsync())
        navigate("/signin")
    }

    const handleLogin = () => {
        navigate("/signin")
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        const filtered = products.filter(product =>
            product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setSearchResults(filtered);
        setShowResults(true); 
        setSearchQuery(""); 
    };

    return (
        <>
            <div className="header">
                <div className="logo">
                    <Navbar.Brand href="/">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
                    </Navbar.Brand>
                </div>

                <form className="search-bar" onSubmit={handleSearchSubmit}>
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for Products, Brands and More"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <Button type="submit" className="search-btn ms-2">Search</Button>
                </form>

                <nav>
                    <Link to="/add">Add Product</Link>
                    <Link to="/order-history" className="ms-3">Order History</Link>
                </nav>

                <div className="header-options">
                    <div className="option">
                        {user ? <Button onClick={handleLogout}>LogOut</Button> : <Button onClick={handleLogin} >Login ▼</Button>}

                    </div>

                    <div className="option cart-btn">
                        <Link to="/cart" className="cart-link">
                            <FaShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="cart-count">{cartCount}</span>
                            )}
                        </Link>
                        <span className="cart-text">Cart</span>
                    </div>


                    
                </div>
            </div>

            {showResults && (
                <Container className="mt-3">
                    <h3>Search Results</h3>
                    <Row>
                        {searchResults.length > 0 ? (
                            searchResults.map(product => (
                                <Col key={product.id} md={4} className="mb-3">
                                    <Card>
                                        <Card.Img variant="top" src={product.product_image || "https://via.placeholder.com/150"} />
                                        <Card.Body>
                                            <Card.Title>{product.product_name}</Card.Title>
                                            <Card.Text>{product.product_description}</Card.Text>
                                            <Card.Text>Price: ${product.product_price}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <h5 className="text-muted">No products found.</h5>
                        )}
                    </Row>
                </Container>
            )}
        </>
    );
};

export default Header;
