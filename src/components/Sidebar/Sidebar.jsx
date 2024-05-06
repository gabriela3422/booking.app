import "./Sidebar.scss";
import logoDark from "../../assets/images/logo-dark.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {faFacebookF, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

const Sidebar = ({isSidebarOpen, closeSidebar}) => {

    return (
        <>
            <div className={`sidebar ${isSidebarOpen ? 'isActive' : ''}`}>
                <div className="sidebar-wrapper">
                    <div className="sidebar-top flex items-center justify-between">
                        <div className="sidebar-top__logo">
                            <img src={logoDark} alt="logo"/>
                        </div>
                        <div className="sidebar-top__close">
                            <button onClick={closeSidebar}>
                                <FontAwesomeIcon icon={faClose}/>
                            </button>
                        </div>
                    </div>
                    <div className="sidebar-bottom">
                        <div className="sidebar-links">
                            <div className="sidebar-link sidebar-phone mb-5">
                                <span>Toll Free Customer Care</span>
                                <a href="tel:+(1) 123 456 7890" className="mt-1">
                                    +(1) 123 456 7890
                                </a>
                            </div>
                            <div className="sidebar-link sidebar-email mb-5">
                                <span>Need live support?</span>
                                <a href="mailto:xyz@abc.com" className="mt-1">
                                    hi@gotrip.com
                                </a>
                            </div>
                            <div className="sidebar-link mt-2.5 mb-1">
                                <h5>Follow us on social media</h5>
                                <div className="flex items-center">
                                    <a href="https://facebok.com/"
                                       className="sidebar-social"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebookF}/>
                                    </a>
                                    <a href="https://instagram.com/"
                                       target="_blank"
                                       className="sidebar-social"
                                       rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram}/>
                                    </a>
                                    <a href="https://linkedin.com/"
                                           target="_blank"
                                           className="sidebar-social"
                                           rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedinIn}/>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={`background-fade ${isSidebarOpen ? 'isActive' : ''}`}></div>
        </>
    )
}
export default Sidebar;