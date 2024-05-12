import {useEffect, useState} from "react";
import apiService from "../../services/apiService";
import {useParams} from "react-router";


const Hotel= () => {
    const [hotel, setHotel] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const response = await apiService.get(`/hotels/${id}`);
                setHotel(response);
                console.log('Hotel data:', response);
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
            {/*<p>{hotel.title}</p>*/}
        </>
    )
}
export default Hotel