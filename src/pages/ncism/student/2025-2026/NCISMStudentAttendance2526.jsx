import React from "react";
import ExcelViewer from "../../../../shared/ExcelViewer";
import DocumentViewer from "../../../../shared/DocumentViewer";

const NCISMStudentAttendance2526 = () => {
  return (
    <>
      <DocumentViewer
        title="Student Attendance (Academic Year 2025–2026)"
        fileUrl="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784112712/2025-26_batch_adwl4v.pdf"
      />
      <ExcelViewer
        title="Student Attendance (Academic Year 2025–2026)"
        fileUrl="https://res.cloudinary.com/dhlqc0ymy/raw/upload/v1772087846/studentAttendance25-26_wmxegg.xlsx"
      />
    </>
  );
};

export default NCISMStudentAttendance2526;
