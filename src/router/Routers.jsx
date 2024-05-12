import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Hotels from "../pages/List/Hotels";
import Hotel from "../pages/ListItem/Hotel";

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/hotels" element={<Hotels/>}/>
                    <Route path="/hotels/:id" element={<Hotel/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers