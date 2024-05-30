import {Outlet, useParams} from "react-router";
import {BookingProvider} from "../context/BookingContext";

const BookingLayout = () => {
    const params = useParams();

    return (
        <BookingProvider params={params}>
            <Outlet />
        </BookingProvider>
    );
};
export default BookingLayout;
