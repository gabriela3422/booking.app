import {createContext, useEffect, useState} from "react";
import apiService from "../../../services/apiService";
import {Link} from "react-router-dom";

const HotelsContext = createContext();
const Hotels = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await apiService.get(`/hotels`);
                setHotels(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchHotels();
    }, []);
    return (
        <>
            <HotelsContext.Provider value={{hotels, setHotels}}>
                {hotels.map(hotel => (
                    <div className="best-seller__hotel w-1/4" key={hotel.id}>
                        <Link key={hotel.id} to={`/hotels/${hotel.id}`}>
                            <div className="hotel-image">
                                <img src={require(`../../../assets/images/hotels/${hotel.image}`)} alt={hotel.title}/>
                            </div>
                        </Link>
                        <div className="hotel-content">
                            <div className="hotel-description">
                                <h4>{hotel.title}</h4>
                                <p>{hotel.address}</p>
                            </div>
                            <div className="hotel-price">
                                <p>Starting from <span>{hotel.price}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </HotelsContext.Provider>
        </>
    )
}
export default Hotels