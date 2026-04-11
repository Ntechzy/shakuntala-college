import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const HumanResourceCommittee = () => {
  const documents = {
    members: "/committees/human-resource-committee/members.pdf",
    minutes: "/committees/human-resource-committee/minutes.pdf",
    conclusion: "/committees/human-resource-committee/conclusion.pdf",
  };

  return <CommitteePageTemplate title="Minutes of Human Resources Development Cell Committee" documents={documents} />;
};

export default HumanResourceCommittee;
