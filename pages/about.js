import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styles from './aboutCard.module.css';

import AboutCard from './aboutCard.js';

var stylingObject = {
    div: {
        color: "red",
        border: "1px solid red"
    }, input: {
        margin: "2px",
        padding: "5px"
    }
}

const About = () => (
    <Container className="about mb-5">
        <Row>
            <Col xs={12} md={4}>
                <AboutCard cardClass={styles.pcDcCard}
                    width="12"
                    image="/images/common/logo.png"
                    title="Prabhu Chandar"
                    subHead="Design & Codes"                    list={["6 years of industry experience", "120+ UI Modules created", "Clean & Robust Code", "Timely Delivery", "Transparent Pricing"]}
                    onClick={() => console.log("Card 1 clicked")}
                />
            </Col>
            <Col xs={12} md={8}>
                <Row>
                    <AboutCard cardClass={styles.aboutBox}
                        width="4"
                        image="/images/serviceCards/web-dev.png"
                        title="Web Development"
                        subHead="Convert Wireframes to Responsive HTML Landing Pages"
                        color="#E0687D"
                        list={[]}
                        onClick={() => console.log("Card 2 clicked")}
                    />
                    <AboutCard cardClass={styles.aboutBox}
                        width="4"
                        image="/images/serviceCards/ui.png"
                        title="UX Design"
                        subHead="Convert Business Logic into User Flow for effective UX"
                        color="#7768DA"
                        list={[]}
                        onClick={() => console.log("Card 3 clicked")}
                    />
                    <AboutCard cardClass={styles.aboutBox}
                        width="4"
                        image="/images/serviceCards/e-commerce.png"
                        title="E-Commerce"
                        subHead="One stop solution for Shopping, Inventory and Order Management"
                        color="#E2766D"
                        list={[]}
                        onClick={() => console.log("Card 4 clicked")}
                    />
                    <AboutCard cardClass={styles.aboutBox}
                        width="4"
                        image="/images/serviceCards/seo.png"
                        title="SEO & Ranking"
                        subHead="Increase online presence through effective SEO"
                        color="#BD8F1B"
                        list={[]}
                        onClick={() => console.log("Card 5 clicked")}
                    />
                    <AboutCard cardClass={styles.aboutBox}
                        width="4"
                        image="/images/serviceCards/dev.png"
                        title="Developer for hire"
                        subHead="Micro-contractual hire for Module Creation and Bug Fixes"
                        color="#344EBA"
                        list={[]}
                        onClick={() => console.log("Card 5 clicked")}
                    />
                    <AboutCard cardClass={styles.aboutBox}
                        width="4"
                        image="/images/serviceCards/digital-artifact.png"
                        title="Digital Artifacts"
                        subHead="Digital Media and Print Media Design for all your business needs"
                        color="#9030C9"
                        list={[]}
                        onClick={() => console.log("Card 5 clicked")}
                    />
                </Row>
            </Col>
        </Row>
    </Container>
);

export default About;
