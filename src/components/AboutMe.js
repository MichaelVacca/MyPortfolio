import "animate.css";

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
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
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
                This section is dedicated to showcasing my personal interests
                and hobbies outside of the tech world.
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
                  <p>
                    I started my Journey in the tech world since I was curoius
                    on how software, websites and games were made. I've since
                    continued to pursue and learn new topics which further
                    reinforced this interest
                  </p>{" "}
                </div>
                <div className="item">
                  <img
                    src={Hocker}
                    alt="Image"
                    style={{ maxWidth: "100%", height: "800" }}
                  />
                  <h5>Hockey</h5>
                  <p>
                    Being a Canadian, hockey was introduced to me when I was 2
                    years old and I've been playing it every year ever since
                    then.{" "}
                  </p>{" "}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
