import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import acms1 from "../assets/img/acms.svg";
import petC from "../assets/img/petclinic.png";
import camSheild from "../assets/img/CAMSHEILD.png";
import Desert1 from "../assets/img/DesertStorm.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "ACMS",
      description: "Full stack management software for a local business",
      imgUrl: acms1,
      url: "https://github.com/Iantomasi/ateliermecanique-ws",
    },
    {
      title: "Pet Clinic",
      description: "My First introduction to full stack development",
      imgUrl: petC,
      url: "https://github.com/cgerard321/champlain_petclinic",
    },
    {
      title: "Desert Storm",
      description: "Game Design & Development",
      imgUrl: Desert1,
      url: "https://github.com/SamuelNguyen2121/UnityFinalProject",
    },
    {
      title: "Cam Sheild Pro",
      description: "A raspberryPi security camera project",
      imgUrl: camSheild,
      url: "https://github.com/Futurespast/SecurityCamera",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I've worked on throughout my
                    studies and on my own time with many more to come in the
                    other tab sections.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Noteable Works</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Coming Soon</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          This is where the projects im currently working on
                          will be displayed as well as any future projects. Once
                          I have completed a project it will be moved to the
                          first tab.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
