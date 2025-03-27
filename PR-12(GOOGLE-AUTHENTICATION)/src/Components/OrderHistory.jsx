import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../FirebaseConfig";
import { Button, Container, Table, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";

const OrderHistory = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true); 

    const fetchOrders = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "orders"));
            let orderList = [];
            querySnapshot.forEach((doc) => {
                orderList.push({ id: doc.id, ...doc.data() });
            });
            setOrders(orderList);

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } catch (error) {
            console.error("Error fetching orders:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <Container className="mt-4 history-container">
            <h3>📚 Your Order History</h3>

            {loading ? (
                <div className="text-center mt-4">
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-2">Fetching Orders... ⏳</p>
                </div>
            ) : orders.length > 0 ? (
                <Table striped bordered hover responsive className="mt-3">
                    <thead>
                        <tr className="text-center">
                            <th>Order ID</th>
                            <th>Items</th>
                            <th>Total Amount</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="text-center align-middle">
                                <td>{order.id}</td>
                                <td>
                                    {order.items.map((item, index) => (
                                        <div key={index}>
                                            {item.product_name} - ${Number(item.product_price).toFixed(2)}
                                        </div>
                                    ))}
                                </td>
                                <td>${order.totalAmount.toFixed(2)}</td>
                                <td>{new Date(order.orderDate).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <h5 className="text-muted mt-3">😕 No Orders Placed Yet!</h5>
            )}

            <Button variant="primary" className="mt-3" onClick={() => navigate("/")}>
            🏠 Go Home
            </Button>
        </Container>
    );
};

export default OrderHistory;
