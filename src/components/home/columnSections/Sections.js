import Section from './section/Section';
const Sections = () => {
    return (
        <div className='sections'>
            <Section {...breakfast} />
            <Section {...lunch} />
            <Section {...dinner} />
            <Section {...catering} />
        </div>
    )
}