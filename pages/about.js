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
                    background-color: #fff;
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
                            <p>Projects Completed</p>
                            <h2>15+</h2>
                        </div>
                        <div className="about-card">
                            <p>Total Experience</p>
                            <h2>5+ years</h2>
                        </div>
                        <div className="about-card">
                            <p>Modules Created</p>
                            <h2>120</h2>
                        </div>
                        <div className="about-card">
                            <p>Google Review Rating</p>
                            <h2>4.5 stars</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
