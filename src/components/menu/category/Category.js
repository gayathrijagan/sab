import ReactImageGallery from 'react-image-gallery';

const breakfast = [
    {
        original: '/images/idli1.jpg',
        originalHeight: '300px'

    },
    {
        original: '/images/pongal_sambar_chutney.jpeg',
        originalHeight: '300px'

    },
]

const Category = () => {
    return (
        <div className='content'>
            <div className='breakfast'>
                <ReactImageGallery
                    items={breakfast}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showBullets={true}
                    showThumbnails={false}
                    showNav={false}
                />
                <div className='description'>
                    <h3>Breakfast</h3>
                    <p>
        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Category;
