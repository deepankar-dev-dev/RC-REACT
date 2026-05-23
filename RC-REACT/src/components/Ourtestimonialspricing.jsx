import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


function Ourtestimonialspricing(){

    useEffect(() => {
        const testimonialSwiper = new Swiper('.testimonial-slider .swiper', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.testimonial-button-next',
                prevEl: '.testimonial-button-prev',
            },
        });

        const logoSwiper = new Swiper('.company-supports-slider .swiper', {
            loop: true,
            slidesPerView: 2, 
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 40 },
                1024: { slidesPerView: 5, spaceBetween: 50 },
            }
        });
        return () => {
            if (testimonialSwiper) testimonialSwiper.destroy();
            if (logoSwiper) logoSwiper.destroy();
        };
    }, []);

    return (
        <div className="our-testimonials bg-section dark-section parallaxie">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="our-testimonial-content">
                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp">Our Testimonials</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Forged by dedication, driven by results—welcome to the R C Fitness family.</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s">Hear directly from our members about their experiences, progress, and fitness journeys at R C Fitness.</p>
                            </div>

                            <div className="contact-us-circle wow fadeInUp" data-wow-delay="0.4s">
                                <Link to="/contact">
                                    <img src="./src/assets/images/gym-logo.png" alt="Gym Logo" />
                                    <p style={{ color: 'white', fontStyle: 'normal', fontSize: 'large' }}>Contact Us..🕿</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="testimonial-slider wow fadeInUp">
                            <div className="swiper">
                                <div className="swiper-wrapper" data-cursor-text="Drag">

                                    {/* Slide 1 */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-item-header">
                                                <div className="testimonial-item-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <div className="testimonial-item-quote">
                                                    <img src="./src/assets/images/testimonial-quote.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-item-body">
                                                <div className="testimonial-item-content">
                                                    <p> “<span style={{ color: '#5A5A5A' }}>R </span><span style={{ color: '#FF0000' }}>C</span> <span style={{ color: '#FFFFFF' }}>Fitness</span> is a very professional gym. The personal training is well planned and helps you reach your goals. <strong style={{ textDecoration: 'underline', backgroundColor: '#FFFF00', color: '#000000' }}>Rahul Chaudhary</strong> always check your progress and change workouts to keep them simple and effective.”</p>
                                                </div>
                                                <div className="testimonial-item-author">
                                                    <div className="testimonial-author-image">
                                                        <figure className="image-anime">
                                                            {/* <img src="images/author-1.jpg" alt="" /> */}
                                                        </figure>
                                                    </div>
                                                    <div className="testimonial-author-content">
                                                        <h2>Deep Sharma</h2>
                                                        <p>Premium Membership</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Slide 2 */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-item-header">
                                                <div className="testimonial-item-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <div className="testimonial-item-quote">
                                                    <img src="./src/assets/images/testimonial-quote.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="testimonial-item-body">
                                                <div className="testimonial-item-content">
                                                    <p> “<span style={{ color: '#5A5A5A' }}>R </span><span style={{ color: '#FF0000' }}>C</span> <span style={{ color: '#FFFFFF' }}>Fitness</span> is a very professional gym. The personal training is well planned and helps you reach your goals. <strong style={{ textDecoration: 'underline', backgroundColor: '#FFFF00', color: '#000000' }}>Rahul Chaudhary</strong> always check your progress and change workouts to keep them simple and effective.”</p>
                                                </div>
                                                <div className="testimonial-item-author">
                                                    <div className="testimonial-author-image">
                                                        <figure className="image-anime">
                                                            {/* <img src="images/author-2.jpg" alt="" /> */}
                                                        </figure>
                                                    </div>
                                                    <div className="testimonial-author-content">
                                                        <h2>Shivam Rajput</h2>
                                                        <p>Premium Membership</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="testimonial-slider-btn">
                                    <div className="testimonial-button-prev"></div>
                                    <div className="testimonial-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Supports Section */}
                    <div className="col-lg-12">
                        <div className="company-supports-slider-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="company-supports-content">
                                <hr />
                                <p>Forged by dedication, driven by results—welcome to the <span style={{color:'silver', fontWeight:'bolder'}}>R </span> <span style={{color:'red', fontWeight:'bolder'}}>C</span> <span style={{fontWeight:'bold'}}> Fitness</span> family.</p>
                                <hr />
                            </div>

                            <div className="company-supports-slider">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="company-supports-logo">
                                                <img src="./src/assets/images/company-supports-logo-1.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="company-supports-logo">
                                                <img src="./src/assets/images/company-supports-logo-2.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="company-supports-logo">
                                                <img src="./src/assets/images/company-supports-logo-3.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="company-supports-logo">
                                                <img src="./src/assets/images/company-supports-logo-4.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="company-supports-logo">
                                                <img src="./src/assets/images/company-supports-logo-5.svg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="company-supports-logo">
                                                <img src="./src/assets/images/company-supports-logo-3.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Ourtestimonialspricing;