

/* import React from "react";
import "./LandingScreen.css"; 
import logo from "../../assets/ahm2.png";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="start-screen-wrapper">
    <div className="decorated-border">
    
      <span className="corner-bl"></span>
      <span className="corner-br"></span>

      <img src={logo} alt="AMH Tourism Logo" className="logo-image" />
      <button className="start-button" onClick={() => navigate("/tourism-display")}>Start Virtual Assistant</button>
    </div>
    <button onClick={() => window.location.href="/download_pdf"} className="hidden_place"></button>
  </div>
  
  );
};

export default LandingPage; */
import React from "react";
import "./LandingScreen.css"; 
import { Container, Button ,Image} from 'react-bootstrap';
import logo from "../../assets/ahm2.png";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="start-page">
    <Container className="d-flex flex-column justify-content-center align-items-center h-100 container-border" style={{ fontFamily: 'KingAndQueenDemo' }}>
      
      <div className="logo-text">   <Image
              src={logo}  
              alt="AMH Logo"
              fluid
              className="logo-image"
            /></div>
      
  {/*     margin-top: 25px !important;
  padding:
14px 17px;
  border-radius:
14px; */}
      <Button className="start-button"   style={{
    marginTop: '25px',
    padding: '14px 17px',
    borderRadius: '14px'
  }} size="lg"  onClick={() => navigate("/tourism-display")}>
        START VISUAL ASSISTANT
      </Button>
    </Container>
  </div>
  
  );
};

export default LandingPage;
  {/* <div className="container">
     <div className="logo-container">
  <div className="logo-text">
    <h4 className="logo-title">AHM</h4>
    <p className="tagline">Tourism</p>
  </div>
  
</div>

      <button className="start-button" onClick={() => navigate("/tourism-display")}>Start Virtual Assistant</button>
    </div> */}