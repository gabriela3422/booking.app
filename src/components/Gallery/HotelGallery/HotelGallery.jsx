const HotelGallery = ({hotel}) => {
    return (
        <>
            {hotel.gallery.map((image, index) => (
                <div className="gallery-grid__item relative flex">
                    <img key={index} src={require(`../../../assets/images/hotels/${image}`)}
                         alt={`${hotel.title} gallery ${index + 1}`}/>
                </div>
            ))}
        </>
    )
}
export default HotelGallery