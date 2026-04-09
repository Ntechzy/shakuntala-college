import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const CollegeCommittee = () => {
  const documents = {
    members: "/committees/college-committee/members.pdf",
    minutes: "/committees/college-committee/minutes.pdf",
    conclusion: "/committees/college-committee/conclusion.pdf",
  };

  return <CommitteePageTemplate title="College Committee" documents={documents} />;
};

export default CollegeCommittee;
