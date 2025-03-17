
import { useEffect, useState } from "react";
import { Button, Container, Spinner, Card, Row, Col, Carousel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteProductAsync, getAllProductsAsync } from "../Servise/action/product.action";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, isLoading } = useSelector(state => state.productReducer);

    const [sortOption, setSortOption] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 3;

    useEffect(() => {
        dispatch(getAllProductsAsync());
    }, [dispatch]);

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "price-asc") return a.product_price - b.product_price;
        if (sortOption === "price-desc") return b.product_price - a.product_price;
        if (sortOption === "name-asc") return a.product_name.localeCompare(b.product_name);
        if (sortOption === "name-desc") return b.product_name.localeCompare(a.product_name);
        return 0;
    });

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    const handleSort = (event) => {
        setSortOption(event.target.value);
        setCurrentPage(1); 
    };

    return (
        <Container className="mt-3">
            <Carousel className="mb-4">
            <Carousel.Item>
                    <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/8921fc73c192a29f.jpg?q=20" alt="Second Offer" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/373914b13f0b4dfb.jpg?q=20" alt="Third Offer" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/173cacfaf069fe7d.png?q=20" alt="Offer" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/10e15f15b32bcddc.jpg?q=20" alt="Offer" />
                </Carousel.Item>
            </Carousel>

            <h1>Our Products</h1>

            <Form className="d-flex mb-3 sort-container">
                <Form.Select className="ms-2 sort-container select" onChange={handleSort}>
                    <option value="">Sort By ...</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A-Z</option>
                    <option value="name-desc">Name: Z-A</option>
                </Form.Select>
            </Form>

            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" variant="danger" />
                </div>
            ) : currentProducts.length > 0 ? (
                <Row>
                    {currentProducts.map((product) => (
                        <Col key={product.id} md={4} className="mb-3 product-container">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={product.product_image || "https://via.placeholder.com/150"}
                                    alt={product.product_name || "Product"}
                                />
                                <Card.Body>
                                    <Card.Title className="card-title">{product.product_name}</Card.Title>
                                    <Card.Text className="card-text">{product.product_description}</Card.Text>
                                    <Card.Text className="price">Price: ${product.product_price}</Card.Text>
                                    <Card.Text>Category: {product.category}</Card.Text>

                                    <Button onClick={() => navigate(`/edit/${product.id}`)}>Edit</Button>

                                    <Button onClick={() => dispatch(deleteProductAsync(product.id))} className="ms-2" variant="danger">Delete</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <h4 className="text-center text-muted">No products found</h4>
            )}

            <div className="pagination mt-4 d-flex justify-content-center">
                <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} className="me-2">Previous</Button>
                <span>Page {currentPage} of {totalPages}</span>
                <Button  disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)} className="ms-2">Next</Button>
            </div>
        </Container>
    );
};

export default Home;
