import Typewriter from "typewriter-effect";
import "./Home.css";
import MonDiplome from "./certificate_Data-science.pdf";
const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hi I'Am</h1>
        <h3 className="home-content">
          <Typewriter
            options={{
              strings: [
                "Dieudonne",
                "Web Developer",
                "full stack developer",
                "developer mobile",
              ],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h3>
        <div className="button-for-action">
          <div className="here-me-button">Hire me</div>
          <div className="get-resume-button">
            <a href={MonDiplome} download>
              Get resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
