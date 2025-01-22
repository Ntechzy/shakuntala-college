import React from "react";

const BAMSStudentAttendance = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <iframe
        src="https://docs.google.com/spreadsheets/d/1zgqzlOozLRx1bUYU_oZ6gR3G57VAoF4_/edit?usp=sharing&ouid=110670461028772638778&rtpof=true&sd=true"
        frameBorder="0"
        style={{
          width: "80vw",
          height: "100vh",
          border: "none",
        }}
        title="BAMS Student Attendance"
      ></iframe>
    </div>
  );
};

export default BAMSStudentAttendance;
