import {Swiper, SwiperSlide} from 'swiper/react';
import useFetch from "../../../hooks/useFetch";
import "./DestinationGallery.scss"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {getCountries} from "../../../services/countriesApi";


const DestinationGallery = () => {
    const { data: countries, loading, error } = useFetch(getCountries);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 22
                    },
                    535: {
                        slidesPerView: 2,
                        spaceBetween: 22
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 5,
                    },
                }}
            >
                {countries.map((country, index) => (
                    <SwiperSlide key={country.id}>
                        <div className="country-item" data-aos="fade" data-aos-delay={index * 100}>
                            <div className="country-item__wrapper">
                                <div className="country-image inline-block">
                                    <img src={require(`../../../assets/images/${country.image}`)} alt={country.name}/>
                                </div>
                                <div className="country-description">
                                    <h4>{country.name}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default DestinationGallery
