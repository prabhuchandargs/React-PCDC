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
            logo: "/images/clients/meity.png",
            title: "Project 1",
            date: "January 2020",
            client: "Client 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "PostgreSQL"],
            demo: "https://demo1.com"
        },
        {
            type: "UX Design",
            logo: "/images/clients/kredence.png",
            title: "Project 2",
            date: "February 2020",
            client: "Client 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "UX Design",
            logo: "/images/clients/mohfw.png",
            title: "Project 2",
            date: "February 2020",
            client: "Client 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "Web Development",
            logo: "/images/clients/ywam.png",
            title: "Project 2",
            date: "February 2020",
            client: "Client 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "Java Development",
            logo: "/images/clients/nhm.png",
            title: "Project 2",
            date: "February 2020",
            client: "Client 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            technologies: ["React", "Node.js", "MongoDB"],
            demo: "https://demo2.com"
        },
        {
            type: "Digital Art",
            logo: "/images/clients/aiims.png",
            title: "Project 2",
            date: "February 2020",
            client: "Client 2",
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
                        background-color: blue;
                        color: white;
                    }
                    .button-row {
                        text-align: center;
                        margin-bottom:20px;
                    }
                    .button-row button {
                        margin: 10px 10px;
                    }
                `}
            </style>
            <Title title="Projects"/>
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

            <div className={`container`}>
                <div className={`row gy-3`}>
                    {/* {styles.projectGrid}> */}
                    {filteredProjects.map((project, index) => (
                        <div className={`col-4`}>
                            <Card key={index} className={`p-4 ` + styles.projectCard} onClick={() => handleShow(project)} >
                                <Card.Img variant="top" src={project.logo} />
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

