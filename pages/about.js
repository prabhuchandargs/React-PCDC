import React from 'react';

const About = () => {
    return (
        <>
            <style>
                {`
                .about {
                    display: flex;
                    height: 500px;
                    margin-bottom: 70px;
                    // background: linear-gradient(135deg, #0e7ca7, #aed5cb 59%, #16a4bb);
                    background-image: url(/images/common/about.png), linear-gradient(135deg, #081e3d, #243f6e 59%, #061c69);
                  }
                  
                  .left-half {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 50px;
                    color: #fff;
                  }
                  
                  .right-half {
                    flex: 1;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    padding: 50px;
                  }

                  
                  .about-card {
                    background-color: #eee;
                    padding: 20px;
                    margin: 20px;
                    border-radius: 20px;
                    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    
                  }
                  .about-card h2 {
                    font-weight: 800;
                    font-size: 38px;
                  }
                  .about-card:nth-child(1) {
                    animation: floating1 10s infinite linear;
                  }
                  .about-card:nth-child(2) {
                    animation: floating2 10s infinite linear;
                  }
                  .about-card:nth-child(3) {
                    animation: floating3 10s infinite linear;
                  }
                  .about-card:nth-child(4) {
                    animation: floating4 10s infinite linear;
                  }

                  @keyframes floating1 {
                    0% { transform: translate(0,  0px); }
                    35%  { transform: translate(-10px, -15px) scale(1.05) }
                    50%  { transform: translate(-15px, 10px) scale(1.15) }
                    85%  { transform: translate(-10px, 5px) scale(1.05) }
                    100%   { transform: translate(0, 0px); }   
                }
                @keyframes floating2 {
                    0% { transform: translate20px,  0px); }
                    15%  { transform: translate(10px, 5px) scale(1.10) }
                    40%  { transform: translate(30px, -10px) scale(.98) }
                    70%  { transform: translate(-20px, 15px) scale(1.05) }
                    100%   { transform: translate(0px, 0px); }   
                }
                @keyframes floating3 {
                    0% { transform: translate(0,  0px); }
                    25%  { transform: translate(-15px, 15px) scale(1.05) }
                    53%  { transform: translate(-35px, 20px) scale(1.15) }
                    75%  { transform: translate(20px, 5px) scale(1.05) }
                    100%   { transform: translate(0, 0px); }   
                }
                @keyframes floating4 {
                    0% { transform: translate(0,  0px); }
                    30%  { transform: translate(15px, 10px) scale(1.05) }
                    65%  { transform: translate(35px, 20px) scale(0.98) }
                    80%  { transform: translate(-5px, 5px) scale(1.05) }
                    100%   { transform: translate(0, 0px); }    
                }
                  
            `}
            </style>
            <div className="about">
                <div className='container d-flex'>
                    <div className="left-half">
                        <h5>ABOUT</h5>
                        <h1>PC-DC</h1>
                        <p>Digital Solutions is a California - based development agency that partners with businesses to enhance their digital presence. Our expertise in creating high-quality digital products, such as websites and applications, drives business growth and increases efficiency for our clients. Our in-house team of product builders works collaboratively to deliver meaningful results and create long-term value for our clients.</p>
                        <button className='btn btn-primary me-5'  style={{backgroundColor: 'rgb(36, 73, 139)', border: 'none'}} onClick={null}>Start your project</button>
                    </div>
                    <div className="right-half">
                        <div className="about-card">
                            <h2>15+</h2>
                            <p>Projects Completed</p>
                        </div>
                        <div className="about-card">
                            <h2>5+ years</h2>
                            <p>Total Experience</p>
                        </div>
                        <div className="about-card">
                            <h2>120</h2>
                            <p>Modules Created</p>
                        </div>
                        <div className="about-card">
                            <h2>4.5 stars</h2>
                            <p>Google Review Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
