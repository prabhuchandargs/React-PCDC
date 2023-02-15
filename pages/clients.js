import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/swiper-bundle.css";
import Title from './sectionTitle';
import styles from './clients.module.css'
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
                    disableOnInteraction: false,
                    reverseDirection: true
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
        // 'swiper-container container mx-auto mb-5 '
        <>
            <Title subtitle="Esteemed Clients"/>
            <div className={'swiper-container container mx-auto mb-5'} style={{ margin: "10px auto 100px !important", cursor: "pointer" }}>
                <div className="swiper-wrapper align-items-center">
                    {images.map((image, index) => (
                        <div key={index} className="swiper-slide">
                            <img className={`img-fluid`} src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                {/* <div className={`swiper-button-prev`}></div>
                <div className={`swiper-button-next`}></div> */}
            </div>
        </>
    );
};

export default ClientScroller;
