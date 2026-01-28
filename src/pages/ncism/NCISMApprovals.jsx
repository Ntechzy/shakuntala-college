import React from "react";
import DocumentViewer from "../../shared/DocumentViewer";

const NCISMApprovals = () => {
  return (
    <>
      <DocumentViewer
        title="Approval 2025-2026"
        fileUrl="/ncism-approvals/approval2526.pdf"
      />
      <DocumentViewer
        title="Approval 2024-2025"
        fileUrl="/ncism-approvals/approval2425.pdf"
      />
    </>
  );
};

export default NCISMApprovals;
