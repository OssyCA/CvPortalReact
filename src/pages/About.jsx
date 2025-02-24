import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <>
      <section className="About_me" id="About_me">
        <h2>About me</h2>
        <img src="vikingAvatar.webp" alt="vikingLogo" />
        <div className="about_me_text">
          <p>
            I am a Swedish full-stack .NET developer student at Chas Academy. In
            our education, we learn to work with HTML, CSS, JavaScript, C#, SQL
            Server and React. I have a passion for programming and I am always
            eager to learn new things.
          </p>

          <button id="contactBtn" onClick={() => navigate("/contact")}>
            Contact Me
          </button>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div>
          <ul className="skills_list">
            <li>
              HTML <progress value="87" max="100"></progress>
            </li>
            <li>
              CSS <progress value="50" max="100"></progress>
            </li>
            <li>
              JavaScript <progress value="70" max="100"></progress>
            </li>
          </ul>
        </div>
        <div>
          <ul className="skills_list">
            <li>
              C# <progress value="85" max="100"></progress>
            </li>
            <li>
              SQL Server <progress value="80" max="100"></progress>
            </li>
            <li>
              Python <progress value="75" max="100"></progress>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
