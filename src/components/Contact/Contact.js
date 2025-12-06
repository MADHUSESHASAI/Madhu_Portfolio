import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_10zjb0t",
        "template_xd29eq9",
        formData,
        "JTf_fWcwz_ofrMBP0"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("Failed to send email. Try again.");
        }
      );
  };

  return (<>
  <Container fluid className="contact-section" style={{ marginTop: "40px" }}>
      <Row style={{ justifyContent: "center" }}>
        
        {/* CONTACT INFO CARD */}
        <Col md={5}>
          <Card
            className="quote-card-view"
            style={{
              marginBottom: "20px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <Card.Body>
              <h2 className="purple">Contact Info</h2>
              <p>
                <strong>Mobile:</strong><br /> <span className="purple">+91 8919751029</span>
                <br />
                <strong>Email:</strong>{" "}<br />
                <span className="purple">saimadhu57024@gmail.com or madhupapinani@gmail.com</span>
              </p>
            </Card.Body>
          </Card>
        </Col>

      
      </Row>
    </Container>
    <Container fluid className="contact-section" style={{ marginTop: "40px" }}>
      <Row style={{ justifyContent: "center" }}>
        
       

        {/* SEND EMAIL CARD */}
        <Col md={5}>
          <Card
            className="quote-card-view"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "15px",
              padding: "20px",
            }}
          >
            <Card.Body>
              <h2 className="purple">Send Me a Message</h2>

              <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="from_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="reply_to"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Write your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Email
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  
  </>
    
  );
}

export default Contact;
