import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styles from './serviceCard.module.css';
import Title from './sectionTitle';

import ServiceCard from './serviceCard.js';

var stylingObject = {
    div: {
        color: "red",
        border: "1px solid red"
    }, input: {
        margin: "2px",
        padding: "5px"
    }
}

const Services = () => (
    <Container className="mb-5">
        <Title subtitle="" title="Services"/>
        <Row>
            {/* <Col xs={12} md={4}>
                <ServiceCard cardClass={styles.pcDcCard}
                    width="12"
                    image="/images/common/logo.png"
                    title="Prabhu Chandar"
                    subHead="Design & Codes"                    list={["6 years of industry experience", "120+ UI Modules created", "Clean & Robust Code", "Timely Delivery", "Transparent Pricing"]}
                    onClick={() => console.log("Card 1 clicked")}
                />
            </Col> */}
            <Col xs={12} md={12}>
                <Row className='gx-5 gy-4'>
                    <ServiceCard cardClass={styles.serviceBox}
                        width="4"
                        image="/images/serviceCards/web-dev.png"
                        title="Web Development"
                        subHead="Convert Wireframes to Responsive HTML Landing Pages"
                        color="#24498b"
                        list={[]}
                        onClick={() => console.log("Card 2 clicked")}
                    />
                    <ServiceCard cardClass={styles.serviceBox}
                        width="4"
                        image="/images/serviceCards/ui.png"
                        title="UX Design"
                        subHead="Convert Business Logic into User Flow for effective UX"
                        color="#24498b"
                        list={[]}
                        onClick={() => console.log("Card 3 clicked")}
                    />
                    <ServiceCard cardClass={styles.serviceBox}
                        width="4"
                        image="/images/serviceCards/e-commerce.png"
                        title="E-Commerce"
                        subHead="One stop solution for Shopping, Inventory and Order Management"
                        color="#24498b"
                        list={[]}
                        onClick={() => console.log("Card 4 clicked")}
                    />
                    <ServiceCard cardClass={styles.serviceBox}
                        width="4"
                        image="/images/serviceCards/seo.png"
                        title="SEO & Ranking"
                        subHead="Increase online presence through effective SEO"
                        color="#24498b"
                        list={[]}
                        onClick={() => console.log("Card 5 clicked")}
                    />
                    <ServiceCard cardClass={styles.serviceBox}
                        width="4"
                        image="/images/serviceCards/dev.png"
                        title="Developer for hire"
                        subHead="Micro-contractual hire for Module Creation and Bug Fixes"
                        color="#24498b"
                        list={[]}
                        onClick={() => console.log("Card 5 clicked")}
                    />
                    <ServiceCard cardClass={styles.serviceBox}
                        width="4"
                        image="/images/serviceCards/digital-artifact.png"
                        title="Digital Artifacts"
                        subHead="Digital Media and Print Media Design for all your business needs"
                        color="#24498b"
                        list={[]}
                        onClick={() => console.log("Card 5 clicked")}
                    />
                </Row>
            </Col>
        </Row>
    </Container>
);

export default Services;
