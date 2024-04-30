import "./MainSearch.scss"
import MainButton from "../Button/MainButton";

const MainSearch = () => {
    return (
        <>
            <div className="main-search py-2.5">
                <div className="main-search__list items-center">
                    <div className="main-search__item search-menu__location py-5 lg:py-0 lg:px-7">
                        <h4>Location</h4>
                        <div className="main-search__form">
                            <input autoComplete="off" type="search" placeholder="Where are you go?"
                                   className="js-search js-dd-focus" value=""/>
                            </div>
                    </div>
                    <div className="main-search__item search-menu__date py-5 lg:py-0 lg:px-7">
                        <h4>Check in - Check out</h4>
                        <div className="main-search__form">
                            <input type="text" className="custom_input-picker" autoComplete="off"
                                   value="April 05 ~ May 14"/>
                        </div>
                    </div>
                    <div className="main-search__item search-menu__guests py-5 lg:py-0 lg:px-7">
                        <h4>Guest</h4>
                        <div className="search-guests__list">
                            <span className="js-count-adult">2</span>
                            &nbsp;adults -&nbsp;
                            <span className="js-count-child">1</span>
                            &nbsp;childeren -&nbsp;
                            <span className="js-count-room">1</span>
                            &nbsp; room
                        </div>
                    </div>
                    <div className="button-item">
                        <MainButton
                            isWhite={false}
                            text="Search"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSearch