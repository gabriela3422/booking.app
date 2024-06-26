import "./Partners.scss"
import useFetch from "../../../hooks/useFetch";
import {getPartners} from "../../../services/partnersApi";

const Partners = () => {
    const {data: partners, loading, error} = useFetch(getPartners);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            {partners.map(partner => (
                <div className="partener-image py-3.5 px-3.5" key={partner.id}>
                    <img src={require(`../../../assets/images/parteners/${partner.image}`)} alt={partner.name}/>
                </div>

            ))}
        </>
    )
}
export default Partners