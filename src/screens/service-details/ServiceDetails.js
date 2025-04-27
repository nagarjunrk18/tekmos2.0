import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Nav, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/ahm2.png";
 
const serviceData = [
  {
    id: 1,
    name: "Visas",
    description:
      "AMH Tourism offers seamless UAE visa services, ensuring hassle-free travel and efficient application processing. Additionally, through its partnership with VFS Global, AMH provides Medical at Your Doorstep services, making medical tests and procedures convenient and accessible for travellers and residents alike",
  },
  {
    id: 2,
    name: "B2B Booking Engine",
    description:
      "AMH Tourism's B2B Booking Engine is designed for travel businesses, offering a centralized platform for seamless bookings of flights, hotels, and transfers. Travel agencies & tour operators can access real-time availability, competitive pricing, and instant confirmations, ensuring efficient trip management.",
  },
  {
    id: 3,
    name: "Corporate booking Tool",
    description:
      "A Corporate Booking Tool (CBT) is an online software platform designed for businesses to facilitate and manage their employee's travel bookings. It simplifies the entire travel booking process, from searching for options to managing itineraries and approvals",
  },
  {
    id: 4,
    name: "Suppliers",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
];
 
const ServiceDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const serviceId = parseInt(slug);
  const service = serviceData.find((item) => item.id === serviceId);
 
  return (
    <div style={{  minHeight: "100vh",fontFamily: 'KingAndQueenDemo' }}> 
      <Container fluid>
        {/* Header Section */}
       
 
        {/* Avatar Video Section */}
 
        <Row
          className="py-4"
          style={{
            background: "linear-gradient(to bottom,rgb(175, 175, 175),rgb(168, 167, 167)), linear-gradient(to right,rgb(118, 115, 115), #FFFFFF)",
            backgroundBlendMode: "overlay",
          }}
        >
          <Col xs={12} md={12} className="text-end">
            <Button
              className="me-2"
              style={{
                backgroundColor: "#FFC107",
                borderColor: "#FFC107",
                borderRadius: "8px",
                padding: "4px 20px",
              }}
            >
              Book Now
            </Button>
            <Button
              style={{
                backgroundColor: "#2C7873",
                borderColor: "#2C7873",
                borderRadius: "8px",
                padding: "4px 20px",
              }}
            >
              Arabic
            </Button>
          </Col>
         
          <Col md={12} sm={12} className="d-flex justify-content-center">
            <video
              src="/videos/service-details.webm"
              controls={false}
              autoPlay
              loop
              playsInline
              style={{ width: "100%", maxWidth: "400px", height: "auto", objectFit: "cover" }}
              className="vid_width"
            ></video>
          </Col>
        </Row>
 
 
        {/* Content Section */}
        <Row
          className="py-4 px-3"
          style={{
            background: "linear-gradient(to bottom, rgb(218, 244, 255), #FFFFFF)",
            minHeight: "100vh",
            flex: "1",
          }}
        >
          {/* Sidebar */}
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <h4 style={{ color: "#2D3748",  marginBottom: "20px", textAlign: "center" }}>Services & Partners</h4>
            <div style={{  padding: "15px", borderRadius: "8px" }}>
              {serviceData.map((serviceItem) => (
                <div
                  key={serviceItem.id}
                  onClick={() => navigate(`/service-details/${serviceItem.id}`)}
                  style={{
                    backgroundColor: serviceId === serviceItem.id ? "#2C7873" : "#E6E6E6",
                    color: serviceId === serviceItem.id ? "#FFF" : "#2D3748",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  {serviceItem.name}
                </div>
              ))}
            </div>
          </Col>
 
          {/* Main Content */}
          <Col xs={12} md={9} style={{ backgroundColor: "#rgb(255, 255, 255)", padding: "20px", borderRadius: "8px" }}>
            {service ? (
              <>
                <h3 style={{ color: "#2D3748", marginBottom: "15px" }}>{service.name}</h3>
                <p style={{ color: "#4A5568", lineHeight: "1.6", marginBottom: "20px", fontSize: "16px" }}>{service.description}</p>
 
                {/* Features Section */}
                <Row className="mt-4">
                  <Col xs={12} sm={6} md={3} className="mb-3">
                    <Card
                      style={{
                        backgroundColor: "rgb(49, 201, 222)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Card.Body>
                        <Card.Text style={{ color: "#fff" }}>Wide Selection of Airlines</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={6} md={3} className="mb-3">
                    <Card
                      style={{
                        backgroundColor: "rgb(49, 201, 222)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Card.Body>
                        <Card.Text style={{ color: "#fff" }}>Flexible Booking Options</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={6} md={3} className="mb-3">
                    <Card
                      style={{
                        backgroundColor: "rgb(49, 201, 222)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Card.Body>
                        <Card.Text style={{ color: "#fff" }}>Premium Cabin Upgrades</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={6} md={3} className="mb-3">
                    <Card
                      style={{
                        backgroundColor: "rgb(49, 201, 222)",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px",
                        textAlign: "center",
                      }}
                    >
                      <Card.Body>
                        <Card.Text style={{ color: "#fff" }}>Expert Travel Assistance</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
 
                {/* Call to Action Button */}
                <div className="d-flex justify-content-center mt-4">
                  <Button
                    style={{
                      backgroundColor: "#FFC107",
                      borderColor: "#FFC107",
                      borderRadius: "8px",
                      padding: "10px 20px",
                      width: "100%",
                      maxWidth: "400px",
                      marginTop:"100px"
                    }}
                    onClick={() => window.location.href = "/scanning"}
                  >
                    I'm Interested
                  </Button>
                </div>
              </>
            ) : (
              <p style={{ color: "#4A5568" }}>Service not found</p>
            )}
          </Col>
        </Row>
 
        {/* Footer */}
        <Row className="py-3" style={{ backgroundColor: "#FFF", borderTop: "1px solid #E2E8F0", marginTop: "auto" }}>
            <Col xs={6} md={6}>
              <img src={logo} alt="AMH Logo" style={{ width: "100px" }} />
            </Col>
            <Col xs={6} md={6} className="text-end">
              <a href="https://www.amhtours.com" style={{ color: "#2C7873", textDecoration: "none",textAlign: "right" }}>
                www.amhtours.com
              </a>
            </Col>
          </Row>
      </Container>
    </div>
  );
};
 
export default ServiceDetails;