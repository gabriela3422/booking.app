import "./Home.scss";
import axios, {options} from "axios";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faRoute, faCarSide, faPersonSnowboarding, faShip, faPlane} from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios('http://localhost:8000/categories');
                setCategories(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchCategories();
    }, []);

    const categoryIcons = {
        'Hotel': faBed,
        'Tour': faRoute,
        'Activity': faPersonSnowboarding,
        'Car': faCarSide,
        'Cruise': faShip,
        "Flights": faPlane
    };

    const getCategoryIcon = (categoryName) => {
        return categoryIcons[categoryName] || null;
    };


    return (
        <>
            <section id="masthead">
                <div className="container mx-auto">
                    <div className="masthead-tabs">
                        <div className="tabs-controls d-flex items-center js-tabs-controls">
                            {categories.map(category => (
                            <button key={category.id}
                                className="tabs-button px-7 py-5 rounded-4 fw-600 text-white js-tabs-button is-tab-el-active">
                                <FontAwesomeIcon icon={getCategoryIcon(category.name)}/>
                                {category.name}
                            </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Homepage