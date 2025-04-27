

import React, { useEffect, useRef, useState } from "react";
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
  Card
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
/*  */

/* hotel and meet and greet partner */
import meetndgreek from "../../assets/PARTNERS/PARTNERS/20.svg";
import dubaiinterhotel from "../../assets/PARTNERS/PARTNERS/21.svg";
import mgm from "../../assets/PARTNERS/PARTNERS/22.svg";
/*  */
/*  jv parteners*/
import ehs from "../../assets/PARTNERS/PARTNERS/3.svg";
import vfsglobe from "../../assets/PARTNERS/PARTNERS/22.svg";

/*  */

/* airlines */
import kamair from "../../assets/PARTNERS/PARTNERS/1.svg";
import madagaskarair from "../../assets/PARTNERS/PARTNERS/2.svg";
/*  */

/* official gcc agent */
import fcbarcelona from "../../assets/PARTNERS/PARTNERS/25.svg";
/*  */
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
  const [currentLang, setCurrentLang] = useState('en');
  
  const handleLanguageToggle = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };
  return (
    <div style={{  minHeight: "100vh",fontFamily: 'KingAndQueenDemo' }} >
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
              {t('bookNow')}
            </Button>
            <Button
              style={{
                backgroundColor: "#2C7873",
                borderColor: "#2C7873",
                borderRadius: "8px",
                padding: "4px 20px",
              }}
              onClick={handleLanguageToggle}
            >
              {currentLang === "en" ? t("arabic") : t("english")}
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
         
         <div className="services-section">
        <h2 className="section-title"> {t('servicesTitle')}</h2>
        <Container>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="services-swiper"
          >
            {serviceData.map((service) => (
              <SwiperSlide key={service.id}>
                <div
                  className="service-slide"
                  onClick={() => navigate(`/service-details/${service.id}`)}
                >
                  <img src={service.image} alt={service.name} />
                  <p className="service-title">{t(`services.${service.id}`)}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>

    
      <div className="partners-section">
        <h2 className="section-title">{/*  {t('partnersTitle')} */}Airline GSA</h2>
        <Container>
          <Row className="justify-content-center partners-row">
            {[madagaskarair, kamair].map((partner, idx) => (
              <Col xs={4} md={2} className="partner-logo" key={idx}>
                <img src={partner} alt={`Partner ${idx + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="partners-section">
        <h2 className="section-title">Hotel & Meet and Greet Partners</h2>
        <Container>
          <Row className="justify-content-center partners-row">
            {[dubaiinterhotel, meetndgreek,mgm].map((partner, idx) => (
              <Col xs={4} md={2} className="partner-logo" key={idx}>
                <img src={partner} alt={`Partner ${idx + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="partners-section">
        <h2 className="section-title">JV Partners</h2>
        <Container>
          <Row className="justify-content-center partners-row">
            {[vfsglobe, ehs].map((partner, idx) => (
              <Col xs={4} md={2} className="partner-logo" key={idx}>
                <img src={partner} alt={`Partner ${idx + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="partners-section">
        <h2 className="section-title">Official Gcc Agent</h2>
        <Container>
          <Row className="justify-content-center partners-row">
            {[fcbarcelona].map((partner, idx) => (
              <Col xs={4} md={2} className="partner-logo" key={idx}>
                <img src={partner} alt={`Partner ${idx + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="partners-section">
        <h2 className="section-title">Attraction Partners</h2>
        <Container>
          <Row className="justify-content-center partners-row">
            {[dubaiskydive,dubailine,aindubai,atthetop,dubaiframe,mira,louvreabudabi,musiumoffuture,palmjumera].map((partner, idx) => (
              <Col xs={4} md={2} className="partner-logo" key={idx}>
                <img src={partner} alt={`Partner ${idx + 1}`} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

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
 
export default Service;
/* import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./service.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../../assets/1641560613794.jpeg";
import doctor from "../../assets/premium_photo-1658506671316-0b293df7c72b.jpeg";
import radio from "../../assets/downloadradio(1).jpeg";
import insurance from "../../assets/download.jpeg";

const Service = () => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

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

  useEffect(() => {
    setServices(serviceData);
    const enableAudio = () => {
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"unMuteVideo","args":""}',
          "*"
        );
      }

      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);
  return (
    <div className="landing-container">
      <div className="video-boxx">
        <video
          src="/videos/service-details.webm"
          autoPlay
          loop
          playsInline
          className="vid_width"
          controls={false}
        ></video>
      </div>
      <div className="slider-container">
        <h2 className="slider-title">Our Services</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.2}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div
                className="service-card"
                onClick={() => navigate(`/service-details/${service.id}`)}
              >
                <img src={service.image} alt={service.name} />
                <p>{service.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Service;
 */
