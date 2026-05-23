import React, { useEffect } from 'react';

function Pageheader({ title }) {
    
    useEffect(() => {
        if (window.SplitText || window.gsap) {
        }
    }, [title]);
    return (
        <div className="page-header bg-section dark-section parallaxie" key={title}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-header-box">
                            <h1 className="text-anime-style-3" data-cursor="-opaque">
                                {title}
                            </h1>
                            <nav className="wow fadeInUp">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="./">home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {title}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pageheader;
