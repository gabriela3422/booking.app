import apiService from "../../../services/apiService";
import "./Benefits.scss"
import useFetch from "../../../hooks/useFetch";

const Benefits = () => {
    const {data: benefits, loading, error} = useFetch(apiService.getBenefits);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            {benefits.map(benefit => (
                <div className="benefit-item w-100 sm:w-1/2 lg:w-1/3 text-center py-1 px-3.5 lg:py-5 lg:px-4"
                     key={benefit.id}>
                    <div className="benefit-item__wrapper">
                        <div className="benefit-icon inline-block">
                            <img src={require(`../../../assets/images/${benefit.image}`)} alt={benefit.name}/>
                        </div>
                        <div className="benefit-description">
                            <h4>{benefit.name}</h4>
                            <p className="text-grey mt-2.5">{benefit.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Benefits