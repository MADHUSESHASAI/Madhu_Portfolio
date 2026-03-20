import React from "react";
import { Container, Row } from "react-bootstrap";

function Experience() {
  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <h1 className="project-heading">
            <strong className="purple">Experience</strong>
          </h1>
        </Row>

        <Row className="resume" style={{ justifyContent: "center", marginTop: "10px" }}>
          <div className="resume-item" style={{ width: "100%" }}>
            <h3 className="resume-title">Software Engineer | CRE Brains</h3>
            <div style={{ paddingTop: "5px", paddingBottom: "10px", color: "rgba(255,255,255,0.9)" }}>
              January 2026 – Present | Remote
            </div>
            <ul>
              <li>
                Designed and deployed serverless data pipelines using AWS Lambda, S3, and DynamoDB via
                Serverless Framework.
              </li>
              <li>
                Developed Python-based Lambda functions to transform and extract structured data from
                complex JSON inputs.
              </li>
              <li>
                Built AI-driven workflows by integrating OpenAI and Anthropic (Claude) APIs for a
                Commercial Real Estate transaction platform.
              </li>
              <li>
                Optimized prompt engineering strategies to improve LLM response accuracy, consistency, and
                reliability.
              </li>
              <li>
                Enhanced backend interoperability by integrating Go services with Python-based serverless
                components.
              </li>
            </ul>
          </div>

          <div className="resume-item" style={{ width: "100%" }}>
            <h3 className="resume-title">Full-Stack Developer Intern | Infosys Springboard</h3>
            <div style={{ paddingTop: "5px", paddingBottom: "10px", color: "rgba(255,255,255,0.9)" }}>
              October 2024 – December 2024 | Remote
            </div>
            <ul>
              <li>
                Developed an OCR-based system using PyTesseract to automate data extraction from UIDAI and
                PAN cards, improving accuracy by 30%.
              </li>
              <li>
                Built a Python–Django backend with MySQL for secure data processing and storage.
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;

