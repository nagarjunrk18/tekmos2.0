import React from "react";
import "./TourismDisplay.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/ahm2.png"; 
import topImg from "../../assets/jet.jpg"; 

/* attraction partners */
import dubaiskydive from "../../assets/PARTNERS/PARTNERS/17.svg";
import dubailine from "../../assets/PARTNERS/PARTNERS/9.svg";
import aindubai from "../../assets/PARTNERS/PARTNERS/10.svg";
import atthetop from "../../assets/PARTNERS/PARTNERS/11.svg";
import dubaiframe from "../../assets/PARTNERS/PARTNERS/13.svg";
import mira from "../../assets/PARTNERS/PARTNERS/14.svg";
import louvreabudabi from "../../assets/PARTNERS/PARTNERS/15.svg";
import musiumoffuture from "../../assets/PARTNERS/PARTNERS/16.svg";
import palmjumera from "../../assets/PARTNERS/PARTNERS/18.svg";

/* Footer logo */

import barcelonaLogo from "../../assets/PARTNERS/PARTNERS/25.svg";
const partners = [
  dubaiskydive,
  dubailine,
  aindubai,
  atthetop,
  dubaiframe,
  mira,
  louvreabudabi,
  musiumoffuture,
  palmjumera,
];

const TourismDisplay = () => {
  const navigate = useNavigate();

  return (
    <div className="second-screen">
      <Container className="screen-wrapper" style={{ fontFamily: "KingAndQueenDemo" }}>
        
        {/* Top Logo */}
        <Row className="justify-content-center">
          <Col xs="auto">
            <Image src={logo} alt="AMH Logo" className="amh-logo" fluid />
          </Col>
        </Row>

        {/* Plane Image */}
        <Row className="justify-content-center">
  <Col xs={12}>
    <video
      src="/videos/TV 6 _ Horizontal2.mov"
      autoPlay
      loop
      
      playsInline
      className="plane-video"
      style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
    />
  </Col>
</Row>
       {/*  <Row className="justify-content-center">
          <Col xs={12}>
            <Image src={topImg} alt="Private Jet" fluid className="plane-image" />
          </Col>
        </Row> */}

        {/* Heading */}
        <Row className="justify-content-center">
          <Col xs={12}>
            <h2 className="heading">
              Unlock the World with AMH
              <br />
              Your Gateway to Global Travel Excellence
            </h2>
          </Col>
        </Row>

        {/* Find out more button */}
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button
              className="find-more-button"
              style={{ padding: "13px 18px", borderRadius: "8px", fontSize: "16px" }}
             
              onClick={() => navigate("/service")}
            >
              FIND OUR MORE
            </Button>
          </Col>
        </Row>

        {/* Group of Companies */}
        <Row className="justify-content-center group-title">
          <Col xs="auto">
            <h5>Attraction Partners</h5>
          </Col>
        </Row>
        <Row className="justify-content-center partners-logos">
          {partners.map((partner, index) => (
            <Col xs={4} sm={2} key={index} className="partner-logo">
              <Image src={partner} fluid />
            </Col>
          ))}
        </Row>

        {/* Footer - Official GCC Agent */}
        <Row className="justify-content-center footer">
          <Col xs="auto" className="footer-text">
            Official GCC Agent
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Image src={barcelonaLogo} alt="Barcelona Logo" className="barca-logo" fluid />
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default TourismDisplay;
