import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const ResearchPublicationCommittee = () => {
  const documents = {
    members: "/committees/research-publication-committee/members.pdf",
    minutes: "/committees/research-publication-committee/minutes.pdf",
    conclusion: "/committees/research-publication-committee/conclusion.pdf",
  };

  return (
    <CommitteePageTemplate title="Research Publication Committee" documents={documents} />
  );
};

export default ResearchPublicationCommittee;
