import "./MainButton.scss";

const MainButton = ({text, link, isWhite}) => {
    const ButtonComponent = link ? 'a' : 'button';

    return (
        <>
            <ButtonComponent className={`main-button ${isWhite ? "main-button-transparent" : "main-button-yellow"}`}
                             href={link}>
                {text}
            </ButtonComponent>
        </>
    )
}
export default MainButton