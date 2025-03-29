

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getProductAsync, updateProductAsync } from "../Servise/action/product.action";

const EditProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, isUpdated } = useSelector(state => state.productReducer);
    const navigate = useNavigate();
    
    const [inputData, setInputData] = useState({
        id: "",
        product_name: "",
        product_price: "",
        product_description: "",
        product_image: "",
        category: ""
    });

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Data:", inputData); 
        dispatch(updateProductAsync(id, inputData));
    };


    useEffect(() => {
        console.log("isUpdated Changed:", isUpdated);
        if (isUpdated) {
          dispatch({ type: "RESET_UPDATE" }); 
          navigate("/"); 
        }
      }, [isUpdated, navigate, dispatch]);

    useEffect(() => {
        if (id) {
            dispatch(getProductAsync(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (product) {
            setInputData(product);
        }
    }, [product]);

    return (
        <Container className="mt-3 edit-container">
            <h2 className="mb-4 edit-data">Edit Product</h2>
            <Form className="form-group-field" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Product Name</Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" name="product_name" value={inputData.product_name} onChange={handleChanged} placeholder="Enter Product Name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Product Price</Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" name="product_price" value={inputData.product_price} onChange={handleChanged} placeholder="Enter Product Price" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Product Description</Form.Label>
                    <Col sm="6">
                        <Form.Control
                            name="product_description"
                            value={inputData.product_description}
                            onChange={handleChanged}
                            type="text"
                            placeholder="Enter Product Description"
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Product Image</Form.Label>
                    <Col sm="6">
                        <Form.Control type="text" name="product_image" value={inputData.product_image} onChange={handleChanged} placeholder="Enter Image URL" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Category</Form.Label>
                    <Col sm="6">
                        <Form.Select 
                            aria-label="Default select example" 
                            name="category" 
                            value={inputData.category} 
                            onChange={handleChanged}
                        >
                            <option value="">Select One Category</option>
                            <option value="Cloths"  selected= {inputData.category == "Cloths"}>Cloths</option>

                            <option value="Electronics" selected= {inputData.category == "Electronics"}>Electronics</option>

                            <option value="Home & Furniture" selected= {inputData.category == "Home & Furniture"}>Home & Furniture</option>

                            <option value="Mobile" selected= {inputData.category == "Mobile"}>Mobile</option>

                            <option value="Cosmetics" selected= {inputData.category == "Cosmetics"}>Cosmetics</option>

                            <option value="Footwear" selected= {inputData.category == "Footwear"}>Footwear</option>

                            <option value="Toys" selected= {inputData.category == "Toys"}>Toys</option>

                            <option value="Grocery" selected= {inputData.category == "Grocery"}>Grocery</option>

                            <option value=" wehicals" selected= {inputData.category == "wehicals"}> wehicals</option>

                            <option value=" Stationery" selected= {inputData.category == "Stationery"}> Stationery</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Button className="edit-button" variant="success" type="submit">Edit Product</Button>
            </Form>
        </Container>
    );
};

export default EditProduct;

