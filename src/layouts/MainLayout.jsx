import Header from "../components/Header/Header";
import {useState} from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Routers from "../router/Routers";

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    return (
        <>
            <Header toggleSidebar={toggleSidebar}/>
            <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar}/>
            <Routers />
        </>
    )
}

export default Layout