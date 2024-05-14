import "./Footer.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container mx-auto">
                    <div className="footer-wrapper ">
                        <div className="footer-links py-14">
                            <h5 className="mb-7">Contact us</h5>
                            <div className="footer-item">
                                <div className="footer-link footer-phone mb-5">
                                    <span>Toll Free Customer Care</span>
                                    <a href="tel:+(1) 123 456 7890" className="mt-1">
                                        +(1) 123 456 7890
                                    </a>
                                </div>
                                <div className="footer-link footer-email mb-5">
                                    <span>Need live support?</span>
                                    <a href="mailto:xyz@abc.com" className="mt-1">
                                        hi@gotrip.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-copyright py-5">
                            <div className="flex flex-wrap items-center justify-between">
                                <p>© 2024. All rights reserved.</p>
                                <div className="footer-socials flex items-center">
                                    <a href="https://facebok.com/"
                                       className="footer-social px-2.5"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </a>
                                    <a href="https://instagram.com/"
                                       target="_blank"
                                       className="footer-social px-2.5"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </a>
                                    <a href="https://linkedin.com/"
                                       target="_blank"
                                       className="footer-social px-2.5"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer