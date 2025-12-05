import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Madhu Sesha Sai Papinani</span>.
            <br />
            I’m someone who enjoys understanding how systems work, solving
            complex problems, and creating things that actually help people.
            <br />
            I’m passionate about improving logic, optimizing workflows, and 
            building solutions that feel clean, structured, and reliable.
            <br />
            I constantly challenge myself through coding problems and have
            completed over <span className="purple">400+</span> of them on
            LeetCode, earning <span className="purple">6 badges</span> along the
            way. Problem-solving has become a daily habit for me.
            <br />
            <br />
            I also had an opportunity to work as a{" "}
            <span className="purple">Full-Stack Developer Intern</span>, where I
            focused on improving processes, working with teams, and contributing
            to projects that required patience, clarity, and disciplined effort.
            <br />
            <br />
            Outside of work and coding, I enjoy activities that help me grow and
            stay motivated:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving DSA problems & participating in contests
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating on projects and exploring ideas
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games to relax and reset
            </li>
            <li className="about-activity">
              <ImPointRight /> Taking up new challenges and learning through practice
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
