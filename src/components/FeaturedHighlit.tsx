import { useState } from "react"
import "../styles/highlight.css"
import palkova from "../assets/hero-palko.png"

export default function FeaturedHighlight() {

    const products = [

        {
            id: 1,
            name: "Palkova Bite Classic",
            price: "₹10",
            img: palkova,
            desc: "Made with rich milk and premium cashews."
        },

        {
            id: 2,
            name: "Cashew White Chocolate",
            price: "₹10",
            img: palkova,
            desc: "Sweet palkova mixed with white chocolate."
        },

        {
            id: 3,
            name: "Milk Palkova Special",
            price: "₹10",
            img: palkova,
            desc: "Traditional milk palkova recipe."
        },

        {
            id: 4,
            name: "Premium Cashew Palkova",
            price: "₹20",
            img: palkova,
            desc: "Premium cashew rich palkova bite."
        }

    ]

    const [activeProduct, setActiveProduct] = useState(products[0])

    return (

        <section className="highlight-section">

            <h2 className="highlight-title">
                Featured Product
            </h2>

            <div className="highlight-container">

                {/* BIG PRODUCT */}

                <div className="big-product fade-anim" key={activeProduct.id}>

                    <img src={activeProduct.img} alt={activeProduct.name} />

                    <div className="big-product-info">

                        <h3>{activeProduct.name}</h3>

                        <p>{activeProduct.desc}</p>

                        <span>{activeProduct.price}</span>

                        <button>Order Now</button>

                    </div>

                </div>


                {/* SMALL PRODUCTS */}

                <div className="small-products">

                    {products.map((product) => (

                        <div
                            className={`small-card ${activeProduct.id === product.id ? "active" : ""}`}
                            key={product.id}
                            onClick={() => setActiveProduct(product)}
                        >

                            <img src={product.img} alt={product.name} />

                            <div>

                                <h4>{product.name}</h4>

                                <span>{product.price}</span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )

}