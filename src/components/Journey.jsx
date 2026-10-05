import { careerJourney } from "../data/careerJourney";

export default function Journey() {
  return (
    <section className="section">
      <h2 className="section-title">
        Professional Journey
      </h2>

      <div className="journey-grid">
        {careerJourney.map((job, index) => (
          <div
            key={index}
            className="journey-card"
          >
            <div className="journey-company">
              {job.company}
            </div>

            <div className="journey-role">
              {job.role}
            </div>

            {job.period && (
              <div className="journey-period">
                {job.period}
              </div>
            )}

            {job.summary && (
              <div className="journey-summary">
                {job.summary}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
