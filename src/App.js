import {useEffect, useState} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import {
    BrowserRouter,
    createBrowserRouter, Route,
    RouterProvider, Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    useEffect(() => {
        AOS.init();
    }, [])
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <div className="App">
            <Header toggleSidebar={toggleSidebar}/>
            <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
