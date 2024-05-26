import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Home from "../pages/Home/Home";
import Hotels from "../pages/List/Hotels";
import Hotel from "../pages/ListItem/Hotel";
import {BookingProvider} from "../context/BookingContext";
const HotelWithBookingProvider = () => {
    const { id } = useParams();
    return (
        <BookingProvider hotelIdFromParams={id}>
            <Hotel />
        </BookingProvider>
    );
};
const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <BookingProvider>
                                <Home/>
                            </BookingProvider>
                        }
                    />
                    <Route
                        path="/hotels"
                        element={
                            <BookingProvider>
                                <Hotels/>
                            </BookingProvider>
                        }
                    />
                    <Route
                        path="/hotels/:id"
                        element={<HotelWithBookingProvider/>}

                    />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Routers