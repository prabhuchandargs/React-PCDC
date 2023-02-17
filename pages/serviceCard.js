import React from 'react';
import { useState } from 'react';

import { Col } from "react-bootstrap";




const ServiceCard = ({ image, title, subHead, color, list, cardClass, width, onClick }) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const cardStyle = {
        transition: '0.1s',
        // boxShadow: "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 22px 44px rgb(0 0 0 / 5%)",
        // backgroundColor: isHover ? color + '30' : color + '45',
        color: 'black',
        cursor: isHover ? 'pointer' : 'normal',
        transform: isHover ? 'scale(1.05)' : 'scale(1)',
        border: '0',
        // boxShadow: '0 10px 30px 0 rgb(0 26 97 / 10%)',
        minHeight: '350px'
    };

    return (
        <>
            <style>
                {`
                    .flip-card {
                        background-color: transparent;
                        width: 300px;
                        height: 300px;
                        perspective: 1000px;
                    }
                    
                    .flip-card-inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        transition: transform 0.6s;
                        transform-style: preserve-3d;
                    }
                    
                    .flip-card:hover .flip-card-inner {
                        transform: rotateY(180deg);
                    }
                    
                    .flip-card-front,
                    .flip-card-back {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        backface-visibility: hidden;
                    }
                    
                    .flip-card-front {
                        z-index: 2;
                        background-color: #bbb;
                        height: 100%;
                        width: 100%;
                    }
                    
                    .flip-card-back {
                        transform: rotateY(180deg);
                        background-color: #2980b9;
                    }
                      
                `}
            </style>
            <Col xs={12} md={width} className="h-100">
                {/* <div className={'card gx-5 mx-auto my-2 px-2 py-3 gy-3 h-100 justify-content-between ' + cardClass} style={cardStyle} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}>
                <img src={image} alt={title} />
                <h3 style={{ color: color }}>{title}</h3>
                <p>{subHead}</p>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div> */}

                <div className={'gx-5 mx-auto my-2 px-2 py-3 gy-3 h-100 justify-content-between flip-card ' + cardClass} style={cardStyle}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front card-body bg-success">
                            <div className="d-flex justify-content-center mb-3">
                                <img src={image} alt={title} />
                            </div>
                            <h3 style={{ color: color }}>{title}</h3>
                            <p>{subHead}</p>
                        </div>
                        <div className="flip-card-back card-body bg-primary">
                            <div
                                className="card-img-top"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                            <div className="mt-3">
                                <h5 className="card-title">{title}</h5>
                                <ul>
                                    {list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
};
export default ServiceCard;