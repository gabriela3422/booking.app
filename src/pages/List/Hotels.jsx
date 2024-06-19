import './Hotels.scss'
import HotelList from "../../components/Hotels/List/HotelList";
import {useBooking} from "../../context/BookingContext";
import FilterHotel from "../../components/Filters/FilterHotel";
import useToggle from "../../hooks/useToogle";

const Hotels = () => {
    const {hotelsLoading, hotelsError, filters, setFilters, filteredHotels} = useBooking();
    const { isActive, toggleIsActive } = useToggle(false);

    if (hotelsLoading) return <div>Loading...</div>;
    if (hotelsError) return <div>Error: {hotelsError.message}</div>;


    const handleFilterChange = (name, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };
    const handleFilterButtonClick = () =>{
        toggleIsActive();
    }

    return (
        <>
            <section className="hotel-list__page layout-pt-md layout-pb-lg">
                <div className="container mx-auto">
                    <div className="block lg:hidden mb-4 text-end">
                        <button
                            className="filter-button px-5"
                            onClick={handleFilterButtonClick}>
                            Filters
                        </button>
                    </div>
                    <div className="flex justify-center relative">
                        <div className="w-0 p-0 lg:w-1/4 lg:px-3.5">
                            <FilterHotel
                                className={isActive ? 'isActive' : ''}
                                filters={filters}
                                toggleIsActive={toggleIsActive}
                                onFilterChange={handleFilterChange}/>
                        </div>
                        <div className="w-full lg:w-5/6 lg:ps-3.5">
                            <div className="hotel-list__items">
                                <HotelList hotels={filteredHotels}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hotels