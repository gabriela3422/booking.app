import "./Partners.scss"
import {useEffect, useState} from "react";
import apiService from "../../../services/apiService";

const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const fetchParteners = async () => {
            try {
                const response = await apiService.get('/partners');
                setPartners(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchParteners();
    }, []);
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