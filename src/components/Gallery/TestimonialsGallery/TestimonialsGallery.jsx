import useFetch from "../../../hooks/useFetch";
import "./TestimonialsGallery.scss"
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {EffectCards, Navigation, Pagination} from 'swiper/modules';
import {getTestimonials} from "../../../services/testimonialsApi";


const TestimonialsGallery = () => {
    const {data: testimonials, loading, error} = useFetch(getTestimonials);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[Navigation, Pagination, EffectCards]}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="testimonials">
                            <div className="testimonials-wrapper">
                                <h4 className="mb-5">{testimonial.location}</h4>
                                <p
                                    className="testimonials-text">
                                    {testimonial.description}
                                </p>
                                <div className="testimonial-bottom mt-7 pt-5">
                                    <div className="flex items-center">
                                        <div className="testimonial-image py-2.5 px-2.5">
                                            <img src={require(`../../../assets/images/testimonials/${testimonial.image}`)}
                                                 alt={testimonial.name}/>
                                        </div>
                                        <div className="testimonial-person py-2.5 px-2.5">
                                            <span className="testimonial-name">{testimonial.name}</span>
                                            <p className="testimonial-occupation mt-1.5">{testimonial.occupation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default TestimonialsGallery
