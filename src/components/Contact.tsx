import "../styles/contact.css"

export default function Contact() {

    return (

        <section className="contact-section">

            <div className="contact-container">

                <h2>Order Fresh Palkova Today</h2>

                <p>
                    Enjoy the authentic taste of our traditional palkova.
                    Place your order now or contact us for more details.
                </p>

                <div className="contact-buttons">

                    <a href="tel:+918270564998" className="contact-btn call">
                        📞 Call Now
                    </a>

                    <a
                        href="https://wa.me/918270564998"
                        target="_blank"
                        className="contact-btn whatsapp"

                    >

                        💬 WhatsApp </a>

                </div>

                <div className="contact-info">

                    <p><strong>Phone:</strong> +91 82705 64998</p>

                    <p><strong>Location:</strong> Chennai, Tamil Nadu</p>

                    <p><strong>Email:</strong> nicknameinfotech@gmail.com</p>

                </div>

            </div>

        </section>

    )

}
