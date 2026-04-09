import React from "react";
import CommitteePageTemplate from "./CommitteePageTemplate";

const CoCurricularCommittee = () => {
  const documents = {
    members: "/committees/co-curricular-committee/members.pdf",
    minutes: "/committees/co-curricular-committee/minutes.pdf",
    conclusion: "/committees/co-curricular-committee/conclusion.pdf",
  };

  return <CommitteePageTemplate title="Co-curricular Committee" documents={documents} />;
};

export default CoCurricularCommittee;
