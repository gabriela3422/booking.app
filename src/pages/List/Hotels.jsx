import './Hotels.scss'
import HotelList from "../../components/Hotels/List/HotelList";
import {BookingProvider} from "../../context/BookingContext";

const Hotels = () => {
    return (
        <>
            <section className="layout-pt-md layout-pb-lg">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="w-1/4">
                        </div>
                        <div className="w-5/6">
                            <BookingProvider>
                                <HotelList/>
                            </BookingProvider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hotels