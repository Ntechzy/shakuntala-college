import React from "react";

const ConferenceActivities = () => {
  const pdfUrl = '/shakuntala-activities.pdf';

  return (
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '100%' }}>
        <h2 style={{ color: '#333',textAlign:"center" }}>Activities</h2>
        <div style={{ width: "100%", padding: "22px", backgroundColor: 'white' }}>
          <embed
              src={pdfUrl}
              type="application/pdf"
              width="100%"
              height="600px"
              style={{ border: 'none' }}
          />
        </div>
      </div>
  );
};

export default ConferenceActivities;
