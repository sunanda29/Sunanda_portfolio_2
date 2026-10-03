export default function Projects({
  projects,
  hasPermission
}) {
  return (
    <section
      id="projects"
      className="section"
    >

      <h2>Selected Project Experience</h2>

      {projects.map(project => (

        <div
          key={project.id}
          className="project-card"
        >

          <h3>{project.title}</h3>

          <p>{project.summary}</p>

          {hasPermission ? (
            <div className="project-details">

              <p>
                {project.details}
              </p>

            </div>
          ) : (
            <div className="project-locked">

              🔒 Additional project details available
              upon request.

            </div>
          )}

        </div>

      ))}

    </section>
  );
}
``
