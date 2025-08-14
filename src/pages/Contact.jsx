import React from "react";
import { Container } from "react-bootstrap";
import Background from "../components/Background";
import ContactForm from "../components/ContactForm";
import Heading from "../components/common/Heading";
import ContactIcons from "../components/ContactIcons";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Heading title="Contact" />
      <Container fluid>
        <Container>
          <p>
            Yha pr kuch update krna hai.
          </p>
          <ContactForm />
        </Container>

        <h2 className="mb-5 mt-3">Let's connect</h2>
        <ContactIcons />
        <br/>
      </Container>

      {/* <Background id="tsparticles" /> */}
    </section>
  );
};
export default Contact;