import React from "react";
import { Container } from "react-bootstrap";
import Background from "../components/Background";
import {
  programskills,
  databaseskills,
  webskills,
  ide,
  framework,
  other,
} from "../data/data";
import SkillsRow from "../components/SkillsRow";
import Heading from "../components/common/Heading";

const Skills = () => {
  return (
    <section className="skills py-5">
      <Heading title=" Skills" />
      <Container fluid className="App py-2 overflow-hidden">
        <h4>&lt; Computer Hardware Architecture &gt;</h4>
        <SkillsRow skill={programskills} />
        <h4>&lt; Input/Output Device Integration &gt;</h4>
        <SkillsRow skill={databaseskills} />
        <h4>&lt; Peripheral Device Management &gt;</h4>
        <SkillsRow skill={webskills} />
        <h4>&lt; I/O Interface Standards (USB, HDMI, SATA, etc.) &gt;</h4>
        <SkillsRow skill={framework} />
        <h4>&lt; Embedded Systems I/O Handling;</h4>
        <SkillsRow skill={ide} />
        <h4>&lt; Interrupt Handling & DMA (Direct Memory Access) &gt;</h4>
        <SkillsRow skill={other} />
        <h4>&lt; Sensor Integration & Data Processing) &gt;</h4>
        <SkillsRow skill={other} />
      </Container>
      <Background id="tsparticles" />
    </section>
  );
};

export default Skills;
