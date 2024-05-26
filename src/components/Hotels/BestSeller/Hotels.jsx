import {Link} from "react-router-dom";
import "./Hotel.scss"
import {useBooking} from "../../../context/BookingContext";

const Hotels = () => {
    const {hotels, hotelsLoading, hotelsError} = useBooking();

    if (hotelsLoading) return <div>Loading...</div>;
    if (hotelsError) return <div>Error: {hotelsError.message}</div>;

    return (
        <>
            {hotels && hotels.map((hotel, index) => (
                <Link key={hotel.id} to={`/hotels/${hotel.id}/`}
                      className="w-full sm:w-1/2 lg:w-1/4 sm:py-3.5 sm:px-3.5" data-aos="fade"
                      data-aos-delay={index * 100}>
                    <div className="best-seller__hotel" key={hotel.id}>
                        <div className="hotel-image">
                            <img src={require(`../../../assets/images/hotels/${hotel.image}`)} alt={hotel.title}/>
                            <div className="hotel-badge">
                                {hotel.breakfast ?
                                    <span className="breakfast">Breakfast Included</span>
                                    : null}
                                {hotel.bestseller ?
                                    <span className="bestseller">Best seller</span>
                                    : null}
                            </div>
                        </div>
                        <div className="hotel-content mt-2.5">
                            <div className="hotel-description">
                                <h4>{hotel.title}</h4>
                                <p className="mt-1.5">{hotel.address}</p>
                            </div>
                            <div className="hotel-rating mt-5 flex items-center">
                                <span>4.7</span>
                                <p className="ms-2.5">Exceptional</p>
                            </div>
                            <div className="hotel-price mt-1.5">
                                <p>Starting from <span>US${hotel.price}</span></p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}
export default Hotels