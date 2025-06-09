import ProfilPic from "../../image/dieudonne.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container about-section">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={ProfilPic} alt="profile photo" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>A propos de moi</h5>
              <span className="line"></span>
            </div>
            <p>
              Je suis un développeur web passionné et dévoué avec une solide
              base en HTML, CSS et JavaScript. J'ai une solide compréhension des
              technologies frontales, y compris React, Angular, et Vue, et je
              suis compétent dans la construction d'applications web réactives
              et conviviales. J'ai également de l'expérience en travaillant avec
              des technologies back-end, telles que Node.js, Express.js, et
              MongoDB, et j'ai un vif intérêt pour l'apprentissage de nouvelles
              technologies et pour rester à jour avec les dernières tendances en
              matière de développement web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
