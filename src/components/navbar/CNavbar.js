import React, { useState, useEffect } from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate, useNavigation } from "react-router-dom";
import { useHistory } from "react-router-dom";

function CNavbar({ color }) {
  const [activeRoute, setActiveRoute] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [ showSidebar, setShowSidebar ] = useState( false );

  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

 const handleCloseSidebar = () => {
   setShowSidebar(false);
 };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onChangeActiveRoute(route) {
    setActiveRoute(route);
  }

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }
  const backgroundstyle = {
    background: color,
  };
  function HandleNavigation(route) {
    navigate(route);
  }

 
    const handleDownloadFile = async () =>
    {
      fetch(
        "https://personal-website-aymen-95f3e75d1692.herokuapp.com/download/"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP error " + response.status);
          }
          return response.blob();
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;

          link.download = "AymenBenHamida__CV.pdf";
          document.body.appendChild(link);
          link.click();

          URL.revokeObjectURL(url);
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error(error);
        });
    }

  
  return (
    <Navbar
      key="sm"
      style={backgroundstyle}
      expand={"sm"}
      className={scrolled ? "scrolled" : ""}
    >
      <Container>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-sm`}
          onClick={toggleSidebar}
          style={{ zIndex: "9999" }}
        />
        <Navbar.Offcanvas
          onHide={handleCloseSidebar}
          style={{ zIndex: "9999" }}
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
          show={showSidebar}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-sm}`}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              <Nav.Link
                style={{ paddingTop: "20px" }}
                href="#home"
                className={
                  activeRoute === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => {
                  onChangeActiveRoute("home");
                  HandleNavigation("/");
                }}
              >
                Home
              </Nav.Link>
              {/*<Nav.Link
              href="#Skills"
              className={
                activeRoute === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onChangeActiveRoute("skills")}
            >
              Skills
            </Nav.Link>*/}
              <Nav.Link
                href="#Projects"
                style={{ paddingTop: "20px" }}
                className={
                  activeRoute === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => {
                  HandleNavigation("/");

                  onChangeActiveRoute("projects");
                }}
              >
                Projects
              </Nav.Link>
              {isMobile && (
                <Button variant="outline-info" onClick={handleDownloadFile}>
                  <span>CV</span>
                </Button>
              )}
            </Nav>
            <Form className="d-flex">
              <span className="navbar-text">
                <button className="vvd" onClick={handleDownloadFile}>
                  <span>CV</span>
                </button>
              </span>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CNavbar;
