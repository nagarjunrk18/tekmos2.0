import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import insuranceData from "../../insuranceData.json";
import "./InsurancePartners.css";
import { FaArrowLeft } from 'react-icons/fa';

const InsurancePartners = () => {
  const navigate = useNavigate();
  const [selectedInsurance, setSelectedInsurance] = useState(null);


  const handleInsuranceClick = (insurance) => {
    setSelectedInsurance(insurance); // Show modal

    // Close popup after 5 seconds
    setTimeout(() => {
      setSelectedInsurance(null);
    }, 5000);
  };

  return (
    <div className="insurance-container">
      <div className="sticky-header">
              <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft size={15} />
              </button>
      
              <img src="https://www.imh.ae/wp-content/uploads/2023/04/Group-3.svg" alt="Millennium Hospital Logo" />
      </div>

      <h2 style={{ marginTop: "85px", marginBottom: "40px", fontSize: "25px" }}>
        Our Insurance Partners
      </h2>
      

      <div className="insurance-grid">
        {insuranceData.map((insurance, index) => (
          <div key={index} className="insurance-card"  onClick={() => handleInsuranceClick(insurance)}>
            <img src={insurance.logo} alt={insurance.name} className="insurance-logo" />
            <div className="insurance-name">{insurance.name}</div>
          </div>
        ))}
      </div>

      {selectedInsurance && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={() => setSelectedInsurance(null)}>×</button>
            <img src={selectedInsurance.logo} alt={selectedInsurance.name} className="popup-logo" />
            <h2>{selectedInsurance.name}</h2>
            <img src={`/insurance-details/${selectedInsurance.name.toLowerCase()}.jpg`} alt="Details" className="popup-details" />
          </div>
        </div>
      )}
    </div>
  );
};

export default InsurancePartners;
