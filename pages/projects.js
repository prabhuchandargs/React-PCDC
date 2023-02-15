import React, { useState, useEffect } from "react";
import { Card, Modal, Image, Button, Form } from "react-bootstrap";
import styles from './projects.module.css';
import Title from './sectionTitle';

const Projects = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState({});
    const [filter, setFilter] = useState("All");

    const handleClose = () => {
        setShowModal(false);
        // setSelectedProject(null);
    }
    const handleShow = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };
    const handleFilterChange = (type) => {
        setFilter(type);
    };


    const projects = [
        {
            type: "Web Development",
            logo: "/images/projects/kredence.png",
            title: "Kredence Website",
            date: "December 2021",
            client: "Direct client - Kredence Buildfast Pvt Ltd",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "PostgreSQL"],
            demo: "https://kredence.in/"
        },
        {
            type: "Web Development",
            logo: "/images/projects/fhir-site1.png",
            title: "FHIR Connector Portal",
            date: "Jan 2023",
            client: "Ministry of Health & Family Welfare via CDAC",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://ndhmexchange.uat.dcservices.in/FHIRConnector/"
        },
        {
            type: "Web Development",
            logo: "/images/projects/ywam.png",
            title: "Youth with a Mission - SF Chapter",
            date: "June 2020",
            client: "YWAM Org",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://ywamn2nsanfrancisco.org/"
        },
        {
            type: "UX Design",
            logo: "/images/projects/eraktkosh-page.png",
            title: "eRaktkosh UI Revamp",
            date: "June 2022",
            client: "National Health Mission via CDAC",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "UX Design",
            logo: "/images/projects/aiimsR.png",
            title: "AIIMS Rajkot UI Revamp",
            date: "September 2022",
            client: "AIIMS via CDAC",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "Digital Art",
            logo: "/images/projects/g20.png",
            title: "eSushrut - G20 Launch",
            date: "February 2020",
            client: "CDAC Noida",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "Digital Art",
            logo: "/images/projects/eraktkosh-assets.png",
            title: "eRaktkosh - Page Assets",
            date: "July 2022",
            client: "CDAC Noida",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "Digital Art",
            logo: "/images/projects/11.png",
            title: "FHIR Connector - Page Assets",
            date: "July 2022",
            client: "CDAC Noida",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "Digital Art",
            logo: "/images/projects/wbdd.png",
            title: "eRaktkosh - Digital Assets",
            date: "July 2022",
            client: "CDAC Noida",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        // Add more projects here...
    ];

    const filteredProjects = projects.filter((project) => {
        if (filter === "All") return true;
        return project.type === filter;
    });

    return (
        <>
            <style>
                {`
                    .active-button {
                        background-color: #24498b;
                        color: white;
                    }
                    .button-row {
                        text-align: left;
                        margin-bottom:20px;
                    }
                    .button-row button {
                        margin: 10px 10px;
                    }
                    .card-img {
                        border-radius: 3% !important;
                    }
                `}
            </style>
            <Title title="View our recent work" subtitle="Projects"/>
            <div className="container">
                <div className="button-row">
                    <Button variant="outline-secondary" className={filter === "All" ? "active-button" : ""} onClick={() => handleFilterChange("All")}>
                        All
                    </Button>
                    <Button variant="outline-secondary" className={filter === "Web Development" ? "active-button" : ""} onClick={() => handleFilterChange("Web Development")}>
                        Web Development
                    </Button>
                    <Button variant="outline-secondary" className={filter === "UX Design" ? "active-button" : ""} onClick={() => handleFilterChange("UX Design")}>
                        UX Design
                    </Button>
                    <Button variant="outline-secondary" className={filter === "Java Development" ? "active-button" : ""} onClick={() => handleFilterChange("Java Development")}>
                        Java Development
                    </Button>
                    <Button variant="outline-secondary" className={filter === "Digital Art" ? "active-button" : ""} onClick={() => handleFilterChange("Digital Art")}>
                        Digital Art
                    </Button>
                </div>
            </div>

            <div className={`container`}>
                <div className={`row gy-3`}>
                    {/* {styles.projectGrid}> */}
                    {filteredProjects.map((project, index) => (
                        <div className={`col-3`}>
                            <Card key={index} className={`p-3 ` + styles.projectCard} onClick={() => handleShow(project)} >
                                <Card.Img src={project.logo} />
                            </Card>
                            <h5 className="text-center my-3" style={{}}>{project.title}</h5>
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <Image src={selectedProject.logo} className={styles.projectLogo} />
                    <p>
                        <strong>Date:</strong> {selectedProject.date}
                    </p>
                    <p>
                        <strong>Client:</strong> {selectedProject.client}
                    </p>
                    <p>
                        <strong>Description:</strong> {selectedProject.description}
                    </p>
                    <p>
                        <strong>Technologies used:</strong>{" "}
                        {/* {console.log(selectedProject.technologies)} */}
                        {/* {selectedProject.technologies.join(", ")} */}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Demo</Button>
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Projects;

