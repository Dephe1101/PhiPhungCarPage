import axios from 'axios';
import React, { useEffect, useState, useTransition } from 'react'
import { useSpring, animated } from 'react-spring'
import { API_URL } from '../../../config';

export default function DatHang() {


    useEffect(() => {
        handelItem()
    }, [])
    const [state, setState] = useState({
        list: []
    });
    const handelItem = () => {
        let promise = axios({
            url: API_URL,
            method: 'GET'
        });
        promise.then(result => {
            setState({
                list: result.data
            });
        });
    };

    return (
        <section className=''>
            <div className='container'>
                <h2 className='title text-center'>SẢN PHẨM NỔI BẬT</h2>
                <div className='row'>
                    {state.list.filter(product => product.mucdohienthi === 'sale').map((item, index) => {
                        return <div className="datHang-item xl:w-1/2 lg:w-full w-1/2" style={{ width: '50%', display: 'inline-block' }}>
                            <div className="item-product relative rounded-[10px] bg-white border border-[#ffe200] md:flex justify-flex-start items-center shadow-[11px_12px_20px_rgba(0,0,0,0.05)]">

                                <div className="md:w-1/2 thumbnail-container rounded-[18px] overflow-hidden relative
			1 hover-images 			">
                                    <a className="relative block overflow-hidden" href="https://automize.risingbamboo.com/product/curabitur-ultrices-enim-ut-nunc-commodo-semper-suscipit/" tabIndex={0}>
                                        <img loading="lazy" decoding="async" width={640} height={640} src={item.hinhAnh} className="max-w-full w-full" alt="Curabitur ultrices enim ut nunc commodo semper suscipit" sizes="(max-width: 640px) 100vw, 640px" />
                                    </a>

                                </div>
                                <div className="md:w-1/2 md:py-4 pt-4 pb-6 md:px-5 product_info relative d-flex justify-content-center align-items-center">
                                    <div className="product_info-bottom bg-white pt-3 md:px-0 px-3">

                                        <a href="https://automize.risingbamboo.com/product/curabitur-ultrices-enim-ut-nunc-commodo-semper-suscipit/" className="product_name block !font-semibold leading-[27px] md:mb-5 mb-2" tabIndex={0}>{item.tenSP}</a>
                                        <div className="product_price text-base font-bold">
                                            <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>{item.giaTien.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VND</bdi></span>  							</div>
                                        <div className="relative mt-[30px] h-2 rounded-[30px]" style={{ backgroundColor: '#e0e0e0' }}>
                                            <div className="absolute h-2 rounded-[30px]" style={{ width: '35%', background: 'linear-gradient(90deg, rgba(255, 192, 0, 1), rgba(255, 0, 0, 1) 100%)' }} />
                                        </div>
                                        <div className="text-[#3f4045] text-[10px] font-bold mt-4 mb-2.5 uppercase">
                                            <span className="d-inline-block">
                                                35% Sold				</span>
                                            - Available: 11			</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section >
    )
}
