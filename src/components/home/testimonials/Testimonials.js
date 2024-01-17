import Testimonail from "./Testimonial/Testimonial";
import "./testimonials.scss";

const Testimonails = () => {
    const testimonials = [
        {
            text: "Wow wow wow.. I have not had such homely food any where  in Madurai (had at all top veg restaurants here). could give 10 stars for rice quality - without mixing any thing - just like home rice. Be it their sambar/vathakulambu/ poriyals/payasam - every thing tastes just like home. No fancy and articial flavours added.",
            author: "Sakthi L"
        },
        {
            text: "Had ordered meals few days back from here and that was my first order with them. Honestly, the meals was simply good with sufficient vegetables and taste was good too. Suited the tummy. Though it was an online order, they had maintained the quality unlike many other restaurants here in kalavasal byepass road.",
            author: "Soundarya Ponraj"
        },
        {
            text: "Each and every item on the elai chaappadu was awesome. Their hospitality and service was excellent. When a poriyal was getting over, they made fresh cabbage poriyal. Their payasam and karna kizhangu masiyal was the highlight. Morning and evening you do get onion based tiffin.",
            author: "Jayashree s"
        },
        {
            text: "The lunch is tasty and will not harm your stomach. No onion and garlic added in the preparation of meals. The hotel in second floor and the lift is there.",
            author: "Mahendra Murali"
        },
        {
            text: "Food taste is authentic and the options they provide are superb. We get a good variety. The food here is homely so even if we eat continuously will be ideal for per health. Their food is very tasty and hygienic.",
            author: "Ramsundar Sethuraman"
        },
        {
            text: "I've enjoyed a hearty meal after so long with very little price. Highly recommend and most healthiest food is served in this place.",
            author: "Siva"
        },
    ];

    const MARGIN_TOP_VALUE = '50px';
    return (
        <div className="testimonials-container">
            <h2 className="testimonials-heading">Testimonails</h2>
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
                    if (index % 3 == 1) {
                        marginTop = MARGIN_TOP_VALUE;
                    }

                    return <Testimonail {...testimonial} index={indexText} marginTop={marginTop} />

                })}
            </div>
        </div>
    )
}

export default Testimonails;