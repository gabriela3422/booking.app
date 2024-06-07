import React, {useEffect} from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const HotelGallery = ({hotel, id}) => {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: `#gallery`,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);
    return (
        <>
            <div className="hotel-gallery__grid  pt-7" id="gallery">
                {hotel.gallery.map((image, index) => (
                    <a className="gallery-grid__item relative flex"
                       href={require(`../../../assets/images/hotels/${image}`)}
                       data-pswp-width="660"
                       data-pswp-height="660"
                       target="_blank"
                       rel="noreferrer"
                       key={hotel.id + '-' + index}>
                        <img src={require(`../../../assets/images/hotels/${image}`)}
                             alt={`${hotel.title} gallery ${hotel.id + 1}`}/>
                    </a>
                ))}
            </div>
        </>
    )
}
export default HotelGallery