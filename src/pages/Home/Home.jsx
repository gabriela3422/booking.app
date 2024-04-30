import "./Home.scss";
import Categories from "../../components/Includes/Categories/Categories";
import SpecialTitle from "../../components/Heading/SpecialTitle";
import MainSearch from "../../components/Search/MainSearch";

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
                            <Categories/>
                        </div>
                    </div>
                    <div className="masthead-content">
                        <div className="flex xl:flex-row flex-col">
                            <div className="w-full xl:w-2/5 py-5 aos-init aos-animate"
                                 data-aos="fade-up" data-aos-offset="0">
                                <div className="masthead-content__description pt-0 lg:pt-20 ">
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
                                    <div data-aos="fade" data-aos-delay="400" className="aos-init aos-animate">
                                        <img src={require("../../assets/images/1.png")} className="js-mouse-move"
                                             alt="camping"/>
                                    </div>
                                    <div className="aos-init aos-animate">
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
        </>
)
}
export default Homepage