import logoLight from '../../assets/images/logo-light.svg';
import "./Header.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import MainButton from "../Button/MainButton";

const Header = ({ toggleSidebar }) => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`header ${scrolling ? 'isSticky' : ''}`}>
            <div className="header-container container mx-auto">
                <div className="header-wrapper  flex flex-row items-center justify-between">
                    <div className="header-wrapper__left w-full flex flex-row-reverse lg:flex-row items-center">
                        <div className="header-hamburger mr-5 flex flex-col" onClick={toggleSidebar}>
                            <span></span>
                            <span></span>
                        </div>
                        <a href="/" className="header-logo mr-5">
                            <img src={logoLight} alt="logo"/>
                        </a>
                        <div className="header-search hidden  flew-row items-center">
                            <div className="header-search__icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </div>
                            <div className="header-search__input">
                                <input type="search"  placeholder="Destination, attraction, hotel, etc" value=""/>
                            </div>
                        </div>
                    </div>
                    <div className="header-wrapper__right hidden lg:block">
                        <div className="header-account">
                            <MainButton
                                isWhite={true}
                                text="Hotel List"
                                link="/hotels"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header