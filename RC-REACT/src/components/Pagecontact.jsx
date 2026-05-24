function Pagecontact(){
    return(
    <div className="page-contact-us">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="contact-image-form-box">                        
                        <div className="contact-image-box">
                            <div className="contact-us-image">
                                <figure>
                                    <img style={{maxwidth: '100%'}} src="/assets/images/model.png.png" alt=""/>
                                </figure>
                            </div>
                            <div className="contact-info-items-list wow fadeInUp">
                                <div className="contact-info-item">
                                    <div className="icon-box">
                                        <img src="/assets/images/icon-phone-primary.svg" alt=""/>
                                    </div>
                                    <div className="contact-info-item-content">
                                        <h2>Phone Number</h2>
                                        <p><a href="tel: 8750782858">8750782858</a></p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="icon-box">
                                        <img src="/assets/images/icon-mail-primary.svg" alt=""/>
                                    </div>
                                    <div className="contact-info-item-content">
                                        <h2>Email Address</h2>
                                        <p><a href="Chaudharygrouppvt@gmail.com">Chaudharygrouppvt@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <div className="section-title">
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Contact Us Now</h2>
                                <p className="wow fadeInUp" data-wow-delay="0.2s" style={{color:'black'}}>Ready to begin your fitness journey? Contact 
                                    <span style={{color:'grey',fontWeight:'bolder'}}> R </span> <span style={{color:'red', fontWeight:'bolder'}}> C</span> <span style={{fontWeight:'bolder', color:'black'}}> Fitness</span> today and let our expert trainers guide you with the right program and support.</p>  
                            </div>
                            <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.4s">
                                <div className="row">
                                    <div className="form-group col-md-6 mb-4">
                                        <label>First Name *</label>
                                        <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter First Name" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label>Last Name *</label>
                                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter Last Name" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label>Email Address *</label>
                                        <input type="email" name ="email" className="form-control" id="email" placeholder="Enter Email Address" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-6 mb-4">
                                        <label>Phone Number *</label>
                                        <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter Phone Number" required/>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group col-md-12 mb-5">
                                        <label>Message</label>
                                        <textarea name="message" className="form-control" id="message" rows="5" placeholder="Any Additional Message..."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="submit" className="btn-default">Submit Message</button>
                                        <div id="msgSubmit" className="h3 hidden"></div>
                                    </div>
                                </div>
                            </form>
                        </div>                       
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    )
}
export default Pagecontact;