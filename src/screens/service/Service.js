/* import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";
import "./service.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import "../../i18n";

import par2 from "../../assets/PARTNERS/PARTNERS/7.svg";

import par4 from "../../assets/PARTNERS/PARTNERS/4.svg";
import par5 from "../../assets/PARTNERS/PARTNERS/5.svg";
import par6 from "../../assets/PARTNERS/PARTNERS/6.svg";
import par7 from "../../assets/PARTNERS/PARTNERS/7.svg";
import par8 from "../../assets/PARTNERS/PARTNERS/8.svg";
import air from "../../assets/air22.jpeg";
import healthservice from "../../assets/healthservice-logo.jpeg";
import logo from "../../assets/ahm2.png";

//attraction partners 
import dubaiskydive from "../../assets/PARTNERS/PARTNERS/17.svg";
import dubailine from "../../assets/PARTNERS/PARTNERS/9.svg";
import aindubai from "../../assets/PARTNERS/PARTNERS/10.svg";
import atthetop from "../../assets/PARTNERS/PARTNERS/11.svg";
import dubaiframe from "../../assets/PARTNERS/PARTNERS/13.svg";
import mira from "../../assets/PARTNERS/PARTNERS/14.svg";
import louvreabudabi from "../../assets/PARTNERS/PARTNERS/15.svg";
import musiumoffuture from "../../assets/PARTNERS/PARTNERS/16.svg";
import palmjumera from "../../assets/PARTNERS/PARTNERS/18.svg";


// hotel and meet and greet partner 
import meetndgreek from "../../assets/PARTNERS/PARTNERS/20.svg";
import dubaiinterhotel from "../../assets/PARTNERS/PARTNERS/21.svg";
import mgm from "../../assets/PARTNERS/PARTNERS/22.svg";

// jv parteners
import ehs from "../../assets/PARTNERS/PARTNERS/3.svg";
import vfsglobe from "../../assets/PARTNERS/PARTNERS/22.svg";



// airlines 
import kamair from "../../assets/PARTNERS/PARTNERS/1.svg";
import madagaskarair from "../../assets/PARTNERS/PARTNERS/2.svg";

// official gcc agent 
import fcbarcelona from "../../assets/PARTNERS/PARTNERS/25.svg";

const serviceData = [
  {
    id: 1,
    name: "Visas",
    image: "/images/USCIS_H2b_visa_1745458760423_1745458760614.jpg",
    description:
      "AMH Tourism offers seamless UAE visa services, ensuring hassle-free travel and efficient application processing. Additionally, through its partnership with VFS Global, AMH provides Medical at Your Doorstep services, making medical tests and procedures convenient and accessible for travellers and residents alike",
  },
  {
    id: 2,
    name: "B2B Booking Engine",
    image: "/images/Key-features-of-B2B-travel-solutions.webp",
    description:
      "AMH Tourism's B2B Booking Engine is designed for travel businesses, offering a centralized platform for seamless bookings of flights, hotels, and transfers. Travel agencies & tour operators can access real-time availability, competitive pricing, and instant confirmations, ensuring efficient trip management.",
  },
  {
    id: 3,
    name: "Corporate booking Tool (CBT)",
    image: "/images/Best-ways-to-manage-the-booking-process.jpg",
    description:
      "A Corporate Booking Tool (CBT) is an online software platform designed for businesses to facilitate and manage their employee's travel bookings. It simplifies the entire travel booking process, from searching for options to managing itineraries and approvals",
  },
  {
    id: 4,
    name: "Suppliers",
    image: "/images/supplier_lifecycle_mgmt.png",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
];

const Service = () => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");

  const handleLanguageToggle = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };
  return (
    <div style={{ minHeight: "100vh",  background: "linear-gradient(to bottom, rgb(218, 244, 255), #FFFFFF)", fontFamily: "KingAndQueenDemo" }}>
    <Container fluid>
      
      <Row
        className="py-4"
       
      >
        <Col xs={12} className="text-end">
          <Button
            className="me-2 find-more-button"
            style={{
              backgroundColor: "#FFC107",
              borderColor: "#FFC107",
              borderRadius: "8px",
              padding: "8px 30px",
            }}
          >
            {t("bookNow")}
          </Button>
          <Button
            className="find-more-button"
            style={{
              backgroundColor: "#2C7873",
              borderColor: "#2C7873",
              borderRadius: "8px",
              padding: "8px 30px",
            }}
            onClick={handleLanguageToggle}
          >
            {currentLang === "en" ? t("arabic") : t("english")}
          </Button>
        </Col>
      </Row>
    
      <Row
        className="py-4 px-3"
        
      >
        <div className="services-section w-100">
        <img src={logo} alt="AMH Logo" className="service-logo" />
          <h2 className="section-title">{t("servicesTitle")}</h2>
          <div className="services-grid">
            {serviceData.map((service) => (
              <div
                className="service-card"
                key={service.id}
                onClick={() => navigate(`/service-details/${service.id}`)}
              >
                <img src={service.image} alt={service.name} />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Row>

     
      <Row
        className="py-3"
        style={{
          backgroundColor: "#FFF",
          borderTop: "1px solid #E2E8F0",
        }}
      >
        <Col xs={6} md={6}>
          <img src={logo} alt="AMH Logo" style={{ width: "100px" }} />
        </Col>
        <Col xs={6} md={6} className="text-end">
          <a
            href="https://www.amhtours.com"
            style={{
              color: "#2C7873",
              textDecoration: "none",
              textAlign: "right",
            }}
          >
            www.amhtours.com
          </a>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default Service;
 */

import React, { useEffect, useRef, useState } from "react";
import "./service.css";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import logo from "../../assets/ahm2.png";
import topImg from "../../assets/jet.jpg";




import { useTranslation } from "react-i18next";
import "../../i18n";

/* group company */
import maplebeer from "../../assets/PARTNERS/PARTNERS/8.svg";
import rashid from "../../assets/PARTNERS/PARTNERS/7.svg";
import kpm from "../../assets/PARTNERS/PARTNERS/6.svg";
import aspin from "../../assets/PARTNERS/PARTNERS/5.svg";
import ahm from "../../assets/PARTNERS/PARTNERS/4.svg";
 import mira from "../../assets/PARTNERS/PARTNERS/14.svg";
import louvreabudabi from "../../assets/PARTNERS/PARTNERS/15.svg";
import musiumoffuture from "../../assets/PARTNERS/PARTNERS/16.svg";
import palmjumera from "../../assets/PARTNERS/PARTNERS/18.svg"; 

/* Footer logo */

import barcelonaLogo from "../../assets/PARTNERS/PARTNERS/25.svg";
const groupcompany = [
  maplebeer,
  rashid,
  kpm,
  aspin,
  ahm,
  
 
];

const serviceData = [
  {
    id: 1,
    name: "DMC SERVICES",
    image: "/images/SERVICES/1.png",
    description:
      "AMH Tourism offers seamless UAE visa services, ensuring hassle-free travel and efficient application processing. Additionally, through its partnership with VFS Global, AMH provides Medical at Your Doorstep services, making medical tests and procedures convenient and accessible for travellers and residents alike",
  },
  {
    id: 2,
    name: "UAE Visa Services",
    image: "/images/SERVICES/2.png",
    description:
      "AMH Tourism's B2B Booking Engine is designed for travel businesses, offering a centralized platform for seamless bookings of flights, hotels, and transfers. Travel agencies & tour operators can access real-time availability, competitive pricing, and instant confirmations, ensuring efficient trip management.",
  },
  {
    id: 3,
    name: "UAE Attractions",
    image: "/images/SERVICES/3.png",
    description:
      "A Corporate Booking Tool (CBT) is an online software platform designed for businesses to facilitate and manage their employee's travel bookings. It simplifies the entire travel booking process, from searching for options to managing itineraries and approvals",
  },
  {
    id: 4,
    name: "Hotel-inside add point 3 and 8",
    image: "/images/SERVICES/4.png",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
  {
    id: 5,
    name: "Meet & Greet Services-inside",
    image: "/images/SERVICES/5.png",
    description:
      "A Corporate Booking Tool (CBT) is an online software platform designed for businesses to facilitate and manage their employee's travel bookings. It simplifies the entire travel booking process, from searching for options to managing itineraries and approvals",
  },
  {
    id: 6,
    name: "B2B OnlinePortal",
    image: "/images/SERVICES/6.png",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
  {
    id: 7,
    name: "Corporate Self-Booking Tool",
    image: "/images/SERVICES/7.png",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
  {
    id: 8,
    name: "JV partners",
    image: "/images/SERVICES/8.png",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
  {
    id: 9,
    name: "Airline GSA",
    image: "/images/SERVICES/9.png",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
  {
    id: 10,
    name: "AMH Sports",
    image: "/images/SERVICES/10.png",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
  {
    id: 11,
    name: "Hotel Toure Desk Concierge System",
    image: "/images/SERVICES/11.png",
    description:
      "Are you a supplier eager to collaborate with AMH? We are constantly looking for dependable, high-quality vendors to support our procurement operations. Joining forces with AMH opens doors to exciting business opportunities, lasting partnerships, and a strong professional network.",
  },
];

const Service = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("en");

  const handleLanguageToggle = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <div className="second-screen" style={{  fontFamily: "KingAndQueenDemo" }} >
      <div className="screen-wrapper">
        {/* Top Right Buttons */}
        <div className="top-bar">
          <button> {t("bookNow")}</button>
          <button onClick={handleLanguageToggle}>
            {currentLang === "en" ? t("arabic") : t("english")}
          </button>
        </div>

        {/* Center Logo */}
        <Image src={logo} alt="AMH Logo" className="amh-logo" fluid />

        {/* Title */}
        <h2 className="services-title">{t("servicesTitle")}</h2>

        {/* Services Grid */}
        <div className="services-grid">
          {serviceData.map((service) => (
            <div key={service.id} className="service-card"   onClick={() => navigate(`/service-details/${service.id}`)}>
              <img src={service.image} alt={service.name} />
              <p>{t(`services.${service.id}`)}</p>
            </div>
          ))}
        </div>

         <Row className="justify-content-center group-title">
                  <Col xs="auto">
                    <h2 className="services-title">Our group of Companies</h2>
                  </Col>
                </Row>
                <Row className="justify-content-center partners-logos">
                  {groupcompany.map((partner, index) => (
                    <Col xs={4} sm={2} key={index} className="partner-logo">
                      <Image src={partner} fluid />
                    </Col>
                  ))}
                </Row>
      </div>

      {/* Footer */}
      <div className="footer">
        <Image src={logo} alt="Footer Logo" />
        <span>www.amhtours.com</span>
      </div>
    </div>
  );
};

export default Service;
