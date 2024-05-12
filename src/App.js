import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import MainLayout from "./layouts/MainLayout";

function App() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="App">
            <MainLayout/>
        </div>
    );
}

export default App;
