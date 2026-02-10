import React from "react";
import ExcelViewer from "../../../../shared/ExcelViewer";

const NCISMStudentList = () => {
  return (
    <ExcelViewer
      title="Student List (Academic Year 2024–2025)"
      fileUrl="https://res.cloudinary.com/dhlqc0ymy/raw/upload/v1768024309/studentList24-25_zfkon8.xlsx"
    />
  );
};

export default NCISMStudentList;
