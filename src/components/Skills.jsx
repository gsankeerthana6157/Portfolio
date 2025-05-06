const Skills = () => (
  <section id="skills" className="section-alt">
    <h2 className="section-title">Skills</h2>
    <div className="badge-grid">
      {["Python", "React", "TensorFlow", "AWS", "SQL", "Docker", "GitHub", "Linux"].map(skill => (
        <span key={skill} className="badge">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;
