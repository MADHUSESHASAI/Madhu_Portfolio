import React from "react";
import Card from "react-bootstrap/Card";

function Education() {
  return (
    <div>
      

      {/* MCA Card */}
      <Card
        className="tech-icons-text"
        style={{
          marginBottom: "20px",
          color:"inherit",
          background: "none",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "15px",
        }}
      >
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <h3 >Master of Computer Applications (MCA)</h3>
            <p>
              <strong className="purple">Jawaharlal Nehru Technological University Gurajada Vizianagaram</strong>
              <br />
              2023 – 2025
              <br />
              CGPA: 8.5
            </p>
          </blockquote>
        </Card.Body>
      </Card>

      {/* B.Sc Card */}
      <Card
        className="tech-icons-text"
        style={{
          color:"inherit",
          marginBottom: "20px",
          background: "none",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "15px",
        }}
      >
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <h3 >
              Bachelor of Mathematics, Chemistry & Computer Science
            </h3>
            <p>
              <strong className="purple">Aditya Degree College Vizianagaram</strong>
              <br />
              2020 – 2023
              <br />
              CGPA: 8.5
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Education;
