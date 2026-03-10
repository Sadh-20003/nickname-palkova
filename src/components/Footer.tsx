import "../styles/footer.css"
import logo from "../assets/logo-icon.png"

export default function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}

                <div className="footer-brand">

                    <img src={logo} alt="logo" />

                    <h3>Nickname Infotech</h3>

                    <p>
                        Authentic palkova crafted with traditional recipes
                        and premium ingredients.
                    </p>

                </div>

                {/* Quick Links */}

                <div className="footer-links">

                    <h4>Quick Links</h4>

                    <a href="#">Home</a> <a href="#">Products</a> <a href="#">Flavours</a> <a href="#">About</a>

                </div>

                {/* Contact */}

                <div className="footer-contact">

                    <h4>Contact</h4>

                    <p>📞 +91 82705 64998</p>
                    <p>📍 Chennai, Tamil Nadu</p>
                    <p>✉ nicknameinfotech@gmail.com</p>

                </div>

                {/* Social */}

                <div className="footer-social">

                    <h4>Follow Us</h4>

                    <div className="social-icons">

                        <a href="#">🌐</a> <a href="#">📘</a> <a href="#">📸</a> <a href="#">▶</a>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">

                <p>© 2026 Nickname Infotech | All Rights Reserved</p>

            </div>

        </footer>

    )

}
