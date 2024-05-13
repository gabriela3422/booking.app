import {useEffect, useState} from "react";
import apiService from "../../services/apiService";
import {useParams} from "react-router";


const Hotel = () => {
    const [hotel, setHotel] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await apiService.get(`/hotels/${id}`);
                setHotel(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHotel();
    }, [id]);

    if (!hotel) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <section className="hotel-page pt-10">
                <div className="container mx-auto">
                    <h2>{hotel.title}</h2>
                    <p>{hotel.address}</p>
                </div>
            </section>
        </>
    )
}
export default Hotel