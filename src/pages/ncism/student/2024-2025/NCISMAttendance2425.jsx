import React from "react";
import ExcelViewer from "../../../../shared/ExcelViewer";
import DocumentViewer from '../../../../shared/DocumentViewer'

const NCISMAttendance2425 = () => {
  return (
    <>
      <DocumentViewer
        title="Student Attendance (Academic Year 2024–2025 June)"
        fileUrl="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784112469/2024-25_June_b07jn1.pdf"
      />
      <ExcelViewer
        title="Student Attendance (Academic Year 2024–2025)"
        fileUrl="https://res.cloudinary.com/dhlqc0ymy/raw/upload/v1768024310/attendance24-25_vf9yob.xlsx"
      />
    </>
  );
};

export default NCISMAttendance2425;
