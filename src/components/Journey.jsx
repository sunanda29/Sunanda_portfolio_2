import { careerJourney } from "../data/careerJourney";

export default function Journey() {
  return (
    <section>
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
          </div>
        ))}
      </div>
    </section>
  );
}
