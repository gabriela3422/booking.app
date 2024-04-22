import logoLight from '../../assets/images/logo-light.svg';
import "./Header.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import MainButton from "../Button/MainButton";

const Header = () => {
    return (
        <header>
            <div className="header-container container mx-auto">
                <div className="header-wrapper flex flex-row items-center justify-between">
                    <div className="header-wrapper__left flex flex-row items-center">
                        <div className="header-hamburger mr-5 flex flex-col">
                            <span></span>
                            <span></span>
                        </div>
                        <a href="/" className="header-logo mr-5">
                            <img src={logoLight} alt="logo"/>
                        </a>
                        <div className="header-search flex flew-row items-center">
                            <div className="header-search__icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </div>
                            <div className="header-search__input">
                                <input type="search"  placeholder="Destination, attraction, hotel, etc" value=""/>
                            </div>
                        </div>
                    </div>
                    <div className="header-wrapper__right">
                        <div className="header-account">
                            <MainButton
                                isWhite={true}
                                text="Sign in"
                                link="/"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header