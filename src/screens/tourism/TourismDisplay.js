import React from "react";
import "./TourismDisplay.css";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ahm2.png";
import topImg from "../../assets/jet.jpg";

const TourismDisplay = () => {
  const navigate = useNavigate();

  return (
    <div className="second-screen">
      <Container className="screen-wrapper" style={{ fontFamily: 'KingAndQueenDemo' }}>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Image
              src={topImg} 
              alt="Private Jet"
              fluid
              className="plane-image"
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12}>
            <h2 className="heading">
              Unlock the World with AMH<br />
              Your Gateway to Global Travel Excellence
            </h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs="auto">
            <Button className="find-more-button"  style={{
    marginTop: '25px',
    padding: '14px 17px',
    borderRadius: '14px'
  }}  onClick={() => navigate("/service")}>
              FIND OUT MORE
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center logo-row">
          <Col xs={6} md={4}>
            <Image
              src={logo}  
              alt="AMH Logo"
              fluid
              className="logo-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TourismDisplay;
/* import React from "react";
import "./TourismDisplay.css";

import { useNavigate } from "react-router-dom";
import logo from "../../assets/ahmwhite.png";

const TourismDisplay = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container"  style={{ fontFamily: "KingAndQueenDemo" }}>
      <div className="video-box">
        <video
          src="/videos/WhatsApp Video 2025-04-24 at 18.43.52_905f8f1f.mp4"
          controls={false}
          autoPlay
          loop
          playsInline
          className="tourism-video"
        ></video>
      
        <div className="video-text">
          Explore UAE like a VIP
          <br />
          with AMH Organized
        </div>
      </div>
      <div className="content">
        <h1>
          Your Adventure
          <br />
          Awaits
        </h1>
        <div className="star">&#10022;</div>
        <button className="cta-button" onClick={() => navigate("/service")}>
          Find out more!
        </button>
        <div className="brand">
          {" "}
          <img src={logo} alt="AMH Tourism Logo" className="logo-imagee" />
        </div>
      </div>
    </div>
  );
};

export default TourismDisplay;
 */