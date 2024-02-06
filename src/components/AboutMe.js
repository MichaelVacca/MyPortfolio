import "animate.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import checkmark from "../assets/img/checkmark.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Hocker from "../assets/img/HOCKEY.jpg";
import ME from "../assets/img/ME.jpg";

export const AboutMe = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1, // Only one item per slide
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // Only one item per slide
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Only one item per slide
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Only one item per slide
    },
  };
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-bx wow zoomIn">
              <h2>About Me</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    src={ME}
                    alt="Image"
                    style={{ maxWidth: "100%", height: "800" }}
                  />
                  <h5>Who am I?</h5>
                  <p>Short description about Java skills.</p>{" "}
                </div>
                <div className="item">
                  <img
                    src={Hocker}
                    alt="Image"
                    style={{ maxWidth: "100%", height: "800" }}
                  />
                  <h5>Hockey</h5>
                  <p>Short description about Java skills.</p>{" "}
                </div>
                {/* ... other items */}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
