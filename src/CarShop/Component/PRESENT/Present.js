import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Present extends Component {
    render() {


        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "none", background: "red" }}
                    onClick={onClick}
                />
            );
        }

        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "none", background: "green" }}
                    onClick={onClick}
                />
            );
        }
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: false,
            nextArrow: false,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
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
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]

        };
        return (
            <div className='Present'>
                <div className='image' style={{ position: "relative" }}>
                    <img style={{ width: "100%", height: "100%" }} src='https://u-truck.vn/uploads/banner/banner-web-utruck6.jpg' />

                </div>
                <div className='image mt-5' style={{ position: "relative" }}>
                    <img style={{ width: "100%", height: "100%" }} src='https://zestech.vn/wp-content/uploads/2024/04/banner.jpg' />

                </div>


                <div className='p-3 '>
                    <div className='container'>
                        <Slider  {...settings}>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://u-truck.vn/uploads/doi-tac/thumbs/450x0/doi-tac-a1.webp' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://u-truck.vn/uploads/doi-tac/thumbs/450x0/doi-tac-a2.webp' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://u-truck.vn/uploads/doi-tac/thumbs/450x0/doi-tac-a3.webp' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://u-truck.vn/uploads/doi-tac/thumbs/450x0/doi-tac-a4.webp' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://u-truck.vn/uploads/doi-tac/thumbs/450x0/doi-tac-a9.webp' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://u-truck.vn/uploads/doi-tac/thumbs/450x0/doi-tac-a10.webp' />
                            </div>
                            <div >
                                <img style={{ width: "80%", height: "80%" }} src='https://u-truck.vn/uploads/doi-tac/thumbs/450x0/doi-tac-a11.webp' />
                            </div>


                        </Slider>
                    </div>
                </div>

            </div >
        )
    }
}
