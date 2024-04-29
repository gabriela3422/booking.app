import "./SpecialTitle.scss"
const SpecialTitle = ({text, title, colorWords}) => {
    return(
        <>
            <h1 className="special-title__wrapper text-60 lg:text-40">
                <span className="text-yellow-1">{colorWords}</span>{title} </h1>
            <p className="text-white mt-5">{text}</p>
        </>
    )
}

export default SpecialTitle