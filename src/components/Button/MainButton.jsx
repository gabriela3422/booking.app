import "./MainButton.scss";
const MainButton = ({text, link, isWhite}) => {
    return (
        <>
            <a className={`main-button ${isWhite ? "main-button-transparent" : "main-button-yellow"}`} href={link}>{text}</a>
        </>
    )
}
export default MainButton