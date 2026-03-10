import "../styles/about.css"
import palkova from "../assets/hero-palko.png"

export default function About() {

    return (

        <section className="about-section">

            <div className="about-container">

                <div className="about-image">

                    <img src={palkova} alt="Palkova" />

                </div>

                <div className="about-text">

                    <h2>Our Palkova Story</h2>

                    <p>
                        Our palkova is crafted using traditional recipes passed down through generations.
                        We use pure milk, premium ingredients, and authentic preparation methods
                        to create the rich taste loved by everyone.
                    </p>

                    <div className="about-features">

                        <div className="feature">
                            <h4>🥛 Pure Milk</h4>
                            <p>Made from fresh high-quality milk</p>
                        </div>

                        <div className="feature">
                            <h4>🌰 Premium Cashew</h4>
                            <p>Selected premium cashews for richness</p>
                        </div>

                        <div className="feature">
                            <h4>🍯 Traditional Taste</h4>
                            <p>Authentic sweet recipe with rich flavour</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}
