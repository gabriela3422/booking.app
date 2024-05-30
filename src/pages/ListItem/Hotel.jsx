import {useBooking} from "../../context/BookingContext";
import './Hotels.scss'
import HotelGallery from "../../components/Gallery/HotelGallery/HotelGallery";

const Hotel = () => {
    const {hotel, hotelLoading, hotelError} = useBooking();

    if (hotelLoading) return <div>Loading...</div>;
    if (hotelError) return <div>Error: {hotelError.message}</div>;
    return (
        <>
            <section className="hotel-page pt-10">
                <div className="container mx-auto">
                    <div className="hotel-wrapper">
                        <div className="hotel-top__section flex items-center justify-between">
                            <div className="hotel-info">
                                <h1>{hotel.title}</h1>
                                <span>{hotel.address}</span>
                            </div>
                            <div className="hotel-price flex items-center">
                                <span>From</span>  <p>US${hotel.price}</p>
                            </div>
                        </div>
                        <div className="hotel-gallery__grid  pt-7">
                            {/*<HotelGallery hotel={hotel}/>*/}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hotel