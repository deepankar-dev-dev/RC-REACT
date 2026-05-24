import { Link } from 'react-router-dom';
function Mainheader3(){
    return(
<header className="main-header">
		<div className="header-sticky">
			<nav className="navbar navbar-expand-lg">
				<div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="./">
    <img src="/assets/images/image.png.png" alt="Logo" style={{height:'90px', margin:'right:10px'}} />

    <h2 style={{ margin: '0', fontWeight: '700', fontSize: '28px' }}>
        <span style={{color:'silver'}}> R</span>
        <span style={{color:'red'}}> C</span>
        <span style={{color:'white'}}> Fitness</span>
    </h2>

                </a> 
                    <div className="collapse navbar-collapse main-menu">
                        <div className="nav-menu-wrapper">
                            <ul className="navbar-nav mr-auto" id="menu">
                                <li className="nav-item submenu"><a className="nav-link" href="./">Home</a>
                                    <ul>
                                        <li className="nav-item"><a className="nav-link" href="index.html">Home - Version 1</a></li>
                                        <li className="nav-item"><a className="nav-link" href="index-2.html">Home - Version 2</a></li>
                                        <li className="nav-item"><a className="nav-link" href="index-3.html">Home - Version 3</a></li>
                                    </ul>
                                </li>
                               <li className="nav-item">
    <Link className="nav-link" to="/about">About Us</Link>
</li>
<li className="nav-item">
    <Link className="nav-link" to="/programs">Programs</Link>
</li>

<li className="nav-item submenu">
    <Link className="nav-link" to="#">Pages</Link>
    <ul>
        <li className="nav-item">
            <Link className="nav-link" to="/program-details">Program Details</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/trainers">Trainer Gallery</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/trainer-details">Trainer Details</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing Plan</Link>
        </li>
        <li className="nav-item">
            {/* href hata kar 'to' kiya aur routes se match karne ke liye '/gallery' kiya */}
            <Link className="nav-link" to="/gallery">Image Gallery</Link>
        </li>
    </ul>
</li>

<li className="nav-item">
    {/* Yahan se .html extension hata kar sirf '/contact' kar diya hai */}
    <Link className="nav-link" to="/contact">Contact Us</Link>
</li>
                            </ul>
                        </div>
                        
                        
                        <div className="header-btn">
                            <a href="contact" className="btn-default btn-highlighted">Book Free Trial</a>
                        </div>
                       
                    </div>
					
					<div className="navbar-toggle"></div>
				</div>
			</nav>
			<div className="responsive-menu"></div>
		</div>
	</header>
	
    )
}
export default Mainheader3;