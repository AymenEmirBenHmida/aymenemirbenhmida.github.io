import React from 'react'
import Container from 'react-bootstrap/Container'
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/icons8-github.svg";
function CFooter() {
  return (
    <Container className="cfooter-container">
      {" "}
      {/* Add a class name to the Container */}
      <div className="cfooter-icons">
        {" "}
        <a href="https://www.facebook.com/profile.php?id=100008241540077" target='_blank'>
          <img src={navIcon2} alt=""></img>
        </a>
        <a
          href="https://www.linkedin.com/in/aymen-ben-hmida-a91203183/"
          target="_blank"
        >
          <img src={navIcon1} alt=""></img>
        </a>
        <a
          href="https://github.com/AymenEmirBenHmida?tab=overview&from=2023-06-01&to=2023-06-29"
          target="_blank"
        >
          <img src={navIcon3} alt=""></img>
        </a>
      </div>{" "}
      <div>CopyRights</div>
    </Container>
  );
}

export default CFooter