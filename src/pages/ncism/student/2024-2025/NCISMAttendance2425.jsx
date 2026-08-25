import React from "react";
import ExcelViewer from "../../../../shared/ExcelViewer";
import DocumentViewer from '../../../../shared/DocumentViewer'

const NCISMAttendance2425 = () => {
  return (
    <>
      <DocumentViewer
        title="Student Attendance (Academic Year 2024–2025 July)"
        fileUrl="/ncism-students/2024-2025/attendanceJuly2024-25.pdf"
      />
      <DocumentViewer
        title="Student Attendance (Academic Year 2024–2025 June)"
        fileUrl="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784112469/2024-25_June_b07jn1.pdf"
      />
    </>
  );
};

export default NCISMAttendance2425;
