import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
export default function NewIn() {

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "black", borderRadius: "10%" }}
                onClick={onClick}
            />
        );
    }


    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "black", borderRadius: "10%" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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


        <div>
            <section className="new__in section">
                <div className="container-xxl">
                    <h2 className="title">DANH MỤC SẢN PHẨM</h2>
                    <div className="row">
                        {/* <Slider {...settings}>
                            <div className="col-6 col-md-3 px-2">
                                <div className="new__in__img">
                                    <div className=''   >
                                        <img style={{ width: "100%", height: "307px" }} src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_1_img.jpg?v=242' alt />
                                    </div>
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div to="/manhinh">
                                            <NavLink to="/manhinh"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Màn Hình Android Ôtô</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <div>
                                        <img style={{ width: "100%", height: "100%" }} src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_2_img.jpg?v=242' alt />
                                    </div>
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <NavLink to="/den"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Nâng Cấp Ánh Sáng</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <div style={{ width: "100%", height: "307px" }}>
                                        <img style={{ width: "100%", height: "100%" }} src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_3_img.jpg?v=242      ' alt />
                                    </div>
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <NavLink to="/phimcachnhiet"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Phim Cách Nhiệt</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <img src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_4_img.jpg?v=242' alt />
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <NavLink to="/camerahanhtrinh"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Camera Hành Trình</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <img src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_5_img.jpg?v=242' alt />
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <NavLink to="/copdientudong"><i className="fa fa-play" /></NavLink>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Cốp Điện Tự Động</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-3  px-2">
                                <div className="new__in__img">
                                    <img src='https://theme.hstatic.net/200000458777/1001039526/14/cate_feature_6_img.jpg?v=242' alt />
                                    <div className="new__in__overlay" />
                                    <div className="new__in__play">
                                        <div>
                                            <a href><i className="fa fa-play" /></a>
                                            <a href>Read More</a>

                                        </div>
                                    </div>
                                </div>
                                <div className="new__in__title">
                                    <h3>Đèn Led Nội Thất</h3>
                                    <div className="mb-3 mb-md-0">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                </div>
                            </div>
                        </Slider> */}
                        <div className='col-6 col-lg-2 col-md-4 col-sm-6'>
                            <div className="newin-item" data-slick-index={0} aria-hidden="false" >
                                <div>
                                    <div className="item elementor-repeater-item-ca914f3 basis-0 max-w-full mb-2" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="block__content block__content1 relative group duration-300 text-center rounded-[10px] md:px-5 px-2 py-[18px]">
                                            <div className="flex justify-center relative z-10 pt-6 pb-7">
                                                <img decoding="async" className=" newin-item-img max-w-[70px] max-h-[70px] !inline-block group-hover:animate-[hexagonIcon_1s_ease-in-out]" src="https://automize.risingbamboo.com/wp-content/uploads/2024/05/car-wheel2.svg" alt="Tires & Wheels" />
                                            </div>
                                            <h5 className="text-white relative z-10 pb-3">
                                                <a className="duration-300" href="#" tabIndex={0}>
                                                    Phụ Tùng</a>
                                            </h5>
                                            <a href="#" class="rbb-slick-button button relative z-10 mb-8 duration-300 btn_view-all inline-block" tabindex="0">
                                                <span class="text-white duration-300 capitalize hover:text-[color:var(--rbb-general-link-hover-color)]">
                                                    Mua Ngay																							<i class="rbb-icon-direction-711 text-sm ml-2 align-middle"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-2 col-md-4 col-sm-6'>
                            <div className="newin-item" data-slick-index={0} aria-hidden="false">
                                <div>
                                    <div className="item elementor-repeater-item-ca914f3 basis-0 max-w-full mb-2" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="block__content block__content2 relative group duration-300 text-center rounded-[10px] md:px-5 px-2 py-[18px]">
                                            <div className="flex justify-center relative z-10 pt-6 pb-7">
                                                <img decoding="async" className=" newin-item-img max-w-[70px] max-h-[70px] !inline-block group-hover:animate-[hexagonIcon_1s_ease-in-out]" src="https://automize.risingbamboo.com/wp-content/uploads/2024/05/brake2.svg" alt="Tires & Wheels" />
                                            </div>
                                            <h5 className="text-white relative z-10 pb-3">
                                                <a className="duration-300" href="#" tabIndex={0}>
                                                    Dịch vụ</a>
                                            </h5>
                                            <a href="#" class="rbb-slick-button button relative z-10 mb-8 duration-300 btn_view-all inline-block" tabindex="0">
                                                <span class="text-white duration-300 capitalize hover:text-[color:var(--rbb-general-link-hover-color)]">
                                                    Mua Ngay																							<i class="rbb-icon-direction-711 text-sm ml-2 align-middle"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-2 col-md-4 col-sm-6'>
                            <div className="newin-item" data-slick-index={0} aria-hidden="false" >
                                <div>
                                    <div className="item elementor-repeater-item-ca914f3 basis-0 max-w-full mb-2" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="block__content  block__content3 relative group duration-300 text-center rounded-[10px] md:px-5 px-2 py-[18px]">
                                            <div className="flex justify-center relative z-10 pt-6 pb-7">
                                                <img decoding="async" className=" newin-item-img max-w-[70px] max-h-[70px] !inline-block group-hover:animate-[hexagonIcon_1s_ease-in-out]" src="https://automize.risingbamboo.com/wp-content/uploads/2024/05/suspension2.svg" alt="Tires & Wheels" />
                                            </div>
                                            <h5 className="text-white relative z-10 pb-3">
                                                <a className="duration-300" href="#" tabIndex={0}>
                                                    Sửa chửa bảo hiểm </a>
                                            </h5>
                                            <a href="#" class="rbb-slick-button button relative z-10 mb-8 duration-300 btn_view-all inline-block" tabindex="0">
                                                <span class="text-white duration-300 capitalize hover:text-[color:var(--rbb-general-link-hover-color)]">
                                                    Mua Ngay																							<i class="rbb-icon-direction-711 text-sm ml-2 align-middle"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-2 col-md-4 col-sm-6'>
                            <div className="newin-item" data-slick-index={0} aria-hidden="false" >
                                <div>
                                    <div className="item elementor-repeater-item-ca914f3 basis-0 max-w-full mb-2" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="block__content block__content4 relative group duration-300 text-center rounded-[10px] md:px-5 px-2 py-[18px]">
                                            <div className="flex justify-center relative z-10 pt-6 pb-7">
                                                <img decoding="async" className=" newin-item-img max-w-[70px] max-h-[70px] !inline-block group-hover:animate-[hexagonIcon_1s_ease-in-out]" src="https://automize.risingbamboo.com/wp-content/uploads/2024/05/audio-system2.svg" alt="Tires & Wheels" />
                                            </div>
                                            <h5 className="text-white relative z-10 pb-3">
                                                <a className="duration-300" href="#" tabIndex={0}>
                                                    Hệ thống âm thanh</a>
                                            </h5>
                                            <a href="#" class="rbb-slick-button button relative z-10 mb-8 duration-300 btn_view-all inline-block" tabindex="0">
                                                <span class="text-white duration-300 capitalize hover:text-[color:var(--rbb-general-link-hover-color)]">
                                                    Mua Ngay																							<i class="rbb-icon-direction-711 text-sm ml-2 align-middle"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-2 col-md-4 col-sm-6'>
                            <div className="newin-item" data-slick-index={0} aria-hidden="false" >
                                <div>
                                    <div className="item elementor-repeater-item-ca914f3 basis-0 max-w-full mb-2" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="block__content block__content5 relative group duration-300 text-center rounded-[10px] md:px-5 px-2 py-[18px]">
                                            <div className="flex justify-center relative z-10 pt-6 pb-7">
                                                <img decoding="async" className=" newin-item-img max-w-[70px] max-h-[70px] !inline-block group-hover:animate-[hexagonIcon_1s_ease-in-out]" src="https://automize.risingbamboo.com/wp-content/uploads/2024/05/headlight2.svg" alt="Tires & Wheels" />
                                            </div>
                                            <h5 className="text-white relative z-10 pb-3">
                                                <a className="duration-300" href="#" tabIndex={0}>
                                                    Hệ thống chiếu sáng</a>
                                            </h5>
                                            <a href="#" class="rbb-slick-button button relative z-10 mb-8 duration-300 btn_view-all inline-block" tabindex="0">
                                                <span class="text-white duration-300 capitalize hover:text-[color:var(--rbb-general-link-hover-color)]">
                                                    Mua Ngay																							<i class="rbb-icon-direction-711 text-sm ml-2 align-middle"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-lg-2 col-md-4 col-sm-6'>
                            <div className="newin-item" data-slick-index={0} aria-hidden="false" >
                                <div>
                                    <div className="item elementor-repeater-item-ca914f3 basis-0 max-w-full mb-2" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="block__content block__content6 relative group duration-300 text-center rounded-[10px] md:px-5 px-2 py-[18px]">
                                            <div className="flex justify-center relative z-10 pt-6 pb-7">
                                                <img decoding="async" className=" newin-item-img max-w-[70px] max-h-[70px] !inline-block group-hover:animate-[hexagonIcon_1s_ease-in-out]" src="https://automize.risingbamboo.com/wp-content/uploads/2024/05/rims2.svg" alt="Tires & Wheels" />
                                            </div>
                                            <h5 className="text-white relative z-10 pb-3">
                                                <a className="duration-300 " href="#" tabIndex={0} >
                                                    Detailing</a>
                                            </h5>
                                            <a href="#" class="rbb-slick-button button relative z-10 mb-8 duration-300 btn_view-all inline-block" tabindex="0">
                                                <span class="text-white duration-300 capitalize hover:text-[color:var(--rbb-general-link-hover-color)]">
                                                    Mua Ngay																							<i class="rbb-icon-direction-711 text-sm ml-2 align-middle"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}
