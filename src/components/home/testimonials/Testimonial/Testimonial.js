import { FaQuoteRight } from "react-icons/fa6";
import "./testimonial.scss";

const Testimonail = ({ text, author, index, marginTop=0 }) => {
    console.log(index, marginTop)
    const customStyle = {
        one: { background: 'rgb(230 231 203)', color: 'black',  marginTop: marginTop  },
        // one: { background: 'rgb(240, 240, 240)', color: 'black', marginTop: marginTop },
        two: { background: 'rgb(33 75 0)', color: 'white',  marginTop: marginTop  },
        // two: { background: 'rgb(0, 66, 120)', color: 'white',  marginTop: marginTop  },
        three: { background: 'rgb(213 228 219)', color: 'black',  marginTop: marginTop  },
        four: { background: 'rgb(79 84 49)', color: 'white',  marginTop: marginTop  },
        
        
    }

    return (
        <div className="testimonial-container" style={customStyle[index]}>
            <div className='testimonial-text-container'>
                <p>{text}</p>
                <FaQuoteRight className="quote-icon"/>
                <p className="testimonial-author">{author}</p>
            </div>
        </div>
    )
}

export default Testimonail;