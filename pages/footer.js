import React from "react";

const Footer = (props) => {
    return (
        <>
            <div>
                <div class="row">
                    <div class="col-lg-5">
                        <div class="info-box mb-4">
                            <a href="https://goo.gl/maps/Y5EER23DQAPNexu28" target="_blank"><i class="bx bx-map"></i></a>
                            <h3>Address</h3>
                            <p>Anusandhan Bhawan
                                C-56/1, Sector-62, Institutional Area,
                                Noida - 201307, District Gautam Budh Nagar (Uttar Pradesh)
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <div class="info-box mb-4">
                            <a href="mailto:asthar@cdac.in"><i class="bx bx-envelope"></i></a>
                            <h3>Email Us</h3>
                            <p>
                                ABDM FHIR Connector Team,
                                Health Informatics - Design & Development

                                <a href="mailto:asthar@cdac.in">asthar@cdac.in</a>
                            </p>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <div class="info-box mb-4">
                            <a href="tel:+91120306331113"><i class="bx bx-phone-call"></i></a>
                            <h3>Call Us</h3>
                            <p>+91-120-3063311-13</p>
                            <h6 class="pb-0 mb-0">Fax</h6>
                            <p>+91-120-3063317</p>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6">
                        <div class="info-box mb-4">
                            <a target="_blank" href="https://www.cdac.in"><i class="bx bx-globe"></i></a>
                            <h3>Website</h3>
                            <p>View our wide array of products and services <a href="www.cdac.in">www.cdac.in</a>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="page-links">
                    <div class="">DISCLAIMER</div>
                    <div class="">PRIVACY POLICY</div>
                    <div class="">TERMS OF USE</div>
                    <div class="">SITE MAP</div>
                </div>


                {/* <section class="footer p-0" id="footer">

                    <div class="ender container">
                        <div class="d-flex flex-sm-row justify-content-between flex-column">
                            <a href="https://www.cdac.in" target="_blank" class="my-auto"><img
                                src="source/images/common/cdac_white.png" class="img-fluid" /></a>
                            <a href="https://abdm.gov.in" target="_blank"
                                style="color:#fff; font-weight: 600; text-decoration: none;">
                                <img src="source/images/common/abdm.png" height="70" />&nbsp;&nbsp; Ayushman Bharat Digital Mission
                            </a>
                        </div>
                    </div>
                </section> */}


                <footer>
                    <div className="contact-icons">
                        <a href="#">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-codepen" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="availability">
                        <p>{props.isAvailable ? "Available for Hire" : "Not Available for Hire"}</p>
                    </div>
                </footer>
            </div >
        </>
    );
};

export default Footer;
