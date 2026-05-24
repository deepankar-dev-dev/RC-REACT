import { Link } from 'react-router-dom';

function Mainheader() {
    return (
        <header className="main-header">
            <div className="header-sticky">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        {/* Logo Start */}
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src="/assets/images/image.png.png" alt="Logo" style={{ height: '90px', marginRight: '10px' }}/>
                            <h2 style={{ margin: 0, fontWeight: 700, fontSize: '28px' }}>
                                <span style={{ color: 'silver' }}>R</span>
                                <span style={{ color: 'red' }}>C</span>
                                <span style={{ color: 'white' }}>Fitness</span>
                            </h2>
                        </Link>
                        {/* Logo End */}

                        {/* Main Menu Start */}
                        <div className="collapse navbar-collapse main-menu">
                            <div className="nav-menu-wrapper">
                                <ul className="navbar-nav mr-auto" id="menu">
                                    <li className="nav-item submenu">
                                        <Link className="nav-link" to="/">Home</Link>
                                        <ul>
                                            <li className="nav-item"><Link className="nav-link" to="/home-v1">Home - Version 1</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/home-v2">Home - Version 2</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/home-v3">Home - Version 3</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/programs">Programs</Link></li>
                                    
                                    <li className="nav-item submenu">
                                        <Link className="nav-link" to="#">Pages</Link>
                                        <ul>
                                            <li className="nav-item"><Link className="nav-link" to="/program-details">Program Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/trainers">Trainer Gallery</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/trainer-details">Trainer Details</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing Plan</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to="/gallery">Image Gallery</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                            
                            {/* Header Btn Start */}
                            <div className="header-btn">
                                <Link to="/contact" className="btn-default btn-highlighted">Book Free Trial</Link>
                            </div>
                            {/* Header Btn End */}
                        </div>
                        {/* Main Menu End */}
                        <div className="navbar-toggle"></div>
                    </div>
                </nav>
                <div className="responsive-menu"></div>
            </div>
        </header>
    );
}

export default Mainheader;