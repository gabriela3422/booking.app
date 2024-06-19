import './FilterHotel.scss';
import {useBooking} from "../../context/BookingContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const FilterHotel = ({filters, onFilterChange, className, toggleIsActive}) => {
    const {uniqueCities, priceRange, hotelsByCity} = useBooking();

    const handleCheckboxChange = (e) => {
        const {name, checked, value} = e.target;
        let newValue;
        if (checked) {
            newValue = [...(filters[name] || []), value];
        } else {
            newValue = (filters[name] || []).filter(item => item !== value);
        }
        onFilterChange(name, newValue);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        onFilterChange(name, value);
    };

    return (
        <div className={`hotel-filter ${className}`}>
            <div className="flex lg:hidden justify-between">
                <h2 className="hotel-filter__heading mb-2.5">Filters</h2>
                <button
                    className="filter-button-close px-5"
                    onClick={toggleIsActive}>
                    <FontAwesomeIcon icon={faClose}/>
                </button>
            </div>
            <div className="hotel-filter__list py-5">
                <h3 className="hotel-filter__name mb-2.5">City</h3>
                {uniqueCities.map((city, index) => (
                    <div key={index} className="hotel-filter__item">
                        <label>
                            <input
                                type="checkbox"
                                name="city"
                                value={city}
                                checked={filters.city.includes(city)}
                                onChange={handleCheckboxChange}
                            />
                            <span className="ms-2.5">
                            {city} ({hotelsByCity[city] || 0})
                                </span>
                        </label>
                    </div>
                ))}
            </div>
            <div className="hotel-filter__list py-5">
                <h3 className="hotel-filter__name mb-2.5">Price</h3>
                <div className="hotel-filter__item flex items-center">
                    <label>
                        <input
                            type="number"
                            name="price_gte"
                            placeholder="Min Price:"
                            value={filters.price_gte}
                            min={priceRange.min}
                            max={priceRange.max}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        <input
                            type="number"
                            name="price_lte"
                            placeholder="Max Price:"
                            value={filters.price_lte}
                            min={priceRange.min}
                            max={priceRange.max}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterHotel;