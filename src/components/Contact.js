import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/space-conected.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const publicKey = "TgAgYlsA5TOyXR5L4";
  const serviceId = "service_v578639";
  const templateId = "template_8y1nf6o";
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  emailjs.init(publicKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const emailData = {
      from_name: `${formDetails.firstName} ${formDetails.lastName}`,
      phone_number: formDetails.phone,
      email: formDetails.email,
      message: formDetails.message,
    };

    if (!emailData.from_name) {
      console.log("Missing required field from name");
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Missing required field: from name",
      });
      return;
    } else if (!emailData.email) {
      console.log("Missing required field email");
      setButtonText("Send");
      setStatus({ success: false, message: "Missing required field: email" });
      return;
    } else if (!emailData.phone_number) {
      console.log("Missing required field phone number");
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Missing required field: phone number",
      });
      return;
    } else if (!emailData.message) {
      console.log("Missing required field message");
      setButtonText("Send");
      setStatus({ success: false, message: "Missing required field: message" });
      return;
    }

    emailjs.send(serviceId, templateId, emailData).then((response) => {
      return fetch("https://stingray-app-is5tx.ondigitalocean.app/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok: " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: "Message sent successfully" });
        })
        .catch((error) => {
          console.error("Success:", error);
          setButtonText("Send");
          setStatus({
            success: true,
            message: "Message sent successfully.",
          });
        });
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lasttName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
