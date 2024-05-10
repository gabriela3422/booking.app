import {createContext, useEffect, useState} from "react";
import CategoryIcon from "./CategoriesIcon";
import apiService from "../../../services/apiService";

const CategoriesContext = createContext();
const Categories = ({ hasIcon }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiService.get('/categories');
                setCategories(response);
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
                    {hasIcon &&  <CategoryIcon categoryName={category.name}/>}
                    {category.name}
                </button>
            ))}
        </CategoriesContext.Provider>
    )
}
export default Categories