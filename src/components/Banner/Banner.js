import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../../assets/img/header-img.svg";
import { useNavigate } from "react-router-dom";

function Banner() {
  /*const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [ index, setIndex ] = useState( 1 );*/
  const navigate = useNavigate();
  function HandleNavigation(route) {
    navigate(route);
  }
  /*const toRotate = [
    "Mobile Developer",
    "Web Developer",
    "Full-stack Developer",
  ];
  const period = 2000;
  
 
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };*/

  return (
    <section className="banner" id="home" style={{ position: "relative" }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hello, I'm Aymen Ben Hamida `}{" "}
              {/* <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='["Web Developer", "Web Designer", "UI/UX Designer"]'
  >   <span className="wrap">{text}</span>
              </span>*/}
            </h1>
            <div>
              <span
                style={{
                  fontSize: "xx-large",
                  fontWeight: "600",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  padding:"5px"
                }}
              >
                A full stack developer{" "}
              </span>
              <p style={{ fontSize: "large", marginTop: "10px" }}>
                <span
                  style={{
                    color: "white",
                    fontWeight: "500",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  with a focus on building new user-friendly and innovative
                  mobile cross-platform and web applications using cutting-edge
                  technologies. Passionate about staying up to date with the
                  latest technologies and a lifelong learner
                </span>
              </p>
            </div>
            <Button variant="dark" onClick={() => HandleNavigation("/contact")}>
              Let's Talk
              <ArrowRightCircle size={25} />
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <img src={headerImage} alt='Banner img'></img> */}
          </Col>
        </Row>
      </Container>
      <div
        className="banner-bottom-div"
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100px",
          backgroundImage:
            "linear-gradient(180deg,transparent,transparent,#5899de)",
        }}
      />
    </section>
  );
}

export default Banner;
