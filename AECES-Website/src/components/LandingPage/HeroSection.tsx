// all class names with prefix "cs-" is from the style.css file

function HeroSection() {
    return (
        <>
            <div className="position-relative">
                <div className="h-1000px overflow-hidden">
                    <img src="/aecesbg2.png" alt="jumbotron bg" className="cs-hero-bg" />
                </div>
                <div className="position-absolute w-100 h-100 top-0 opacity-25 bg-dark z-1"></div>
                <div className="cs-hero-card">
                    <h1 className="text-white fs-60px">Here at AECES,</h1>
                    <h1 className="text-white fs-60px">we like resistors.</h1>
                </div>
                <div className="cs-lm-btn">
                    <button>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default HeroSection