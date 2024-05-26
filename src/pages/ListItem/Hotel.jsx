import {useBooking} from "../../context/BookingContext";

const Hotel = () => {
    const {hotel, hotelsLoading, hotelsError} = useBooking();
    if (hotelsLoading) return <div>Loading...</div>;
    if (hotelsError) return <div>Error: {hotelsError.message}</div>;

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