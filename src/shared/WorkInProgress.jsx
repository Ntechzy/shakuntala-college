import "./workInProgress.css";

const WorkInProgress = () => {
  return (
    <section className="wip-section" aria-labelledby="wip-title">
      <div className="wip-panel">
        <div className="wip-logo-ring">
          <img src="/image99.png" alt="Shakuntala Ayurvedic College logo" />
        </div>
        <h1 id="wip-title" className="wip-title">Work In Progress</h1>
        <div className="wip-progress" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
};

export default WorkInProgress;
