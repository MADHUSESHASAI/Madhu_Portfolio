import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="VisiOCR"
              description="A smart Visitor Pass Management platform that uses OCR to read and authenticate visitor ID details automatically. The system delivers quick, reliable verification supported by efficient database design and smooth backend operations."
              ghLink="https://github.com/MADHUSESHASAI/VisiOCR"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="An AI-driven source code summarizer leveraging Hugging Face Transformers with QLoRA/PEFT for efficient fine-tuning. Features advanced prompt engineering, robust preprocessing, and BLEU/ROUGE-based evaluation to deliver high-quality, context-aware code summaries."
              demoLink="https://huggingface.co/12madhu34/codet5-finetuned-summary_60k"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Proximity-Based Mall Offer Platform"
              description="A proximity-based mall offer platform that uses geolocation to detect malls within a 200-meter radius and deliver instant promotional offers. Built with a secure ASP.NET Core backend, React/React Native interfaces, and MySQL-driven automated offer management."
              ghLink="https://github.com/soumyajit4419/Editor.io"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sudoku-Solver"
              description="A web application that allows users to input incomplete Sudoku boards and generates instant solutions using algorithmic backtracking. Delivers a clean, responsive interface backed by Django and SQLite for seamless puzzle solving."
              ghLink="https://github.com/MADHUSESHASAI/Sudoku-solver"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
