import './Hotels.scss'
import HotelList from "../../components/Hotels/List/HotelList";
import {useBooking} from "../../context/BookingContext";
import FilterHotel from "../../components/Filters/FilterHotel";

const Hotels = () => {
    const {hotelsLoading, hotelsError, filters, setFilters, filteredHotels} = useBooking();

    if (hotelsLoading) return <div>Loading...</div>;
    if (hotelsError) return <div>Error: {hotelsError.message}</div>;

    const handleFilterChange = (name, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };
    return (
        <>
            <section className="hotel-list__page layout-pt-md layout-pb-lg">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="w-1/4 px-3.5">
                            <FilterHotel filters={filters} onFilterChange={handleFilterChange}/>
                        </div>
                        <div className="w-5/6 lg:ps-3.5">
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