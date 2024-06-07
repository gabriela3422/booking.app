import {useBooking} from "../../context/BookingContext";
import './Hotels.scss'
import HotelGallery from "../../components/Gallery/HotelGallery/HotelGallery";
import BookingContact from "../../components/Includes/BookingContact/BookingContact";
import FaqItem from "../../components/Includes/Faqs/FaqItem";

const Hotel = () => {
    const {hotel, hotelLoading, hotelError} = useBooking();
    if (hotelLoading) return <div>Loading...</div>;
    if (hotelError) return <div>Error: {hotelError.message}</div>;

    return (
        <>
            <section className="hotel-page pt-10">
                <div className="container mx-auto">
                    <div className="hotel-wrapper">
                        <div className="hotel-top__section flex flex-wrap items-center justify-between">
                            <div className="hotel-info">
                                <h1>{hotel.title}</h1>
                                <span>{hotel.address}</span>
                            </div>
                            <div className="hotel-price flex items-center">
                                <span>From</span>  <p>US$ {hotel.price}</p>
                            </div>
                        </div>
                        <HotelGallery hotel={hotel}/>
                        <div className="hotel-bottom__section pt-7">
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-2/3">
                                    <div className="hotel-property py-5 px-3.5">
                                        <h3 className="mini-title">Property highlights</h3>
                                        <ul className="hotel-property__list relative flex justify-between pt-7 gap-3.5">
                                            {hotel.amenities.map((amenities, index) => (
                                                <li key={index}>{amenities}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hotel-overview py-5 px-3.5">
                                        <h3 className="pt-10 mini-title border-top">Overview</h3>
                                        <p className="mt-5">{hotel.desc}</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3">
                                    <BookingContact hotel={hotel}/>
                                </div>
                            </div>
                        </div>
                        <div className="hotel-faq">
                            <div className="hotel-faq__wrapper pt-10">
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-2/5">
                                        <h3 className="mini-title">FAQs about<br/> {hotel.title} </h3>
                                    </div>
                                    <div className="w-full lg:w-3/5">
                                        {hotel.questions.map((item, index) => (
                                            <FaqItem key={index} item={item}/>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hotel