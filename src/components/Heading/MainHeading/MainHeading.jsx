import "./MainHeading.scss"

const MainHeading = ({title, text}) => {
    return (
        <>
            <div className="main-heading">
                <h2 className="main-heading__title">
                    {title}
                </h2>
                <p
                className="main-heading__text sm:mt-1.5 mt-0 text-grey">
                    {text}
                </p>
            </div>
        </>
    )
}
export default MainHeading