function Plandetailpricing(){
    return(
    <div className="page-pricing">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="pricing-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="pricing-item-header">
                            <div className="icon-box">
                                <img src="./src/assets/images/icon-pricing-item-1.svg" alt=""/>
                            </div>
                            <div className="pricing-item-content">
                                <h2>Basic Membership</h2>
                                <p style={{color:'GrayText'}}>With the Basic Membership, get access to our full range of gym equipments.</p>
                            </div>
                            <div className="pricing-item-list">
                                <ul>
                                    {/* <!-- <li>Priority Support & Premium Locker</li> --> */}
                                    <li style={{color:'GrayText'}}>High-energy group fitness classes</li>
                                    <li style={{color:'GrayText'}}>Motivating & supportive environment</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricing-item-body">
                            <div className="pricing-item-price-box">
                                <div className="pricing-item-price">
                                    <h2>₹1000.00<sub>/Monthly</sub></h2>
                                    <p style={{color:'GrayText'}}>* Monthly 25 Days Classes</p>
                                </div>
                                <div className="pricing-item-btn">
                                    <a href="contact" className="btn-default btn-highlighted">Join Now</a>
                                </div>
                            </div>
                            <div className="pricing-item-body-content">
                                <p style={{color:'GrayText'}}>Try Any Membership Free for 1 Week</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6">
                    <div className="pricing-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="pricing-item-header">
                            <div className="icon-box">
                                <img src="images/icon-pricing-item-1.svg" alt=""/>
                            </div>
                            <div className="pricing-item-content">
                                <h2>Personal Training</h2>
                                <p style={{color:'GrayText'}}>Get exclusive 1-on-1 coaching directly from Rahul Chaudhary to fast-track your results.</p>
                            </div>
                            <div className="pricing-item-list">
                                <ul>
                                     <li style={{color:'GrayText'}}>Personal 1-on-1 Expert Coaching</li>
                                     <li style={{color:'GrayText'}}>Customized Diet Plan Included (Worth ₹1,000)</li>
                                     {/* <!-- <li>Full Access to Premium Gym Facilities & Lockers</li> --> */}
                                     <li style={{color:'GrayText'}}>High-Energy Group Fitness Classes Included</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pricing-item-body">
                            <div className="pricing-item-price-box">
                                <div className="pricing-item-price">
                                   <h2>₹7,000 <sub>/Monthly Personal Training Charge</sub></h2>
                                   <p style={{color:'GrayText'}}>* Complete Training & Nutrition Blueprint</p>
                                </div>
                                <div className="pricing-item-btn">
                                    <a href="contact" className="btn-default btn-highlighted">Join Now</a>
                                </div>
                            </div>
                            <div className="pricing-item-body-content">
                               <p style={{color:'GrayText'}}>Try Any Membership Free for 3 Days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="pricing-cta-box wow fadeInUp" data-wow-delay="0.6s">
                        <div className="pricing-cta-header">
                            <div className="pricing-cta-content">
                                <h2>Get Your Membership</h2>
                                <p style={{color:'white'}}>Our memberships give you access to all equipment, personalized training.</p>
                                <h3>Call Us At: <a href="tel:8750782858">8750782858</a></h3>
                            </div>
                            <div className="pricing-cta-btn">
                                <a href="contact" className="btn-default btn-highlighted">Call Us Today!</a>
                            </div>
                        </div>
                        <div className="pricing-cta-image">
                            <figure>
                                <img src="./src/assets/images/our-pricing-cta-image.png" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="pricing-benefit-list wow fadeInUp" data-wow-delay="0.8s">
                        <ul>
                            <li><img src="./src/assets/images/icon-pricing-benefit-1.svg" alt=""/>Get 30 day free trial</li>
                            <li><img src="./src/assets/images/icon-pricing-benefit-2.svg" alt=""/>No any hidden fees pay</li>
                            <li><img src="./src/assets/images/icon-pricing-benefit-3.svg" alt=""/>You can cancel anytime</li>
                        </ul>
                    </div>
                 
                </div>
            </div>
        </div>
    </div>
  
    )
}

export default Plandetailpricing;