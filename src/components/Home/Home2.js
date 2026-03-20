import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> QUICK INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
              I&apos;m a backend-focused software engineer who builds reliable, scalable systems—from
              AWS serverless pipelines to AI-driven workflows.
              <br />
              <br />
              Recently, I designed and deployed serverless data pipelines using{" "}
              <b className="purple">AWS Lambda, S3, and DynamoDB</b> via the Serverless Framework, and
              developed Python-based Lambda functions to transform and extract structured data from
              complex JSON inputs.
              <br />
              <br />
              I&apos;ve also integrated{" "}
              <b className="purple">OpenAI</b> and <b className="purple">Anthropic (Claude)</b> APIs to
              power AI-driven automation for a Commercial Real Estate transaction platform, including
              prompt-engineering improvements for accuracy, consistency, and reliability.
              <br />
              <br />
              Previously, I developed an OCR-based extraction system using{" "}
              <b className="purple">PyTesseract</b> for UIDAI and PAN cards (improving accuracy by 30%)
              and built a secure <b className="purple">Python–Django</b> backend with{" "}
              <b className="purple">MySQL</b>.
              <br />
              <br />
              Alongside engineering, I actively practice data structures and algorithms—solving{" "}
              <b className="purple">400+</b> LeetCode problems and earning <b className="purple">6 badges</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
