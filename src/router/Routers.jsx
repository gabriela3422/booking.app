import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Hotels from "../pages/List/Hotels";
import BookingLayout from "../layouts/BookingLayouts";
import Hotel from "../pages/ListItem/Hotel";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<BookingLayout/>}>
                        <Route
                            path="/"
                            element={<Home/>}
                        />
                        <Route path="hotels" element={<Hotels/>}/>
                        <Route path="hotels/:id" element={<Hotel/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Routers