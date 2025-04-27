import React from "react";
import { useNavigate } from "react-router-dom";
import radiologyLabData from "../../radiologyLabData.json";
import "./RadiologyLaboratory.css";
import { FaArrowLeft } from 'react-icons/fa';

const RadiologyLaboratory = () => {
  const navigate = useNavigate();

  return (
    <div className="radiology-lab-container">
            <div className="sticky-header">
                    <button className="back-button" onClick={() => navigate(-1)}>
                      <FaArrowLeft size={15} />
                    </button>
            
                    <img src="https://www.imh.ae/wp-content/uploads/2023/04/Group-3.svg" alt="Millennium Hospital Logo" />
            </div>
            <h2 style={{ marginTop: "85px", marginBottom: "40px", fontSize: "25px" }}>
            Radiology & Laboratory
          </h2>
      

      {/* Radiology Section */}
      <h2>Radiology</h2>
      <div className="radiology-lab-grid">
        {radiologyLabData.Radiology.map((item, index) => (
          <div key={index} className="radiology-lab-card">
            <img src={item.image} alt={item.name} className="radiology-lab-image" />
            <div className="radiology-lab-details">
              <h3>{item.name}</h3>
              <p>{item.floor}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Laboratory Section */}
      <h2>Laboratory</h2>
      <div className="radiology-lab-grid">
        {radiologyLabData.Laboratory.map((item, index) => (
          <div key={index} className="radiology-lab-card">
            <img src={item.image} alt={item.name} className="radiology-lab-image" />
            <div className="radiology-lab-details">
              <h3>{item.name}</h3>
              <p>{item.floor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadiologyLaboratory;
