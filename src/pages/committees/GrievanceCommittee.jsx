import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const GrievanceCommittee = () => {
  const documents = {
    members: "/committees/grievance-committee/members.pdf",
    minutes: "/committees/grievance-committee/minutes.pdf",
    conclusion: "/committees/grievance-committee/conclusion.pdf",
  };

  return <CommitteePageTemplate title="Grievance Committee" documents={documents} />;
};

export default GrievanceCommittee;
