import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Backend-focused Software Engineer who loves turning 
              complex problems into reliable, scalable solutions. I enjoy understanding how
               systems work under the hood and building applications that are 
              clean, efficient, and easy to maintain.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, C#, Java, ASP.Net Core, SpringBoot, Data Structures & Algorithm{" "}
                </b>
              </i>
              — which has helped me become comfortable in both backend and full-stack development environments.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Backend Development, LLM Fine-Tuning {" "}
                </b>
              </i>
              and exploring how intelligent automation and machine learning can improve developer workflows.      <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> C#, Java </b> and modern frameworks like{" "}
              <i>
                <b className="purple">ASP.NetCore</b> and{" "}
                <b className="purple">Spring Boot</b>.
              </i>
              <br/>
              <br/>
              I love solving <b className="purple">DSA </b>problems and continuously pushing myself to think faster, deeper, and more logically,
regularly sharpening my skills through consistent practice on <b className="purple">LeetCode and GeeksforGeeks</b>.
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
