import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I&apos;m <span className="purple">Madhu Sesha Sai Papinani</span>, a
            backend-focused software engineer who turns complex requirements into
            dependable, scalable solutions.
            <br />
            <br />
            In my current role, I&apos;ve designed and deployed serverless data
            pipelines on <span className="purple">AWS</span> using <span className="purple">Lambda</span>,{" "}
            <span className="purple">S3</span>, and <span className="purple">DynamoDB</span>, and built
            Python-based Lambda functions to transform structured data from complex JSON inputs.
            <br />
            <br />
            I&apos;ve also implemented AI-driven workflows by integrating{" "}
            <span className="purple">OpenAI</span> and <span className="purple">Anthropic (Claude)</span> APIs,
            including prompt-engineering improvements that enhance accuracy, consistency, and
            reliability.
            <br />
            <br />
            Earlier, I worked as a <span className="purple">Full-Stack Developer Intern</span>, building
            an OCR-based extraction system with <span className="purple">PyTesseract</span> and a secure{" "}
            <span className="purple">Python–Django</span> backend backed by <span className="purple">MySQL</span>.
            <br />
            <br />
            Alongside engineering, I actively practice data structures and
            algorithms, with <span className="purple">400+</span> LeetCode problems and{" "}
            <span className="purple">6 badges</span>.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building scalable backend systems and automation
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on LLM workflows, integrations, and prompt engineering
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing DSA to strengthen problem-solving foundations
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning continuously through real-world projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Madhu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
