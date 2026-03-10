import "../styles/flavours.css"

const flavours = [
    {
        id: 1,
        name: "Milk Palkova",
        desc: "Classic traditional milk palkova sweetness",
        img: "/src/assets/hero-palko.png"
    },
    {
        id: 2,
        name: "Cashew Palkova",
        desc: "Rich palkova blended with premium cashews",
        img: "/src/assets/hero-palko.png"
    },
    {
        id: 3,
        name: "White Chocolate",
        desc: "Creamy white chocolate palkova delight",
        img: "/src/assets/hero-palko.png"
    },
    {
        id: 4,
        name: "Premium Special",
        desc: "Our signature premium palkova recipe",
        img: "/src/assets/hero-palko.png"
    }
]

export default function Flavours() {

    return (

        <section className="flavours-section">

            <h2 className="flavours-title">
                Our Flavours
            </h2>

            <div className="flavours-grid">

                {flavours.map((flavour) => (

                    <div className="flavour-card" key={flavour.id}>

                        <img src={flavour.img} alt={flavour.name} />

                        <h3>{flavour.name}</h3>

                        <p>{flavour.desc}</p>

                    </div>
                ))}

            </div>

        </section>

    )

}

