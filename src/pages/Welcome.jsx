import { useNavigate } from "react-router-dom";
import SnowEffect from "../Components/SnowEffect";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <SnowEffect />
      <h1 className="welcomeHeader">Welcome</h1>
      <p className="description">
        {" "}
        Fullstack .NET Student in search of an exciting internship.
      </p>

      <button id="discBtn" onClick={() => navigate("/about")}>
        Discover me
      </button>
    </>
  );
};

export default Welcome;
