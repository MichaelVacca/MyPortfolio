import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import githubLogo from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <div className="navbar-logo">Michael Vacca</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/michael-vacca-594153230/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/MichaelVacca">
                <img src={githubLogo} alt="" />
              </a>
              {/* <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
