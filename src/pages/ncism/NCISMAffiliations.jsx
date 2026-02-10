import React from "react";
import DocumentViewer from "../../shared/DocumentViewer";

const documents = [
  {
    title: "MGGAU Affiliation 2025–2026",
    fileUrl: "/ncism-affiliations/MGGAU2526.pdf",
  },
  {
    title: "MGGAU Affiliation 2024–2025",
    fileUrl: "/ncism-affiliations/MGGAU2425.pdf",
  },
];

const NCISMAffiliations = () => {
  return (
    <>
      {documents.map((doc, index) => (
        <DocumentViewer
          key={index}
          title={doc.title}
          fileUrl={doc.fileUrl}
        />
      ))}
    </>
  );
};

export default NCISMAffiliations;
