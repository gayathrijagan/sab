
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider-wrapper.scss'
import { testimonials } from "../../../../constants/reviews";
import Testimonail from "../Testimonial/Testimonial";

const SliderWrapper = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <Slider {...settings}>
        {testimonials.map((testimonial, index) => {
                            let indexText;

                            if (index % 4 === 0) {
                                indexText = 'one';
                            } else if (index % 4 === 1) {
                                indexText = 'two';
                            } else if (index % 4 === 2) {
                                indexText = 'three';
                            } else {
                                indexText = 'four'
                            }
         
                            return <Testimonail {...testimonial} index={indexText} />

                        })}
      </Slider>
    )
}

export default SliderWrapper