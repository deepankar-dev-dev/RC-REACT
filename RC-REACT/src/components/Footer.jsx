 import { Link } from 'react-router-dom';

function Footer(){
    return(

    <footer className="main-footer-gold bg-section dark-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                  
                    <div className="footer-content-box-gold">
                       
                        <div className="footer-links-box-gold">
                           
                            <div className="footer-links-gold">
                                <h2>Quick Links</h2>
                                <ul>
                                   <li><Link to="/">Home</Link></li>
                                   <li><Link to="/about">About Us</Link></li>
                                   <li><Link to="/programs">Programs</Link></li>
                                     {/* <li><a href="blog.html">Blogs</a></li>  */}
                                     <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                           
                            
                         
                            <div className="footer-links-gold">
                                <h2>Working Hours</h2>
                                <ul>
                                    <li>Monday - Friday: 6:00 AM - 10:30 PM</li>
                                    <li>Saturday: 7:00 AM - 9:00 PM</li>
                                </ul>
                            </div>
                           
                        </div>
                       
                         
                       
                        <div className="about-footer-gold">
                            <div className="footer-logo-gold">
                                <img src="/assets/images/gym-logo.png" alt=""/>
                            </div>               
                            <div className="about-footer-content-gold">
                                <p>We are a results-driven fitness center committed to helping individuals achieve strength, confidence, and healthier lifestyles. With expert trainers, modern equipment,</p>
                            </div>
                            <div className="footer-newsletter-form-gold">
                                <form id="newslettersForm" action="#" method="POST">
                                    <div className="form-group">
                                        <input type="email" name="mail" className="form-control" id="mail" placeholder="Email Address" required />
                                        <button type="submit" className="btn-default btn-highlighted">Subscribe Now</button>
                                    </div>
                                </form>
                            </div>                    
                        </div>
                       

                        
                        <div className="footer-links-box-gold">
                       
                            <div className="footer-links-gold">
                                <h2>Training Programs</h2>
                                <ul>
                                    <li><a href="program-details">Weight Loss Training</a></li>
                                    <li><a href="program-details">Group Training Sessions</a></li>
                                    <li><a href="program-details">Strength & Conditioning</a></li>
                                    <li><a href="program-details">Muscle Building Programs</a></li>
                                    <li><a href="program-details">Cardio & Endurance Workouts</a></li>
                                </ul>
                            </div>
                           

                            
                            <div className="footer-links-gold footer-contact-item">
                                <div className="footer-contact-item-header-gold">
                                    <div className="icon-box">
                                        <img src="images/icon-location-accent.svg" alt=""/>
                                    </div>
                                    <div className="footer-contact-item-title-gold">
                                        <h2>Our Location</h2>
                                    </div>
                                </div>
                                <div className="footer-contact-item-content-gold">
                                    <p>House No. 184, Basement Floor Nehru Garden Khora Colony Ghaziabad Near (Sharma Pharmacy) UP. 201309</p>
                                    <p>Phone Number = 8750782858</p>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                  
                </div>

                <div className="col-lg-12">
                   
                    <div className="footer-copyright-gold">
                        
                        <div className="footer-copyright-text-gold">
                            <p className="footer-text">Developed By⚡<b>Deep Sharma</b></p>
                        </div>
                      

                       
                        <div className="footer-social-links-gold">
                            <ul>
                                 {/* <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li> */}
                                {/* <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>  */}
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                       
                    </div>
                  
                </div>
            </div>
        </div>
    </footer>
  
    )
}
export default Footer;