import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const ImageList = ({ images, jmages }) => {
  return (
    <>
        <style>
            {`
                .image-list {
                    height: 70vh;
                    overflow: hidden;
                  }
                  
                  .image-column {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    animation: scroll 35s linear infinite;
                    margin-right: 0 !important;
                    transform: rotateZ(360deg);
                  }
                  
                  .rounded-square {
                    width: 300px;
                    height: 300px;
                    border-radius: 15px;
                    margin-bottom: 25px;
                    overflow: hidden;
                  }
                  
                  .rounded-square img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                  }
                  
                  @keyframes scroll {
                    0% {
                      transform: translate(0, 0);
                    }
                    100% {
                      transform: translate(0, -50%);
                    }                    
                  }
                  
            `}
        </style>
        <div className="image-list">
        <Container>
            <Row>
            <Col width="50%" className='w-50 '>
                <div className="image-column">
                {images.map((image, index) => (
                    <div key={index} className="rounded-square">
                    <img src={image} alt="placeholder" />
                    </div>
                ))}
                </div>
            </Col>
            <Col width="50%" className='w-50 '>
                <div className="image-column" style={{marginTop:'50px'}}>
                {jmages.map((image, index) => (
                    <div key={index} className="rounded-square">
                    <img src={image} alt="placeholder" />
                    </div>
                ))}
                </div>
            </Col>
            </Row>
        </Container>
        </div>
    </>
  );
};

export default ImageList;
