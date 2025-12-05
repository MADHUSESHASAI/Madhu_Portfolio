import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">LeetCode</strong> Journey
      </h1>

      <div
        style={{
          backgroundColor: "#1a1a1a",
          padding: "20px",
          borderRadius: "10px",
          width: "fit-content",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "15px" }}>
          Solved <span className="purple">400+ Problems</span>
        </h3>

        <h4 style={{ marginBottom: "20px" }}>
          Earned <span className="purple">6 Badges</span>
        </h4>

        <a
          href="https://leetcode.com/u/saimadhu1606/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{
            backgroundColor: "#fefefeff",
            border: "none",
            fontWeight: "600",
          }}
        >
          View My LeetCode Profile
        </a>
      </div>
    </Row>
  );
}

export default Github;
