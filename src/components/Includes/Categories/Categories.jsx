import CategoryIcon from "./CategoriesIcon";
import apiService from "../../../services/apiService";
import useFetch from "../../../hooks/useFetch";

const Categories = ({hasIcon}) => {
    const {data: categories, loading, error} = useFetch(apiService.getCategories);
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