import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import useToggle from "../../../hooks/useToogle";

const FaqItem = ({item}) => {
    const { isActive, toggleIsActive } = useToggle(false);

    return (
        <>
            <div className={`faq-item ${isActive ? 'open' : ''}  py-5 px-5 my-5`}>
                <div className="faq-button flex" onClick={toggleIsActive}>
                    <div className="faq-icon me-5">
                        <FontAwesomeIcon icon={isActive ? faMinus : faPlus} />
                    </div>
                    <div className="faq-text">
                        <span>{item.question}</span>
                    </div>
                </div>
                {isActive && <div className="faq-collapse">
                    <p>{item.answer}</p>
                </div>}
            </div>
        </>
    )
}
export default FaqItem