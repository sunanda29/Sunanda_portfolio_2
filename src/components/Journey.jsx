export default function Journey({ journey }) {
  return (
    <section className="section" id="journey">

      <h2>Professional Journey</h2>

      <div className="timeline">

        {journey.map((item) => (
          <div
            key={item.company}
            className="timeline-item"
          >
            <h3>{item.company}</h3>

            <h4>{item.title}</h4>

            <small>{item.years}</small>

            <p>{item.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
}
