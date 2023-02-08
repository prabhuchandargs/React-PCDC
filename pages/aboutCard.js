import React from 'react';
import { useState } from 'react';

import { Col } from "react-bootstrap";




const AboutCard = ({ image, title, subHead, color, list, cardClass, width, onClick }) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    const cardStyle = {
        transition: '0.1s',
        boxShadow: "0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 22px 44px rgb(0 0 0 / 5%)",
        backgroundColor: isHover ? color+'55' : color+'25',
        color: 'black',
        cursor: isHover ? 'pointer' : 'normal',
        transform: isHover ? 'scale(1.05)' : 'scale(1)',
        border: '0',
        backdropFilter:  'blur(3px)',
        boxShadow: '0 10px 30px 0 rgb(0 26 97 / 10%)'
    };

    return(
    <Col xs={12} md={width} className="h-100">
        <div className={'card gx-5 mx-auto my-2 px-2 py-3 gy-3 h-100 justify-content-between ' + cardClass} style={cardStyle} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}>
            <img src={image} alt={title} />
            <h3 style={{color: color}}>{title}</h3>
            <p>{subHead}</p>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </Col>)
};
export default AboutCard;