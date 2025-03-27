import { useDispatch, useSelector } from "react-redux";
import {Button,Container,Table,Alert,Spinner,ButtonGroup,} from "react-bootstrap";
import {removeFromCart,placeOrder,increaseQuantity,decreaseQuantity,} from "../Servise/action/cart.action";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems } = useSelector((state) => state.cartReducer);

    const [orderSuccess, setOrderSuccess] = useState(null);
    const [loading, setLoading] = useState(false); 

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + Number(item.product_price) * item.quantity,
        0
    );

    const handlePlaceOrder = async () => {
        setLoading(true); 
        await dispatch(placeOrder(cartItems, totalAmount, setOrderSuccess));
        setLoading(false); 
    };

    return (
        <Container className="mt-4">
            <h3 className="cart-data">🛒 Your Cart</h3>

            {orderSuccess === true && (
                <Alert variant="success" className="mt-3 text-center">
                    ✅ <strong>Order Placed Successfully!</strong> Your items will be delivered soon.
                </Alert>
            )}
            {orderSuccess === false && (
                <Alert variant="danger" className="mt-3 text-center">
                    ❌ <strong>Error placing order!</strong> Please try again.
                </Alert>
            )}

            {cartItems.length > 0 ? (
                <Table striped bordered hover responsive className="mt-3 cart-table">
                    <thead className="text-center">
                        <tr>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id} className="text-center align-middle">
                                <td>
                                    <img
                                        src={
                                            item.product_image ||
                                            "https://via.placeholder.com/100" 
                                        }
                                        alt={item.product_name}
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            objectFit: "cover",
                                            borderRadius: "5px",
                                        }}
                                    />
                                </td>

                                <td>{item.product_name}</td>

                                <td>${Number(item.product_price).toFixed(2)}</td>

                                <td>
                                    <ButtonGroup>
                                        <Button
                                            variant="light"
                                            size="sm"
                                            onClick={() =>
                                                dispatch(decreaseQuantity(item.id))
                                            }
                                            disabled={item.quantity <= 1}
                                        >
                                            ➖
                                        </Button>
                                        <span
                                            className="mx-2"
                                            style={{ fontSize: "16px", fontWeight: "bold" }}
                                        >
                                            {item.quantity}
                                        </span>
                                        <Button
                                            variant="light"
                                            size="sm"
                                            onClick={() =>
                                                dispatch(increaseQuantity(item.id))
                                            }
                                        >
                                            ➕
                                        </Button>
                                    </ButtonGroup>
                                </td>

                                <td>${(Number(item.product_price) * item.quantity).toFixed(2)}</td>

                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h5 className="text-muted mt-3 text-center">
                    😕 Your cart is empty. Add some items!
                    <br />
                    <Button variant="primary" className="mt-3" onClick={() => navigate("/")}>
                        ⬅️ Go Home
                    </Button>
                </h5>
            )}

            {cartItems.length > 0 && (
                <>
                    <h4 className="mt-3 cart-total">Total: ${totalAmount.toFixed(2)}</h4>

                    <Button
                        variant="success"
                        className="me-2"
                        onClick={handlePlaceOrder}
                        disabled={loading} 
                    >
                        {loading ? (
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />{" "}
                                Placing Order...
                            </>
                        ) : (
                            "✅ Place Order"
                        )}
                    </Button>

                    <Button variant="primary" onClick={() => navigate("/")}>
                        ⬅️ Go Home
                    </Button>
                </>
            )}
        </Container>
    );
};

export default Cart;
