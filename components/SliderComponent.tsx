"use client"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CarProps } from '@/types';

interface CarSliderProps {
    allCars: CarProps;
}

const SliderComponent = ({ allCars }: CarSliderProps | any) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='custome-slider'>
                <Slider {...settings}>
                    {
                        allCars?.map((value: any, uniKey: string) => (
                            <div className='p-5 bg-gray-100 mr-2 rounded-lg border border-gray-400' key={uniKey}>
                                <p className="slider-car-card__content-title">
                                    * {value.make}
                                    <br />
                                    * {value.model}
                                    <br />
                                    * {value.city_mpg} || MPG
                                    <br />
                                    * {value.class}
                                    <br />
                                    * {value.fuel_type} type car
                                    <br />
                                    * {value.year} model
                                </p>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </>
    )
}

export default SliderComponent;