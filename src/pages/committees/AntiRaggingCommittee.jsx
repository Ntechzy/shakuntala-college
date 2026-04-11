import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const AntiRaggingCommittee = () => {
  const documents = {
    members: "/committees/anti-ragging-committee/members.pdf",
    minutes: "/committees/anti-ragging-committee/minutes.pdf",
    conclusion: "/committees/anti-ragging-committee/conclusion.pdf",
  };

  return <CommitteePageTemplate title="Anti Ragging" documents={documents} />;
};

export default AntiRaggingCommittee;
