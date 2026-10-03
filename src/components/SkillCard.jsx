export default function SkillCard({
  skill,
  onClick
}) {
  return (
    <button
      className="skill-card"
      onClick={() => onClick(skill.title)}
    >
      <span className="icon">
        {skill.icon}
      </span>

      <span>
        {skill.title}
      </span>
    </button>
  );
}
