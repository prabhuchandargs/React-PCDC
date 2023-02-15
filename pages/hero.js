import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from './hero.module.css';


const Hero = ({ title, subtitle, para }) => (
    <Container className={styles.hero}>
      <Row>
        <Col xs={12} className="">
          <h1>{title}</h1>
          <h2><span className={styles.animateCharacter}>{subtitle}</span></h2>
          <p className="mt-3 mb-4">{para}</p>
          <div className="d-flex justify-content-left mt-5">
            <Button value="Input" className="mx-2" style={{backgroundColor: "#24498b"}}>Book a Meeting</Button>
            <Button variant="light" value="Input" className="mx-2">View Projects</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );

  export default Hero;