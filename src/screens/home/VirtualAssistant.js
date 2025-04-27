import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./VirtualAssistant.css";
import logo from "../../assets/1641560613794.jpeg";
import doctor from "../../assets/premium_photo-1658506671316-0b293df7c72b.jpeg";
import radio from "../../assets/downloadradio(1).jpeg";
import insurance from "../../assets/download.jpeg";

const VirtualAssistant = () => {
  const iframeRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const enableAudio = () => {
      // Send a message to the iframe to enable audio playback.
      // This approach depends on whether Synthesia supports receiving such commands.
      if (iframeRef.current) {
        iframeRef.current.contentWindow.postMessage(
          '{"event":"command","func":"unMuteVideo","args":""}',
          "*"
        );
      }
      // Remove event listener after first interaction
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);
  return (
    <div className="assistant-container">
      <div className="sticky-header">
        <img src="https://www.imh.ae/wp-content/uploads/2023/04/Group-3.svg" alt="Millennium Hospital Logo" />
      </div>
      {/* Video Section */}
      <div className="video-section">
      <div className="video-section">
      <iframe
          ref={iframeRef}
          src="https://share.synthesia.io/embeds/videos/37f5c87d-d86f-415b-8c05-37f54e9c6b77?autoplay=1&controls=0"
          width="100%"
          height="300"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="assistant-video"
        ></iframe>
      </div>

      </div>


    

      {/* Interactive Menu Cards */}
      <div className="menu">
        <div className="menu-item" onClick={() => navigate("/departments")}>
          <span>Check Doctor's Availability</span>
          <img src={doctor} alt="Doctor" />
        </div>
        <div className="menu-item" onClick={() => navigate("/insurance-partners")}>
          <span>Our Insurance Partners</span>
          <img src={insurance} alt="Insurance" />
        </div>
        <div className="menu-item" onClick={() => navigate("/radiology-laboratory")}>
          <span>Radiology & Laboratory</span>
          <img src={radio} alt="Lab" />
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
