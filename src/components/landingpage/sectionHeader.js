import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem
} from 'mdb-react-ui-kit';

export default function SectionHeader() {
    const images = [
        require('../../media/header_01.jpg'),
        require('../../media/header_02.jpg'),
        require('../../media/header_03.jpg'),
        // '../../media/header_01.jpeg',
        // '../../media/header_02.jpeg'
    ]
    const carousel_images = (        
        images.map((image_src, index) =>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={index+1}
                src={image_src}
                key={index}
                alt='Donation to needy image'
            />
        )
    )
    return (
        <MDBCarousel fade interval={4000} pause="false" showControls>
            {carousel_images}
        </MDBCarousel>
    );
}