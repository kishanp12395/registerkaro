
import React from "react";

const CompanyPage = () => {
  return (
    <div className="company-page">
      <h1 className="tagline">Trusted by Over 100+ Startups and Freelance Businesses</h1>
      <div className="logo-container">
        <img src='../public/oracle-6.svg' alt="Oracle" className="company-logo" />
        <img src="../public/morpheus.svg" alt="Morpheus" className="company-logo" />
        <img src="../public/samsung.svg" alt="Samsung" className="company-logo" />
        <img src="../public/monday.svg" alt="Monday" className="company-logo" />
        <img src="../public/segment.svg" alt="Segment" className="company-logo" />
      </div>
    </div>
  );
};

export default CompanyPage;