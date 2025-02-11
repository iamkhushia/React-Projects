import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, InputGroup, Row, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const EmployeeCrud = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", company: "", age: "", position: "", department: "" });
    const [editingIndex, setEditingIndex] = useState(null);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(storedEmployees);
    }, []);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required..";
        if (!formData.email) tempErrors.email = "Email is required..";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Invalid email format..";
        if (!formData.company) tempErrors.company = "Company is required..";
        if (!formData.age || formData.age <= 0) tempErrors.age = "Valid age is required..";
        if (!formData.position) tempErrors.position = "Position is required..";
        if (!formData.department) tempErrors.department = "Department is required..";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        let updatedEmployees;
        if (editingIndex !== null) {
            updatedEmployees = employees.map((emp, index) => (index === editingIndex ? formData : emp));
            setEditingIndex(null);
        } else {
            if (employees.some(emp => emp.email === formData.email)) {
                alert("Employee with this email already exists!");
                return;
            }
            updatedEmployees = [...employees, formData];
        }
        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        setFormData({ name: "", email: "", company: "", age: "", position: "", department: "" });
    };

    const handleEdit = (index) => {
        setFormData(employees[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    };

    return (
        <Container>
            <Row>
                <Col sm="9">
                    <div className="employee-data-add">
                        <Form onSubmit={handleSubmit} className="employee-form">
                            <h2 className="employee-data">Employee Details Crud</h2>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Name:</InputGroup.Text>
                                <Form.Control name="name" placeholder="enter your name" value={formData.name} onChange={handleChange} />
                            </InputGroup>
                            {errors.name && <p className="error-text">{errors.name}</p>}<br></br>

                            <Form.Group className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" placeholder="enter your email" name="email" value={formData.email} onChange={handleChange} />
                            </Form.Group>
                            {errors.email && <p className="error-text">{errors.email}</p>}<br></br>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>Company:</InputGroup.Text>
                                <Form.Control name="company" placeholder="enter company name" value={formData.company} onChange={handleChange} />
                            </InputGroup>
                            {errors.company && <p className="error-text">{errors.company}</p>}<br></br>

                            <Form.Group className="mb-3">
                                <Form.Label>Age:</Form.Label>
                                <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} />
                            </Form.Group>
                            {errors.age && <p className="error-text">{errors.age}</p>}<br></br>

                            <Form.Select name="position" value={formData.position} onChange={handleChange} className="mb-3">
                                <option value="">Select Position</option>
                                <option value="Project manager">Project manager</option>
                                <option value="Staff manager">Staff manager</option>
                                <option value="Company manager">Company manager</option>
                                <option value="Company manager">Branch manager</option>
                                <option value="Company manager">Feculty manager</option>
                            </Form.Select>
                            {errors.position && <p className="error-text">{errors.position}</p>}<br></br>

                            <Form.Select name="department" value={formData.department} onChange={handleChange} className="mb-3">
                                <option value="">Select Department</option>
                                <option value="Project department">Project department</option>
                                <option value="HR department">HR department</option>
                                <option value="Sales department">Sales department</option>
                                <option value="Sales department">Office department</option>
                                <option value="Sales department">Employee department</option>
                            </Form.Select>
                            {errors.department && <p className="error-text">{errors.department}</p>}

                            

                            <Button type="submit" variant="secondary" className="submit-btn">
                                {editingIndex !== null ? "Update" : "Submit"}
                            </Button><br></br>
                        </Form>
                    </div>
                </Col>

                <div className="employee-view-data">
                    <Col>
                        <h2 className="employee-view">View Employee Details</h2>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                    <th>Age</th>
                                    <th>Position</th>
                                    <th>Department</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((emp, index) => (
                                    <tr key={index}>
                                        <td>{emp.name}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.company}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.position}</td>
                                        <td>{emp.department}</td>
                                        <td>
                                            <Button variant="warning" size="sm" onClick={() => handleEdit(index)}><FaEdit /></Button>
                                            <Button variant="danger" size="sm" className="ms-2" onClick={() => handleDelete(index)}><FaTrash /></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </div>
            </Row>
        </Container>
    );
};

export default EmployeeCrud;