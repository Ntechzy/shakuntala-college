import React from "react";
import ExcelViewer from "../../../../shared/ExcelViewer";
import DocumentViewer from "../../../../shared/DocumentViewer";

const NCISMStudentAttendance2526 = () => {
  return (
    <>
      <DocumentViewer
        title="Student Attendance July (Academic Year 2025–2026)"
        fileUrl="/ncism-students/2025-2026/attendanceJuly2025-26.pdf"
      />
      <DocumentViewer
        title="Student Attendance (Academic Year 2025–2026)"
        fileUrl="https://res.cloudinary.com/dhlqc0ymy/image/upload/v1784112712/2025-26_batch_adwl4v.pdf"
      />
    </>
  );
};

export default NCISMStudentAttendance2526;
