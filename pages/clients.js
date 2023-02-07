import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/swiper-bundle.css";
import Title from './sectionTitle';
// import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'

const ClientScroller = ({ images }) => {
    const [swiper, setSwiper] = useState(null);
    SwiperCore.use([Autoplay])

    useEffect(() => {
        setSwiper(
            new Swiper(".swiper-container", {
                direction: "horizontal",
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".swiper-pagination"
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                breakpoints: {
                    // when window width is >= 320px
                    420: {
                        slidesPerView: 1
                    },
                    // when window width is >= 640px
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 5
                    },
                }
            })
        );
        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <>
            <Title title="Previous Clients"/>
            <div className="swiper-container" style={{ margin: "50px 0 !important" }}>
                <div className="swiper-wrapper align-items-center">
                    {images.map((image, index) => (
                        <div key={index} className="swiper-slide">
                            <img className={`img-fluid`} src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className={`swiper-pagination`}></div>
                <div className={`swiper-button-prev`}></div>
                <div className={`swiper-button-next`}></div>
            </div>
        </>
    );
};

export default ClientScroller;
