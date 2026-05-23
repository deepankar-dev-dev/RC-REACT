function Introvideostartprogram() {
    return (
        <div className="intro-video bg-section dark-section parallaxie">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-video-content">
                            <div className="section-title">
                                <span className="section-sub-title wow fadeInUp">Watch Our Video</span>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">
                                    See how we train, support, & inspire our members
                                </h2>
                            </div>
                            {/* CSS Anchor for click to play */}
                            <div className="watch-video-circle wow fadeInUp">
                                <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                                    {/* Image removed from here and moved to CSS background */}
                                    <span className="play-icon-placeholder"></span>
                                </a> 
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Introvideostartprogram;
