import React from "react";

const HospitalNonTeachingStaffAttendance = () => {
  return (
    <div className="attendance-container">
      <h2>Hospital NonTeaching Staff Attendance</h2>
      <p>Click the link below to view the hospital nonTeaching staff attendance:</p>
      {/* Link to the Google Sheets file */}
      <a
        href="https://docs.google.com/spreadsheets/d/1gdUk8V77licPEWUgU-PAbN8tZaRcCGMU--8FYXZHAtE/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="excel-link"
      >
        View Hospital NonTeaching Staff Attendance
      </a>

      {/* Internal CSS */}
      <style jsx>{`
        .attendance-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: #f9f9f9;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        .excel-link {
          font-size: 1.5rem;
          color: #ffffff;
          background-color: #4CAF50;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .excel-link:hover {
          background-color: #45a049;
        }

        .excel-link:focus {
          outline: none;
          box-shadow: 0 0 5px 2px rgba(72, 212, 67, 0.5);
        }
      `}</style>
    </div>
  );
};

export default HospitalNonTeachingStaffAttendance;
