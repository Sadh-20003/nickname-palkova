import "../styles/product.css"
import palkova from "../assets/hero-palko.png"

export default function Products() {

    const products = [
        {
            id: 1,
            name: "Palkova Bite Classic",
            price: "₹10",
            img: palkova
        },
        {
            id: 2,
            name: "Cashew White Chocolate",
            price: "₹10",
            img: palkova
        },
        {
            id: 3,
            name: "Milk Palkova Special",
            price: "₹10",
            img: palkova
        },
        {
            id: 4,
            name: "Premium Cashew Palkova",
            price: "₹20",
            img: palkova
        }
    ]

    return (

        <section className="products-section">

            <div className="products-header">

                <h2>Our Delicious Products</h2>

                <p>
                    Crafted with rich milk and premium ingredients.
                    Taste the sweetness of our signature palkova bites.
                </p>

            </div>

            <div className="products-grid">

                {products.map((product) => (

                    <div className="product-card" key={product.id}>

                        <div className="product-image">

                            <span className="price-badge">
                                {product.price}
                            </span>

                            <img src={product.img} alt={product.name} />

                        </div>

                        <div className="product-info">

                            <h3>{product.name}</h3>

                            <button className="buy-btn">
                                Order Now
                            </button>

                        </div>

                    </div>
                ))}

            </div>

        </section>

    )

}
