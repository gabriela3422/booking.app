import './HotelList.scss'
import {Link} from "react-router-dom";

const HotelList = ({hotels}) => {
    return (
        <>
            {hotels && hotels.map(hotel => (
                <div className="card flex" key={hotel.id}>
                    <div className="card-image">
                        <div className="card-image__content">
                            <img src={require(`../../../assets/images/hotels/${hotel.image}`)} alt={hotel.title}/>
                        </div>
                    </div>
                    <div className="card-content flex-1">
                        <h3>{hotel.title}</h3>
                        <span className="card-address">{hotel.address}</span>
                        <div className="card-rooms  mt-5">
                            <p>{hotel.rooms[0].name}</p>
                            <span className="available-beds">{hotel.rooms[0].availableBeds}</span>
                        </div>
                        <div className="card-info mt-2.5">
                            <span>Free cancellation</span>
                            <p>You can cancel later, so lock in this great price today.</p>
                        </div>
                        <ul className="card-amenities flex pt-5">
                            {hotel.amenities.map((amenity, index) => (
                                <li key={index}>{amenity}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="card-actions text-end">
                        <div className="hotel-rating mt-5 flex items-center justify-end">
                            <p>Exceptional</p>
                            <span>4.7</span>
                        </div>
                        <div className="hotel-price mt-12">
                            <span>US${hotel.price}</span>
                        </div>
                        <Link className="main-button main-button-blue mt-6" key={hotel.id} to={`/hotels/${hotel.id}/`}>See
                            Availability</Link>
                    </div>
                </div>
            ))}
        </>
    )
}
export default HotelList