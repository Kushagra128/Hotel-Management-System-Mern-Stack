import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import svg from "../images/about.svg"
import customersvg from "../images/customers/customer1.svg"
import '../pages/About.css'
import Footer from "../components/layouts/Footer";

function About() {
    return (
        <div>
            <div className="container aboutus">
                <div className="float-container">
                    <div className="image">
                        <img
                            src={svg}
                            alt="about us"
                            className="img-fluid"
                        />
                    </div>
                    <div className="formbold-main-wrapper">
                        <div className="formbold-form-wrapper">
                            <form action="https://formbold.com/s/FORM_ID" method="POST">
                                <div className="formbold-input-flex">
                                    <div>
                                        <label for="firstname" className="formbold-form-label"> First name </label>
                                        <input
                                            type="text"
                                            name="firstname"
                                            id="firstname"
                                            placeholder="John"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                    <div>
                                        <label for="lastname" className="formbold-form-label"> Last name </label>
                                        <input
                                            type="text"
                                            name="lastname"
                                            id="lastname"
                                            placeholder="Wick"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                </div>

                                <div className="formbold-input-flex">
                                    <div>
                                        <label for="email" className="formbold-form-label"> Mail </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="xyz123@mail.com"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                    <div>
                                        <label for="phone" className="formbold-form-label"> Phone </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="+91 1234567890"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                </div>

                                <div className="formbold-input-radio-wrapper">
                                    <label for="jobtitle" className="formbold-form-label"> How was your Ecxperience ? </label>

                                    <div className="formbold-radio-flex">
                                        <div className="formbold-radio-group">
                                            <label className="formbold-radio-label">
                                                <input className="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle" />
                                                Not Good
                                                <span className="formbold-radio-checkmark"></span>
                                            </label>
                                        </div>

                                        <div className="formbold-radio-group">
                                            <label className="formbold-radio-label">
                                                <input className="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle" />
                                                Good
                                                <span className="formbold-radio-checkmark"></span>
                                            </label>
                                        </div>

                                        <div className="formbold-radio-group">
                                            <label className="formbold-radio-label">
                                                <input className="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle" />
                                                Very Good
                                                <span className="formbold-radio-checkmark"></span>
                                            </label>
                                        </div>

                                        <div className="formbold-radio-group">
                                            <label className="formbold-radio-label">
                                                <input className="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle" />
                                                Excelent
                                                <span className="formbold-radio-checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label for="message" className="formbold-form-label"> Message </label>
                                    <textarea
                                        rows="3"
                                        name="message"
                                        id="message"
                                        placeholder="Type your message"
                                        className="formbold-form-input"
                                    ></textarea>
                                </div>

                                <button className="formbold-btn">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="abt">
                    <div className="about_company">
                        <h1 className="display-4">About Us</h1>
                        <div className="pt-4">
                            <p className="about_info" style={{ "fontSize": "20px" }}>
                                We are a premier provider of comprehensive hotel management solutions, committed to transforming the hospitality industry. Our state-of-the-art system is meticulously designed to simplify operations, amplify efficiency, and enrich the guest experience.
                                <br /><br />
                                Our software is versatile, catering to a wide range of establishments from boutique hotels to large-scale resorts. It offers an array of features including real-time room inventory management, seamless reservation processes, dynamic pricing, housekeeping management, and insightful analytics.
                                <br /><br />
                                What sets us apart is our focus on reliability and user-friendly interfaces. We understand the importance of intuitive systems in a fast-paced environment like the hospitality industry. Therefore, our software is crafted to be easy to use yet powerful, ensuring that your team can focus on what truly matters - delivering exceptional guest experiences.
                                <br /><br />

                                Our dedicated team of professionals is the backbone of our service. They are committed to providing unparalleled support, ensuring smooth implementation and operation of our system. We believe in growing with our clients, hence we provide continuous updates to keep up with the evolving needs of the hospitality industry.
                                <br /><br />
                                Partner with us to leverage the power of technology and elevate your hotel management to new heights. Together, we can redefine hospitality.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="testimony">
                    <h1 className="display-4 mb-4">What Our Clients says</h1>
                    <div className="row mb-5">
                        <div className="col-md-10 col-12 mx-auto">
                            <div
                                id="carouselExampleCaptions"
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <ol className="carousel-indicators">
                                    <li
                                        data-target="#carouselExampleCaptions"
                                        data-slide-to="0"
                                        className="active"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleCaptions"
                                        data-slide-to="1"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleCaptions"
                                        data-slide-to="2"
                                    ></li>
                                    <li
                                        data-target="#carouselExampleCaptions"
                                        data-slide-to="3"
                                    ></li>
                                </ol>
                                <div className="carousel-inner card border-0 shadow-lg p-4">
                                    <div className="carousel-item active text-center">
                                        <div className="row">
                                            <div className="col-md-8 col-12 my-auto">
                                                <img
                                                    src={customersvg}
                                                    className="text-center img-fluid"
                                                    width="450"
                                                    height="400"
                                                    alt="customer1"
                                                />
                                            </div>
                                            <div className="col-md-4 col-12 my-auto">
                                                <div className="text-dark">
                                                    <h3 className="font-weight-bolder ">Customer ABC</h3>
                                                    <p>
                                                        Nulla vitae elit libero, a pharetra augue mollis
                                                        interdum.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <div className="row">
                                            <div className="col-md-8 col-12 my-auto">
                                                <img
                                                    src={customersvg}
                                                    className="text-center img-fluid"
                                                    width="450"
                                                    height="400"
                                                    alt="customer2"
                                                />
                                            </div>
                                            <div className="col-md-4 col-12 my-auto">
                                                <div className="text-dark">
                                                    <h3 className="font-weight-bolder ">Customer DRF</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <div className="row">
                                            <div className="col-md-8 col-12 my-auto">
                                                <img
                                                    src={require("../images/customers/customer3.svg")}
                                                    className="text-center img-fluid"
                                                    width="450"
                                                    height="400"
                                                    alt="customer3"
                                                />
                                            </div>
                                            <div className="col-md-4 col-12 my-auto">
                                                <div className="text-dark">
                                                    <h3 className="font-weight-bolder ">Customer RTY</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit. <br />
                                                        Praesent commodo cursus magna, vel scelerisque nisl
                                                        consectetur
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item text-center">
                                        <div className="row">
                                            <div className="col-md-8 col-12 my-auto">
                                                <img
                                                    src={require("../images/customers/customer4.svg")}
                                                    className="text-center img-fluid"
                                                    width="450"
                                                    height="400"
                                                    alt="customer4"
                                                />
                                            </div>
                                            <div className="col-md-4 col-12 my-auto">
                                                <div className="text-dark">
                                                    <h3 className="font-weight-bolder ">Customer RTY</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur Praesent
                                                        commodo cursus magna, vel scelerisque nisl consectetur
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleCaptions"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleCaptions"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    ></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team">
                    <h1 className="display-4">Our Team</h1>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 col-12 mx-auto my-2">
                        <div className="card border-0 shadow-lg p-4">
                            <img
                                src="https://th.bing.com/th/id/R.62529b76bb9f3fdd2936bfa02cb91d57?rik=Td0BYhYRFgKw1w&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31100000%2fChibi-Pein-random-31122337-547-813.png&ehk=0Wn2zPldtP1r3f5u0TeqfERNdTdsksDZuSkFeHxobSw%3d&risl=&pid=ImgRaw&r=0"
                                className="photo card-img-top"
                                alt="director"
                            />
                            <div className="card-body">
                                <h4><center><b>Abhishek Rathore</b></center></h4>
                                <h5 className="card-title mb-0">Director</h5>
                                <div className="card-text text-black-50">
                                    CEO <p className="float-right">5 years</p>
                                </div>
                                <h6 className="mt-5">CONNECT</h6>
                                <div className="d-flex justify-content-around">
                                    <FaFacebookSquare className="connect" />
                                    <AiFillInstagram className="connect" />
                                    <FaLinkedin className="connect" />
                                    <IoLogoYoutube className="connect" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mx-auto my-2" id="card">
                        <div className="card border-0 shadow-lg p-4">
                            <img
                                src="https://i.pinimg.com/originals/02/07/2a/02072a87d479f3b0da5ae73160107b18.png"
                                className="photo card-img-top"
                                alt="director"
                            />
                            <div className="card-body">
                                <h4><center><b>Kushagra</b></center></h4>
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">
                                    Manager <p className="float-right">5 years</p>
                                </div>
                                <h6 className="mt-5">CONNECT</h6>
                                <div className="d-flex justify-content-around">
                                    <FaFacebookSquare className="connect" />
                                    <AiFillInstagram className="connect" />
                                    <FaLinkedin className="connect" />
                                    <IoLogoYoutube className="connect" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mx-auto my-2" id="card">
                        <div className="card border-0 shadow-lg p-4">
                            <img
                                src="https://i.pinimg.com/originals/e2/17/bc/e217bc02f204fbd51b1798b9e15142b6.png"
                                className="photo card-img-top"
                                alt="director"
                            />
                            <div className="card-body">
                                <h4><center><b>Anway Durge</b></center></h4>
                                <h5 className="card-title mb-0">Team Member</h5>
                                <div className="card-text text-black-50">
                                    Manager <p className="float-right">8 years</p>
                                </div>
                                <h6 className="mt-5">CONNECT</h6>
                                <div className="d-flex justify-content-around">
                                    <FaFacebookSquare className="connect" />
                                    <AiFillInstagram className="connect" />
                                    <FaLinkedin className="connect" />
                                    <IoLogoYoutube className="connect" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default About;
