import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddProductAsync } from "../Servise/action/product.action";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import uploadImage from "../Servise/imageUpload";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { isCreated } = useSelector(state => state.productReducer);
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        product_name: "",
        product_price: "",
        product_description: "",
        product_image: "",
        category: ""
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let errors = {};

        if (!inputData.product_name.trim()) {
            errors.product_name = "Product Name is required";
        }
        if (!inputData.product_price.trim()) {
            errors.product_price = "Product Price is required";
        } else if (isNaN(inputData.product_price)) {
            errors.product_price = "Product Price must be a number";
        }
        if (!inputData.product_description.trim()) {
            errors.product_description = "Product Description is required";
        }
        
        if (!inputData.product_image.trim()) {
            errors.product_image = "Product Image URL is required";
        } else if (!inputData.product_image.match) {
            errors.product_image = "Only JPG, JPEG, and PNG formats are allowed";
        }
        if (!inputData.category) {
            errors.category = "Please select a category";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(AddProductAsync({ ...inputData}));
        }
    };



    useEffect(() => {
        if (isCreated) {
          dispatch({ type: "RESET_CREATE" }); // Reset after navigation
          navigate("/"); // Navigate to home
        }
      }, [isCreated, navigate, dispatch]);

      const handleImage = async(e) => {
        let file = e.target.files[0];
        // console.log(file)
        if(!file)   
            return;
        let url = await uploadImage(file)
        setInputData({
            ...inputData,
            product_image: `${url}`
        })
    }
    
    return (
        <Container className="mt-3 add-container">
            <h2 className="mb-4 add-data">Add Product</h2>
            <Form onSubmit={handleSubmit} className="form-group-field">
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Product Name</Form.Label>
                    <Col sm="7">
                        <Form.Control
                            type="text"
                            name="product_name"
                            value={inputData.product_name}
                            onChange={handleChanged}
                            placeholder="Enter Product Name"
                        />
                        {errors.product_name && <small className="text-danger">{errors.product_name}</small>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Product Price</Form.Label>
                    <Col sm="7">
                        <Form.Control
                            type="text"
                            name="product_price"
                            value={inputData.product_price}
                            onChange={handleChanged}
                            placeholder="Enter Product Price"
                        />
                        {errors.product_price && <small className="text-danger">{errors.product_price}</small>}
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Product Description</Form.Label>
                    <Col sm="7">
                        <Form.Control
                            name="product_description"
                            value={inputData.product_description}
                            onChange={handleChanged}
                            type="text"
                            placeholder="Enter Product Description"
                        />
                        {errors.product_description && <small className="text-danger">{errors.product_description}</small>}
                    </Col>
                </Form.Group>
                

                <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                             product_Image
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="file" name="product_image"  onChange={handleImage} />
                        </Col>
                    </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Category</Form.Label>
                    <Col sm="7">
                        <Form.Select
                            name="category"
                            value={inputData.category}
                            onChange={handleChanged}
                        >
                            <option value="">Select One</option>
                            <option value="Cloths">Cloths</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Home & Furniture">Home & Furniture</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Cosmetics">Cosmetics</option>
                            <option value="Footwear">Footwear</option>
                            <option value="Toys">Toys</option>
                            <option value="Grocery">Grocery</option>
                            <option value=" wehicals"> wehicals</option>
                            <option value=" Stationery"> Stationery</option>
                        </Form.Select>
                        {errors.category && <small className="text-danger">{errors.category}</small>}
                    </Col>
                </Form.Group>

                <Button className="add-button" variant="success" type="submit">Add Product</Button>
            </Form>
        </Container>
    );
};

export default AddProduct;
