import {createContext, useEffect, useState} from "react";
import axios from "axios";
import CategoryIcon from "./CategoriesIcon";

const CategoriesContext = createContext();
const Categories = () => {
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

    return (
        <CategoriesContext.Provider value={{categories, setCategories}}>
            {categories.map(category => (
                <button key={category.id}
                        className="tabs-button px-7 py-5 rounded-4 fw-600 text-white js-tabs-button is-tab-el-active">
                    <CategoryIcon categoryName={category.name}/>
                    {category.name}
                </button>
            ))}
        </CategoriesContext.Provider>
    )
}
export default Categories