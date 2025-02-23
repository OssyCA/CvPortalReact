import MyEdu from "../assets/myEducation.json";
import MyExp from "../assets/myExperience.json";

export default function Cv() {
  return (
    <>
      <section className="Cv" id="cv">
        <div className="education">
          <h3>Education</h3>
          <ul className="cvlist">
            {MyEdu.education.map((edu, index) => (
              <li key={index}>
                <h4>{edu.program}</h4>
                <p>
                  {edu.institution}, {edu.location}
                </p>
                <p>
                  {edu.start_date}-{edu.end_date}
                </p>
                <p>{edu.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="work_experience">
          <h3>Experience</h3>
          <ul className="cvlist">
            {MyExp.experience.map((exp, index) => (
              <li key={index}>
                <h4>{exp.job_title}</h4>
                <p>
                  {exp.company}, {exp.location}
                </p>
                <p>
                  {exp.start_date}-{exp.end_date}
                </p>
                <p>{exp.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
