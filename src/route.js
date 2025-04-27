// src/route.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingScreen from './screens/landing/LandingScreen';
import VirtualAssistant from './screens/home/VirtualAssistant';
import DepartmentSelection  from './screens/department/DepartmentSelection';
import DoctorsList   from './screens/listing/DoctorsList';
import InsurancePartners    from './screens/insurance/InsurancePartners';
import RadiologyLaboratory     from './screens/lab/RadiologyLaboratory';
import TourismDisplay     from './screens/tourism/TourismDisplay';
import Service     from './screens/service/Service';
import ServiceDetails     from './screens/service-details/ServiceDetails';
import ThankYouScreen     from './screens/thanks-screen/Thankyou';
import Scanning from './screens/scanning/Scanning';
import SecretPDFPage from './screens/secret/SecretPDFPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/assistant" element={<VirtualAssistant />} />
      <Route path="/departments" element={<DepartmentSelection />} />
      <Route path="/doctors/:department" element={<DoctorsList />} />
      <Route path="/insurance-partners" element={<InsurancePartners />} />
      <Route path="/radiology-laboratory" element={<RadiologyLaboratory />} />


      {/* tourism */}
      <Route path="/tourism-display" element={<TourismDisplay />} />
      <Route path="/service" element={<Service />} />
      <Route path="/service-details/:slug" element={<ServiceDetails />} />
      <Route path="/thank-you" element={<ThankYouScreen />} />
      <Route path="/scanning" element={<Scanning />} />
      <Route path="/download_pdf" element={<SecretPDFPage/>} />
    
    </Routes>
  );
};

export default AppRoutes;
