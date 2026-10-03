import SkillCard from "./SkillCard";

export default function SkillExplorer({
  title,
  skills,
  onSelect
}) {
  return (
    <section className="section" id="skills">

      <h2>{title}</h2>

      <div className="skills-grid">

        {skills.map(skill => (
          <SkillCard
            key={skill.id}
            skill={skill}
            onClick={onSelect}
          />
        ))}

      </div>

    </section>
  );
}
