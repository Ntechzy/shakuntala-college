import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const SexualHarassmentCommittee = () => {
  const documents = {
    members: "/committees/sexual-harassment-committee/members.pdf",
    minutes: "/committees/sexual-harassment-committee/minutes.pdf",
    conclusion: "/committees/sexual-harassment-committee/conclusion.pdf",
  };

  return <CommitteePageTemplate title="Sexual Harassment Committee" documents={documents} />;
};

export default SexualHarassmentCommittee;
