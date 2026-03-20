import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// Updated Google Drive Download Link for "resume"
const resumeLink =
  "https://drive.google.com/uc?export=download&id=1CEhmURrO7sCbKWmbIJsdpHLo3TCVzTIa";

const resumePreviewLink =
  "https://drive.google.com/file/d/1CEhmURrO7sCbKWmbIJsdpHLo3TCVzTIa/preview";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* PDF Preview */}
        <Row className="resume" style={{ justifyContent: "center", marginTop: "30px" }}>
          <iframe
            src={resumePreviewLink}
            width="80%"
            height="900px"
            style={{ border: "none" ,overflow: "auto"}}
            allow="autoplay"
            title="resume-preview"
          ></iframe>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
