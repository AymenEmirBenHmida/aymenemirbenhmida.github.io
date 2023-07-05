import React from "react";
import "./Contact.css"
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";
import { Button, Container } from "react-bootstrap";
import CNavbar from "../components/navbar/CNavbar";
import CFooter from "../components/Footer/CFooter";
import ContactUs from "../components/ContactUs/ContactUs";

function Contact() {
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevents the default form submission behavior
      // Perform any additional logic or actions here

      // Example: Clearing form inputs
      event.target.reset();
    };

    return (
      <div>
        <div className="navbar">
          <CNavbar color={"#5899de"} />
        </div>

        <ContactUs />
        <CFooter />
      </div>
    );
}

export default Contact;
