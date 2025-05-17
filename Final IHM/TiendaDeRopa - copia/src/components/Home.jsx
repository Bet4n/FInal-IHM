import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/home.css"

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()

        // Filter only clothing items
        const clothingItems = data.filter(
          (product) => product.category === "men's clothing" || product.category === "women's clothing",
        )

        setProducts(clothingItems)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="home-container">
  
      <header className="hero">
        <h2>Descubre la mejor moda en StorePix</h2>
        <p>Ropa de calidad, estilo único y las mejores marcas para ti.</p>
      </header>

      <section className="featured-products">
        <h3>Productos Destacados</h3>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <div className="product-list">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image || "/placeholder.svg"} alt={product.title} />
                <h4>{product.title}</h4>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p className="product-category">{product.category}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home