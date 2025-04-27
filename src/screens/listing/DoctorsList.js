import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DoctorsList.css";
import doctorsData from "../../doctorsData.json";
import { FaArrowLeft } from 'react-icons/fa';


const DoctorsList = () => {
  const { department } = useParams(); // Get department from URL
  const navigate = useNavigate();
  const doctors = doctorsData[department] || []; // Get doctors for the selected department

  return (
    <div className="doctors-container">
       <div className="sticky-header">
            <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft size={15} />
      </button>
      
        <img src="https://www.imh.ae/wp-content/uploads/2023/04/Group-3.svg" alt="Millennium Hospital Logo" />
      </div>
      <h2 style={{ marginTop: "85px", marginBottom: "40px", fontSize: "25px" }}>
      Doctors List
</h2>
      

      {doctors.length > 0 ? (
        doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-details">
              <h2>{doctor.name}</h2>
              <p><strong>{doctor.specialty}</strong></p>
              <p>Time: {doctor.time}</p>
              <p>Floor No: {doctor.floor}</p>
              <p>Languages: {doctor.languages}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No doctors available for this department.</p>
      )}
    </div>
  );
};

export default DoctorsList;
