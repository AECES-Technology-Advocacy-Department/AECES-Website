import "./style.css"
// all class names with prefix "cs-" is from this custom css file

function HeroSection() {
    return (
        <>
            <div className="position-relative">
                <div className="cs-hero-section">
                    <img src="/aecesbg2.png" alt="jumbotron bg" className="cs-hero-bg" />
                </div>
                <div className="cs-hero-overlay"></div>
                <div className="cs-hero-card">
                    <h1 className="text-white" style={{ fontSize: '60px' }}>Here at AECES,</h1>
                    <h1 className="text-white" style={{ fontSize: '60px' }}>we like resistors.</h1>
                </div>
                <div className="cs-lm-btn">
                    <button>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default HeroSection