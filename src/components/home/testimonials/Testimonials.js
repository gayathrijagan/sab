import Testimonail from "./Testimonial/Testimonial";
import "./testimonials.scss";
import { testimonials } from "../../../constants/reviews";
import { useTheme, useMediaQuery } from "@material-ui/core";
import SliderWrapper from "./slider/SliderWrapper";

const Testimonails = () => {

    const MARGIN_TOP_VALUE = '50px';
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('768'));

    return (
        <div>
            <div className="testimonials-container">
                <h2 className="testimonials-heading">Testimonails</h2>
                {isMobile ?
                    <SliderWrapper /> :
                    <div className="testimonials">
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

                            let marginTop;
                            if (index % 3 === 1) {
                                marginTop = MARGIN_TOP_VALUE;
                            }

                            return <Testimonail {...testimonial} index={indexText} marginTop={marginTop} />

                        })}
                    </div>
                }
            </div>
        </div>
    )
}

export default Testimonails;