import CategoryIcon from "./CategoriesIcon";
import useFetch from "../../../hooks/useFetch";
import {getCategories} from "../../../services/categoriesApi";

const Categories = ({hasIcon}) => {
    const {data: categories, loading, error} = useFetch(getCategories);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            {categories.map(category => (
                <button key={category.id}
                        className="tabs-button px-7 py-5 rounded-4 fw-600 text-white js-tabs-button is-tab-el-active">
                    {hasIcon && <CategoryIcon categoryName={category.name}/>}
                    {category.name}
                </button>
            ))}
        </>
    )
}

export default Categories;