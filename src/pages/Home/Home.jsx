import "./Home.scss";
import Categories from "../../components/Includes/Categories/Categories";
import MainSearch from "../../components/Search/MainSearch";
import Benefits from "../../components/Includes/Benefits/Benefits";
import SpecialTitle from "../../components/Heading/SpecialTitle/SpecialTitle";
import MainHeading from "../../components/Heading/MainHeading/MainHeading";
import Hotels from "../../components/Hotels/BestSeller/Hotels";
import DestinationGallery from "../../components/Gallery/DestinationGallery/DestinationGallery";
import TestimonialsGallery from "../../components/Gallery/TestimonialsGallery/TestimonialsGallery";
import Partners from "../../components/Includes/Partners/Partners";

const Homepage = () => {
    return (
        <>
            <section id="masthead">
                <div className="masthead__bg">
                    <img alt="banner" src={require("../../assets/images/bg.png")}
                         className="js-lazy"/>
                </div>
                <div className="container mx-auto">
                    <div className="masthead-tabs">
                        <div className="tabs-controls flex items-center js-tabs-controls">
                            <Categories hasIcon={true}/>
                        </div>
                    </div>
                    <div className="masthead-content">
                        <div className="flex xl:flex-row flex-col">
                            <div className="w-full xl:w-2/5 py-5"
                                 data-aos="fade-up" data-aos-offset="0" data-aos-duration="1400">
                                <div className="masthead-content__description pt-0 xl:pt-20 ">
                                    <SpecialTitle
                                        colorWords="Where Would"
                                        title=" You Like To Go?"
                                        text="Checkout Beautiful Places Arround the World."
                                    />
                                </div>
                                <MainSearch/>
                            </div>
                            <div className="w-full xl:w-3/5 py-5">
                                <div className="masthead__images relative-1">
                                    <div className="large-img" data-aos="fade" data-aos-delay="400">
                                        <img src={require("../../assets/images/1.png")} className="js-mouse-move"
                                             alt="camping"/>
                                    </div>
                                    <div>
                                        <img src={require("../../assets/images/2.png")}
                                             data-aos="fade" data-aos-delay="600"
                                             alt="mountain" className="js-mouse-move"/>
                                        <img src={require("../../assets/images/3.png")}
                                             data-aos="fade" data-aos-delay="800"
                                             alt="beach" className="js-mouse-move third"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="benefits" className="layout-pt-lg layout-pb-md">
                <div className="container mx-auto">
                    <div className="benefits-list flex items-center flex-wrap justify-center">
                        <Benefits
                        />
                    </div>
                </div>
            </section>
            <section id="popular-destinations" className="layout-pt-md layout-pb-md">
                <div className="container mx-auto">
                    <MainHeading
                        title="Connect With Other Travellers"
                        text="These popular destinations have a lot to offer"
                    />
                    <div className="js-section-slider pt-10">
                        <DestinationGallery/>
                    </div>
                </div>
            </section>
            <section id="best-seller" className="layout-pt-md layout-pb-lg">
                <div className="container mx-auto">
                    <div className="flex items-center flex-wrap justify-between">
                        <MainHeading
                            title="Best Seller"
                            text="Interdum et malesuada fames ac ante ipsum"
                        />
                        <div className="tabs-list flex flex-wrap items-center">
                            <Categories hasIcon={false}/>
                        </div>
                    </div>
                    <div className="best-seller__list pt-5 sm:pt-5 flex items-center flex-wrap ">
                        <Hotels/>
                    </div>
                </div>
            </section>
            <section id="testimonials" className="layout-pt-lg layout-pb-md ">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-evenly">
                        <div className="w-full lg:w-2/5 pb-7 lg:pb-0">
                            <MainHeading
                                title="What our customers are  saying us?"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
                            />
                            <div className="testimonials-clients flex pt-14">
                                <div className="w-1/2">
                                    <span className="testimonials-numbers">13m+</span>
                                    <p>Happy People</p>
                                </div>
                                <div className="w-1/2">
                                    <div className="testimonials-numbers">4.88</div>
                                    <p>Overall rating</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 pt-7 lg:pt-0">
                            <TestimonialsGallery/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="parteners" className="layout-pt-lg layout-pb-md">
                <div className="container mx-auto">
                    <p className="text-center">Trusted by the world’s best</p>
                    <div
                        className="parteners-wrapper pt-7 lg:pt-14 flex-wrap flex items-center justify-center md:justify-between ">
                        <Partners/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Homepage