import React, { useState } from 'react';
import { 
  Navbar, Nav, NavDropdown, Container, Form, FormControl, Button, 
  Breadcrumb, Row, Col, Card, Pagination, Alert 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [students] = useState([
    { id: 101, name: "Jane Doe", major: "Computer Science", year: 2, gpa: 3.8, variant: "outline-primary" },
    { id: 102, name: "Mary Doe", major: "Computer Science", year: 2, gpa: 3.8, variant: "outline-danger" },
    { id: 103, name: "Gant Doe", major: "Computer Science", year: 2, gpa: 3.8, variant: "outline-danger" },
    { id: 104, name: "Amm Doe", major: "Computer Science", year: 2, gpa: 3.8, variant: "outline-danger" },
  ]);

  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* 1. Navbar */}
      <Navbar bg="white" expand="lg" className="border-bottom px-4 shadow-sm">
        <Container fluid>
          <Navbar.Brand href="#home" className="fw-bold">StudentPortal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#students" active>Students</Nav.Link>
              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#reports">Reports</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <NavDropdown title="Settings" id="settings-dropdown" className="me-3">
                <NavDropdown.Item href="#action/1">Profile Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Preferences</NavDropdown.Item>
              </NavDropdown>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-1"
                  aria-label="Search"
                />
                <Button variant="primary">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content Area */}
      <Container className="flex-grow-1 py-4">
        
        {/* 2. Breadcrumb text matching image */}
        <div className="bg-dark text-white p-2 mb-4 rounded small">
          <code>.breadcrumb / breadcrumb-item / Home / Students / Directory</code>
        </div>
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Students</Breadcrumb.Item>
          <Breadcrumb.Item active>Directory</Breadcrumb.Item>
        </Breadcrumb>

        {/* 3. Page Header and Button (Fixed text color visibility) */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-normal text-dark">Page Header</h2>
          <Button variant="primary" className="fw-semibold px-3">Add New Student</Button>
        </div>

        {/* 4. Student Cards Grid */}
        <Row className="g-4 mb-4">
          {students.map((student) => (
            <Col key={student.id} xs={12} sm={6} md={3}>
              <Card className="h-100 shadow-sm border text-center pb-3">
                {/* Gray Avatar Placeholder */}
                <div className="bg-secondary bg-opacity-25 py-4 mb-3 d-flex justify-content-center align-items-center" style={{ height: "120px" }}>
                  <div className="rounded-circle bg-secondary bg-opacity-50 d-flex justify-content-center align-items-center" style={{ width: "60px", height: "60px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill text-white" viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                  </div>
                </div>
                <Card.Body className="text-start px-3 py-0">
                  <Card.Title className="fw-bold fs-5 mb-2">{student.name}</Card.Title>
                  <Card.Text className="mb-1 text-muted small">ID: {student.id}</Card.Text>
                  <Card.Text className="mb-1 text-muted small">Major: {student.major}</Card.Text>
                  <Card.Text className="mb-1 text-muted small">Year: {student.year}</Card.Text>
                  <Card.Text className="mb-3 text-muted small">GPA: {student.gpa}</Card.Text>
                  
                  <div className="d-flex justify-content-between mt-3">
                    <Button variant="outline-primary" size="sm">View Profile</Button>
                    <Button variant="outline-danger" size="sm">Delete</Button>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-danger small font-monospace">.{student.variant}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* 5. Pagination */}
        <div className="d-flex justify-content-center mb-4">
          <Pagination className="mb-0">
            <Pagination.Prev>Previous</Pagination.Prev>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next>Next</Pagination.Next>
          </Pagination>
        </div>

        {/* 6. Success Alert */}
        {showAlert && (
          <Alert variant="info" onClose={() => setShowAlert(false)} dismissible className="bg-info bg-opacity-25 border-info text-dark mb-4">
            Student records have been successfully updated.
          </Alert>
        )}

      </Container>

      {/* 7. Dark Footer */}
      <footer className="bg-dark text-white-50 py-5 mt-auto border-top border-secondary">
        <Container>
          <Row>
            <Col md={6}>
              <h5 className="text-white mb-3">Links</h5>
              <ul className="list-unstyled">
                <li><a href="#home" className="text-white-50 text-decoration-none">Home</a></li>
                <li><a href="#cs" className="text-white-50 text-decoration-none">Computer Science</a></li>
                <li><a href="#courses" className="text-white-50 text-decoration-none">Courses</a></li>
                <li><a href="#reports" className="text-white-50 text-decoration-none">Reports</a></li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-white mb-3">Contact Info</h5>
              <p className="mb-1 text-white-50">Contact Us</p>
              <p className="mb-1 text-white-50">+1: 123 456 7890</p>
              <p className="mb-0 text-white-50">trm@studentportal.com</p>
            </Col>
          </Row>
          <div className="text-center text-white-50 mt-4 small border-top border-secondary pt-3">
            © 2024 StudentPortal. All rights reserved.
          </div>
        </Container>
      </footer>

    </div>
  );
}

export default App;