import heroImg from "../assets/hero-palko.png"

import flower from "../assets/decor/flower.svg"
import flower2 from "../assets/decor/flower2.svg"
import leaf from "../assets/decor/leaf.svg"

import "../styles/hero.css"

export default function Hero() {
    return (

        <section className="hero-wrapper">

            <img src={flower} className="hero-flower flower1" />
            <img src={flower2} className="hero-flower flower2" />
            <img src={leaf} className="hero-flower leaf1" />

            <div className="hero-container">

                <div className="hero-text">

                    <h1>
                        Taste the Richness of
                        <span> Authentic Palkova</span>
                    </h1>

                    <p>
                        Made with pure milk and traditional methods.
                        Experience the sweetness of our signature
                        Palkova Bite crafted with love.
                    </p>

                    <button className="hero-btn">
                        Explore Products
                    </button>

                </div>


                <div className="hero-image">

                    <img src={heroImg} alt="palkova" />

                </div>

            </div>

            <div className="hero-wave">

                <svg viewBox="0 0 1440 320">
                    <path
                        fill="#ffffff"
                        fillOpacity="1"
                        d="M0,160L80,154.7C160,149,320,139,480,154.7C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg>

            </div>

        </section>

    )
}