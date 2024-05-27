import "./MainSearch.scss"
import MainButton from "../Button/MainButton";
import {useRef, useState} from "react";
import DatePicker from "react-multi-date-picker";
import useClickOutside from "../../hooks/useClickOutside";
import useOptions from "../../hooks/useOptions";
import useDate from "../../hooks/useDate";
import useInputState from "../../hooks/useInputState";

const MainSearch = () => {
    const containerEl = useRef(null);
    const [openDate, setOpenDate] = useState(true);
    const [date, handleValueChange] = useDate({
        startDate: new Date(),
        endDate: new Date(),
    });
    const [openOptions, setOpenOptions] = useState(false);
    const [options, handleOption] = useOptions({
        adult: 2,
        children: 2,
        room: 1,
    });

    const [location, handleLocationChange] = useInputState('');

    useClickOutside(containerEl, () => setOpenOptions(false));

    return (
        <>
            <div className="main-search py-2.5">
                <div className="main-search__list items-center">
                    <div className="main-search__item search-menu__location py-5 lg:py-0 lg:px-7">
                        <h4>Location</h4>
                        <div className="main-search__form">
                            <input value={location}
                                   onChange={handleLocationChange}
                                   autoComplete="off" type="search"
                                   placeholder="Where are you go?"
                                   className="js-search js-dd-focus"/>
                        </div>
                    </div>
                    <div className="main-search__item search-menu__date py-5 lg:py-0 lg:px-7">
                        <h4>Check in - Check out</h4>
                        <div className="main-search__form">
                            {openDate && <DatePicker
                                value={date[0] || date[1] ? date : [new Date(), new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)]}
                                numberOfMonths={2}
                                format="MMM DD"
                                range
                                rangeHover
                                onClick={() => setOpenDate(!openDate)}
                                onChange={handleValueChange}
                                className="datepicker-custom"
                            />}
                        </div>
                    </div>
                    <div className="main-search__item search-menu__guests py-5 lg:py-0 lg:px-7" ref={containerEl}>
                        <h4>Guest</h4>
                        <div onClick={() => setOpenOptions(!openOptions)} className="search-guests__list">
                            <span className="js-count-adult">{options.adult}</span>
                            &nbsp;adults -&nbsp;
                            <span className="js-count-child">{options.children}</span>
                            &nbsp;children -&nbsp;
                            <span className="js-count-room">{options.room}</span>
                            &nbsp; room
                        </div>
                        {openOptions && <div className="search-guests__options">
                            <div className="guest-options__wrapper py-7 px-7">
                                <div className="search-guests__item adults flex items-center justify-between">
                                    <div className="search-guests__text">
                                        <span className="">Adult</span>
                                    </div>
                                    <div className="options">
                                        <button onClick={() => handleOption('adult', 'd')}
                                                className="option-counter__button"
                                                disabled={options.adult <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="options-counter__number px-4">{options.adult}</span>
                                        <button onClick={() => handleOption('adult', 'i')}
                                                className="option-counter__button">+
                                        </button>
                                    </div>
                                </div>
                                <div className="search-guests__item childrens flex items-center justify-between">
                                    <div className="search-guests__text">
                                        <span className="">Children</span>
                                    </div>
                                    <div className="options">
                                        <button
                                            onClick={() => handleOption('children', 'd')}
                                            className="option-counter__button"
                                            disabled={options.children <= 0}
                                        >
                                            -
                                        </button>
                                        <span className="options-counter__number px-4">{options.children}</span>
                                        <button onClick={() => handleOption('children', 'i')}
                                                className="option-counter__button">+
                                        </button>
                                    </div>
                                </div>
                                <div className="search-guests__item rooms flex items-center justify-between">
                                    <div className="search-guests__text">
                                        <span className="">Room</span>
                                    </div>
                                    <div className="options">
                                        <button
                                            disabled={options.room <= 1}
                                            onClick={() => handleOption('room', 'd')}
                                            className="option-counter__button">
                                            -
                                        </button>
                                        <span className="options-counter__number px-4">{options.room}</span>
                                        <button onClick={() => handleOption('room', 'i')}
                                                className="option-counter__button">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="button-item">
                        <MainButton
                            isWhite={false}
                            text="Search"
                            link="/hotels"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSearch