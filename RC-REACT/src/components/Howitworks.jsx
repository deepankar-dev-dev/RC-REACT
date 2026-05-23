function Howitworks(){
    return(
    <div className="how-it-work bg-section dark-section">
        <div className="container">
            <div className="row section-row">
                <div className="col-lg-12">
                    <div className="section-title section-title-center">
                        <span className="section-sub-title wow fadeInUp">How It Works</span>
                        <h2 className="text-anime-style-3" data-cursor="-opaque">A smart approach to training, progress, and wellness</h2>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="how-work-items-list">
                        <div className="how-work-item wow fadeInUp">
                            <div className="how-work-item-image">
                                <figure className="image-anime">
                                    <img src="./src/assets/images/about-item-image1.jpeg" alt=""/>
                                </figure>
                                <div className="how-work-item-step">
                                    <p>Step 01</p>
                                </div>
                            </div>
                            <div className="how-work-item-body">
                                <div className="how-work-item-content">
                                    <h3>Join <span style={{color: '#5A5A5A'}}>R </span><span style={{color: '#FF0000'}}>C</span> <span style={{color: '#FFFFFF'}}>Fitness</span></h3>
                                    <p>R C Fitness offers advanced training, expert support, and a fitness experience.</p>
                                </div>
                                <div className="how-work-item-list">
                                    <ul>
                                        <li>Choose the membership plan that fits</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="how-work-item wow fadeInUp" data-wow-delay="0.2s">
                            <div className="how-work-item-image">
                                <figure className="image-anime">
                                    <img src="./src/assets/images/about-item-image2.jpg.jpeg" alt=""/>
                                </figure>
                                <div className="how-work-item-step">
                                    <p>Step 02</p>
                                </div>
                            </div>
                            <div className="how-work-item-body">
                                <div className="how-work-item-content">
                                    <h3>Assessment & Goal Setting</h3>
                                    <p>Our gym environment is built to help you push limits with confidence.</p>
                                </div>
                                <div className="how-work-item-list">
                                    <ul>
                                        <li>Meet with certified trainers evaluate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="how-work-item wow fadeInUp" data-wow-delay="0.4s">
                            <div className="how-work-item-image">
                                <figure className="image-anime">
                                    <img src="./src/assets/images/about-item-image3.jpg.jpeg" alt=""/>
                                </figure>
                                <div className="how-work-item-step">
                                    <p>Step 03</p>
                                </div>
                            </div>
                            <div className="how-work-item-body">
                                <div className="how-work-item-content">
                                    <h3>Personalized Training</h3>
                                    <p>Our personalized training programs are designed around your unique fitness goals.</p>
                                </div>
                                <div className="how-work-item-list">
                                    <ul>
                                        <li>Workout plans tailored to your fitness</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.6s">
                        <div className="satisfy-client-images">
                            <div className="satisfy-client-image">
                                <figure className="image-anime">
                                    {/* <img src="images/author-6.jpg" alt=""> */}
                                </figure>
                            </div>
                            <div className="satisfy-client-image add-more">
                                <img src="./src/assets/images/icon-phone-primary.svg" alt=""/>
                            </div>
                        </div>
 
                        <p>The simple steps behind our fitness system, built to support every member - <a href="contact">Contact for know Our Process</a></p>
                        <ul>
                            <li><span className="counter">4.9</span>/5</li>
                            <li>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </li>
                            <li>Over 4200 Reviews</li>
                        </ul>
                    </div>
               
                </div>
            </div>
        </div>
    </div>

    )
}
export default Howitworks;