import "./MainButton.scss";

const MainButton = ({text, link, isWhite, isYellow}) => {
    const ButtonComponent = link ? 'a' : 'button';

    return (
        <>
            <ButtonComponent className={`main-button ${isWhite ? "main-button-transparent" : isYellow ? "main-button-yellow" : "main-button-blue"}`}
                             href={link}>
                {text}
            </ButtonComponent>
        </>
    )
}
export default MainButton