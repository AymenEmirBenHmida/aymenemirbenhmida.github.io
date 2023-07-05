import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Key } from "react-bootstrap-icons";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/icons8-github.svg";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://personal-website-aymen-95f3e75d1692.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  const projectsList = [
    {
      name: "Project 1",
      description: "This is a project",
      type: "Mobile App",
    },
    {
      name: "Project 1",
      description: "This is a project",
      type: "Mobile App",
    },
    {
      name: "Project 1",
      description: "This is a project",
      type: "Mobile App",
    },
  ];

  return (
    <Container className="Projects_body" id="Projects">
      <Row>
        {projects.map((project) => {
          return (
            <Col md={6} className="my-3" key={project._id}>
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Type: {project.type}
                  </Card.Subtitle>
                  <Card.Text>Description: {project.description}</Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    {project.technologies.frameworks}
                    {project.technologies.languages}
                  </div>
                  <div>
                    {project.linkedIn_link && (
                      <a
                        href={project.linkedIn_link}
                        target="_blank"
                        style={{ marginRight: "10px" }}
                      >
                        LinkedIn
                      </a>
                    )}
                    {project.github_link && (
                      <a
                        href="https://github.com/AymenEmirBenHmida?tab=overview&from=2023-06-01&to=2023-06-29"
                        target="_blank"
                        style={{ marginRight: "10px" }}
                      >
                        Github
                      </a>
                    )}
                    {project.app_link && (
                      <a href={project.app_link} target="_blank">
                        play Store
                      </a>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Projects;
