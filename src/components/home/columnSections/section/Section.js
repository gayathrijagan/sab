import { Box } from '@material-ui/core';
import './section.scss';

const Section = ({image, heading, description}) => {

    return (
        <Box className="sectionContainer">
            <img src={image} className="image" />
            <Box className="content">
                <h3 className="heading">{heading}</h3>
                <p className="description">{description}</p>
            </Box>

        </Box>
    )

}

export default Section;