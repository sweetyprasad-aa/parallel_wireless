import React from "react";
import './Footer.css';
import footerImg from '../assets/images/brand-paralell-wireless.png';
import { FaHeadset, FaTwitterSquare,FaLinkedin, FaFacebookSquare,FaYoutubeSquare} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
// import { IconName } from "react-icons/ai";

const Footer = ()=>{
    return(
        <>
            <footer className="bg-light p-5 mt-1">
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col-sm-4  text-start">
                            <img src={footerImg} alt="footerImg" className="footerImg" />
                            <p className="follow mt-4">Follow Us </p>
                            <span className="px-1"><FaTwitterSquare className="socialIcon"/></span>
                            <span className="px-1"><FaLinkedin className="socialIcon"/></span>
                            <span className="px-1"><FaFacebookSquare className="socialIcon"/></span>
                            <span className="px-1"><FaYoutubeSquare className="socialIcon"/></span>
                        </div>
                        <div className="col-sm-4 ">
                            <h3 className="text-uppercase text-start footer-heading">Important Links</h3>
                            <div className="d-flex justify-content-start align-item-start">
                                <ul className="">
                                    <li className="footer-list"><a href="/">Resources</a></li>
                                    <li className="footer-list"><a href="/">Leadership</a></li>
                                    <li className="footer-list"><a href="/">News</a></li>
                                    <li className="footer-list"><a href="/">Contact</a></li>
                                    <li className="footer-list"><a href="/">Careers</a></li>
                                </ul>
                                <ul className="">
                                    <li className="footer-list"><a href="/">About Us</a></li>
                                    <li className="footer-list"><a href="/">Solutions</a></li>
                                    <li className="footer-list"><a href="/">Technologies</a></li>
                                    <li className="footer-list"><a href="/">Products</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4  text-start">
                            <h3 className="text-uppercase footer-heading">Contact Us </h3>
                            <p className="mt-4"><FaHeadset className="footer-contect-icon"/> 1-603-589-9937</p>
                            <p><MdLocationOn className="footer-contect-icon"/>
                            300 Innovative Way, Suite #2310
                                <br/>Nashua, NH 03062, USA
                            </p>     
                        </div>
                    </div>
                    {/* --------2nd Row------- */}
                    <div className="Row">
                        <p className="copyRight">© 2023 Parallel Wireless. All rights reserved.</p>
                        <div className=" ">
                            <ul className="footer-menu-item d-flex ">
                                <li className="footer-menu-list"><a href='/'>Privacy Policy</a></li>
                                <li className="footer-menu-list"><a href='/'>Legal </a></li>
                                <li className="footer-menu-list"><a href='/'>Cookies</a></li>
                                <li className="footer-menu-list"><a href='/'>Terms of Use</a></li>
                                <li className="footer-menu-list"><a href='/'>Trademarks</a></li>
                                <li className="footer-menu-list"><a href='/'>PO Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;