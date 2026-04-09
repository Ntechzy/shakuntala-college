import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const AcademicCommittee = () => {
  const documents = {
    members: "/committees/academic-committee/members.pdf",
    minutes: "/committees/academic-committee/minutes.pdf",
    conclusion: "/committees/academic-committee/conclusion.pdf",
  };

  return <CommitteePageTemplate title="Academic Committee" documents={documents} />;
};

export default AcademicCommittee;
