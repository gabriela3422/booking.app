import './BookingContact.scss'
import MainButton from "../../Button/MainButton";

const BookingContact = ({hotel}) => {
    return (
        <>
            <div className="booking-contact__wrapper">
                <div className="booking-contact__info mb-3">
                    <h3>Contact Owner</h3>
                    <h2>{hotel.owner.name}</h2>
                </div>
                <div className="booking-buttons">
                    <MainButton
                        isYellow={false}
                        text={hotel.owner.email}
                        link={`mailto:${hotel.owner.email}`}
                    />
                    <MainButton
                        isYellow={true}
                        text={hotel.owner.phone}
                        link={`tel:${hotel.owner.phone}`}
                    />
                </div>
            </div>
        </>
    )
}
export default BookingContact