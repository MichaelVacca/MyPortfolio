import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import checkmark from "../assets/img/checkmark.svg";
import colorSharp from "../assets/img/angryimg(6).png";
import JAVA from "../assets/img/JAVA.png";
import JavaS from "../assets/img/JS.png";
import ReactPic from "../assets/img/REACTp.png";
import GitPicture from "../assets/img/GITpic.png";
import CPicture from "../assets/img/Cshaarp.png";
import pythonPic from "../assets/img/pythonpicture.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My skills section showcases proficiency in Java, JavaScript,
                React, Git, C#, and Python, highlighting my versatility in
                software development and web applications.<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={JAVA} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={JavaS} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={ReactPic} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={GitPicture} alt="Image" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={CPicture} alt="Image" />
                  <h5>C#</h5>
                </div>
                <div className="item">
                  <img src={pythonPic} alt="Image" />
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
