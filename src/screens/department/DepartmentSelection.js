import React from "react";
import { useNavigate } from "react-router-dom";
import "./DepartmentSelection.css";
import doctor from "../../assets/premium_photo-1658506671316-0b293df7c72b.jpeg";
import { FaArrowLeft } from 'react-icons/fa';
import departments from "../../departments.json"; 



const DepartmentSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="departments-container">
      <div className="sticky-header">
      <button className="back-button" onClick={() => navigate(-1)}>
  <FaArrowLeft size={15} />
</button>

  <img src="https://www.imh.ae/wp-content/uploads/2023/04/Group-3.svg" alt="Millennium Hospital Logo" />
</div>

      {/* Back Button */}
      {/* <button className="back-button" onClick={() => navigate(-1)}>←</button> */}
      
      {/* Page Title */}
      <h2 style={{ marginTop: "85px", marginBottom: "40px", fontSize: "25px" }}>
  Choose Department
</h2>



<div className="department-grid">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="department-card"
            onClick={() => navigate(`/doctors/${dept.name}`)}
          >
            <img
              src={dept.image}
              alt={dept.name}
              className="department-image"
            />
            <div className="department-name">{dept.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentSelection;
