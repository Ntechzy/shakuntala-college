import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const InternalQualityAssuranceCommittee = () => {
  const documents = {
    members: "/committees/internal-quality-assurance-committee/members.pdf",
    minutes: "/committees/internal-quality-assurance-committee/minutes.pdf",
    conclusion: "/committees/internal-quality-assurance-committee/conclusion.pdf",
  };

  return (
    <CommitteePageTemplate
      title="Internal Quality Assurance Committee"
      documents={documents}
    />
  );
};

export default InternalQualityAssuranceCommittee;
