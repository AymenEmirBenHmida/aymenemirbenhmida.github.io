import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

function ContactUs() {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const subject = event.target.subject.value;
    const recepient = event.target.email.value;
    const message = event.target.message.value;
    console.log(subject, recepient, message);
    // Reset errors
    setErrors({});

    // Validate form inputs
    const inputErrors = {};
    if (!subject) {
      inputErrors.subject = "Please enter a subject";
    }
    if (!recepient) {
      inputErrors.email = "Please enter an email address";
    }
    if (!message) {
      inputErrors.message = "Please enter a message";
    }

    // Display errors if any
    if (Object.keys(inputErrors).length > 0) {
      setErrors(inputErrors);
      return;
    }

    const emailData = {
      recepient: recepient,
      subject: subject,
      message: message,
    };

    try {
      const response = await fetch(
        "https://personal-website-aymen-95f3e75d1692.herokuapp.com/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );
      if (response.ok) {
        console.log("email worked");
      } else {
        console.log("email did not work");
      }
    } catch (error) {
      console.log(error);
    }

    // Clear form inputs
    event.target.reset();
  };

  return (
    <section>
      <Container
        className="contact_us d-flex justify-content-center align-items-center"
        id="contact_us"
      >
        <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <h2>Send Me A Message ^^</h2>

          <Form.Group controlId="subject" className="mb-4">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" required />
            {errors.subject && (
              <Form.Text className="text-danger">{errors.subject}</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="email" className="mb-4">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              required
            />
            {errors.email && (
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            )}
          </Form.Group>

          <Form.Group controlId="message" className="mb-5">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your message"
              required
            />
            {errors.message && (
              <Form.Text className="text-danger">{errors.message}</Form.Text>
            )}
          </Form.Group>

          <Button
            type="submit"
            style={{ width: "100%" }}
            className="my-4 full-width-btn"
          >
            Send
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default ContactUs;
