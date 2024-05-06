import {createContext, useEffect, useState} from "react";
import apiService from "../../../services/apiService";

const BenefitsContext = createContext();
const Benefits = () => {
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        const fetchBenefits = async () => {
            try {
                const response = await apiService.get('/benefits');
                setBenefits(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBenefits();
    }, []);
    return (
        <>
            <BenefitsContext.Provider value={{benefits, setBenefits}}>
                {benefits.map(benefit => (
                    <div className="benefit-item">
                        <div className="benefit-item__wrapper">
                            <div className="benefit-icon">
                                <img src={require(benefit.image)} alt={benefit.name}/>
                            </div>
                            <div className="benefit-description">
                                <h4>{benefit.name}</h4>
                                <p>{benefit.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </BenefitsContext.Provider>
        </>
    )
}
export default Benefits