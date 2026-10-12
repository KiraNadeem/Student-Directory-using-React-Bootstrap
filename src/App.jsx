import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
  Breadcrumb,
  Row,
  Col,
  Card,
  Pagination,
  Alert
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [students] = useState([
    {
      id: 443,
      name: "Jonathan",
      major: "Computer Science",
      year: 1,
      gpa: 2.4,
      email: "jonathan@studentportal.com",
      phone: "+1 555 123 4430"
    },
    {
      id: 234,
      name: "Adeena",
      major: "Computer Science",
      year: 4,
      gpa: 3.9,
      email: "adeena@studentportal.com",
      phone: "+1 555 123 2340"
    },
    {
      id: 231,
      name: "Fatima",
      major: "Computer Science",
      year: 4,
      gpa: 4.0,
      email: "fatima@studentportal.com",
      phone: "+1 555 123 2310"
    },
    {
      id: 122,
      name: "Khalid",
      major: "Computer Science",
      year: 1,
      gpa: 3.0,
      email: "khalid@studentportal.com",
      phone: "+1 555 123 1220"
    }
  ]);

  const [showAlert, setShowAlert] = useState(true);

  // Store the profile views for each student separately.
  const [profileViews, setProfileViews] = useState({});

  // Track which students have their details visible.
  const [visibleDetails, setVisibleDetails] = useState({});

  const handleViewProfile = (studentId) => {
    setProfileViews((previousViews) => ({
      ...previousViews,
      [studentId]: (previousViews[studentId] || 0) + 1
    }));
  };

  const toggleDetails = (studentId) => {
    setVisibleDetails((previousDetails) => ({
      ...previousDetails,
      [studentId]: !previousDetails[studentId]
    }));
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: '#fff0f3' }}
    >
      {/* Custom Pink Theme Styles */}
      <style>{`
        .custom-pink-btn {
          background-color: #d81b60;
          border-color: #d81b60;
          color: white;
        }

        .custom-pink-btn:hover {
          background-color: #ad1457;
          border-color: #ad1457;
          color: white;
        }

        .custom-outline-pink {
          color: #d81b60;
          border-color: #d81b60;
        }

        .custom-outline-pink:hover {
          background-color: #d81b60;
          border-color: #d81b60;
          color: white;
        }

        .page-item.active .page-link {
          background-color: #d81b60 !important;
          border-color: #d81b60 !important;
        }

        .page-link {
          color: #d81b60;
        }

        .student-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .student-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 0.5rem 1rem rgba(216, 27, 96, 0.12) !important;
        }

        .profile-views {
          color: #ad1457;
          background-color: #fce4ec;
          padding: 8px 10px;
          border-radius: 6px;
          font-size: 0.875rem;
          margin-top: 14px;
          margin-bottom: 12px;
        }

        .student-details {
          background-color: #fff0f3;
          border: 1px solid #f8bbd0;
          border-radius: 8px;
          padding: 12px;
          margin-top: 12px;
          overflow-wrap: anywhere;
        }

        .student-details a {
          color: #ad1457;
          text-decoration: none;
        }

        .student-details a:hover {
          text-decoration: underline;
        }

        .student-action-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .student-action-buttons .btn {
          flex: 1;
        }
      `}</style>

      {/* Navbar */}
      <Navbar bg="white" expand="lg" className="border-bottom px-4 shadow-sm">
        <Container fluid>
          <Navbar.Brand
            href="#home"
            className="fw-bold"
            style={{ color: '#d81b60' }}
          >
            StudentPortal
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>

              <Nav.Link
                href="#students"
                active
                style={{ color: '#d81b60' }}
              >
                Students
              </Nav.Link>

              <Nav.Link href="#courses">Courses</Nav.Link>
              <Nav.Link href="#reports">Reports</Nav.Link>
            </Nav>

            <Nav className="align-items-lg-center">
              <NavDropdown
                title="Settings"
                id="settings-dropdown"
                className="me-lg-3"
              >
                <NavDropdown.Item href="#action/1">
                  Profile Settings
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/2">
                  Preferences
                </NavDropdown.Item>
              </NavDropdown>

              <Form
                className="d-flex"
                onSubmit={(event) => event.preventDefault()}
              >
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2 rounded-1"
                  aria-label="Search"
                />

                <Button type="submit" className="custom-pink-btn">
                  Search
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="flex-grow-1 py-4">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item href="#home">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#students">Students</Breadcrumb.Item>
          <Breadcrumb.Item active>Directory</Breadcrumb.Item>
        </Breadcrumb>

        {/* Page Header */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <h2 className="fw-bold text-dark mb-0">
            Student Directory
          </h2>

          <Button className="custom-pink-btn fw-semibold px-3">
            Add New Student
          </Button>
        </div>

        {/* Student Cards */}
        <Row className="g-4 mb-4">
          {students.map((student) => {
            const views = profileViews[student.id] || 0;
            const detailsVisible =
              Boolean(visibleDetails[student.id]);

            return (
              <Col key={student.id} xs={12} sm={6} md={3}>
                <Card className="student-card h-100 shadow-sm border text-center pb-3 bg-white">
                  {/* Avatar */}
                  <div
                    className="py-4 mb-3 d-flex justify-content-center align-items-center"
                    style={{
                      height: "120px",
                      backgroundColor: '#f8bbd0'
                    }}
                  >
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: '#d81b60'
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-person-fill text-white"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>
                  </div>

                  <Card.Body className="text-start px-3 py-0">
                    <Card.Title className="fw-bold fs-5 mb-2 text-dark">
                      {student.name}
                    </Card.Title>

                    <Card.Text className="mb-1 text-muted small">
                      ID: {student.id}
                    </Card.Text>

                    <Card.Text className="mb-1 text-muted small">
                      Major: {student.major}
                    </Card.Text>

                    <Card.Text className="mb-1 text-muted small">
                      Year: {student.year}
                    </Card.Text>

                    <Card.Text className="mb-0 text-muted small">
                      GPA: {student.gpa.toFixed(1)}
                    </Card.Text>

                    {/* Profile Views Counter */}
                    <div
                      className="profile-views"
                      aria-live="polite"
                    >
                      Profile Views:{' '}
                      <strong>{views}</strong>
                    </div>

                    {/* Action Buttons */}
                    <div className="student-action-buttons mt-3">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="custom-outline-pink"
                        onClick={() => handleViewProfile(student.id)}
                      >
                        View Profile
                      </Button>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => toggleDetails(student.id)}
                        aria-expanded={detailsVisible}
                        aria-controls={`student-details-${student.id}`}
                      >
                        {detailsVisible ? 'Hide Detail' : 'View Detail'}
                      </Button>
                    </div>

                    {/* Contact Details */}
                    {detailsVisible && (
                      <div
                        id={`student-details-${student.id}`}
                        className="student-details"
                      >
                        <p className="small fw-bold mb-2">
                          Contact Details
                        </p>

                        <p className="small mb-2">
                          <strong>Email:</strong>
                          <br />
                          <a href={`mailto:${student.email}`}>
                            {student.email}
                          </a>
                        </p>

                        <p className="small mb-0">
                          <strong>Phone:</strong>
                          <br />
                          <a href={`tel:${student.phone}`}>
                            {student.phone}
                          </a>
                        </p>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* Pagination */}
        <div className="d-flex justify-content-center mb-4">
          <Pagination className="mb-0">
            <Pagination.Prev>Previous</Pagination.Prev>
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next>Next</Pagination.Next>
          </Pagination>
        </div>

        {/* Success Alert */}
        {showAlert && (
          <Alert
            variant="info"
            onClose={() => setShowAlert(false)}
            dismissible
            className="border-0 text-dark mb-4"
            style={{ backgroundColor: '#fce4ec' }}
          >
            Student records have been successfully updated.
          </Alert>
        )}
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white-50 py-5 mt-auto border-top border-secondary">
        <Container>
          <Row>
            <Col md={6}>
              <h5 className="text-white mb-3">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a
                    href="#home"
                    className="text-white-50 text-decoration-none"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#cs"
                    className="text-white-50 text-decoration-none"
                  >
                    Computer Science
                  </a>
                </li>

                <li>
                  <a
                    href="#courses"
                    className="text-white-50 text-decoration-none"
                  >
                    Courses
                  </a>
                </li>

                <li>
                  <a
                    href="#reports"
                    className="text-white-50 text-decoration-none"
                  >
                    Reports
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={6}>
              <h5 className="text-white mb-3">Contact Info</h5>

              <p className="mb-1 text-white-50">Contact Us</p>
              <p className="mb-1 text-white-50">
                +1: 123 456 7890
              </p>
              <p className="mb-0 text-white-50">
                trm@studentportal.com
              </p>
            </Col>
          </Row>

          <div className="text-center text-white-50 mt-4 small border-top border-secondary pt-3">
            © 2026 StudentPortal. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;