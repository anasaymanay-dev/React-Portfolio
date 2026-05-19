import "./skills.css";
import { skillsData } from "./skillsData";

export default function Skills() {
  const skillsList = skillsData.map((item, index) => {
    return (
      <article className="skills-item" key={index}>
        <div className="item-head">
          <span className="item-icon">{item.icon}</span>
          <h3>{item.title}</h3>
        </div>
        <div className="item-body">
          {item.skills.map((skill, idx) => {
            return (
              <div className="skill-card" key={idx}>
                <div className="skill-top">
                  <span className="skill-icon">{skill.icon}</span>
                  <h4>{skill.title}</h4>
                </div>
                <div className="prog">
                  <span
                    style={{
                      width: skill.prog,
                    }}
                  ></span>
                </div>
                <span className="percent">{skill.prog}</span>
              </div>
            );
          })}
        </div>
      </article>
    );
  });

  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <p className="section-subtitle">MY SKILLS</p>
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="heading-line"></div>
      </div>
      <div className="container">{skillsList}</div>
    </section>
  );
}
