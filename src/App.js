import './App.css';
import {
    BrowserRouter,
    createBrowserRouter, Route,
    RouterProvider, Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
