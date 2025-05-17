import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/products.css"

const Products = () => {
  const [apiProducts, setApiProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Static products array
  const staticProducts = [
    {
      nombre: "Camiseta Casual",
      imagen: "/images/product1.jpg",
      descripcion: "Cómoda y versátil, perfecta para cualquier ocasión.",
      precio: "$25.99",
    },
    {
      nombre: "Jeans Clásicos",
      imagen: "/images/product2.jpg",
      descripcion: "Diseño atemporal con ajuste perfecto.",
      precio: "$39.99",
    },
    {
      nombre: "Chaqueta Elegante",
      imagen: "/images/product3.jpg",
      descripcion: "Estilo moderno con un toque sofisticado.",
      precio: "$59.99",
    },
    {
      nombre: "Zapatillas Urbanas",
      imagen: "/images/product4.jpg",
      descripcion: "Ideales para un look casual y cómodo.",
      precio: "$49.99",
    },
  ]

  useEffect(() => {
    const fetchClothingProducts = async () => {
      try {
        setLoading(true)
        // Using DummyJSON API to fetch women's dresses
        const response = await fetch("https://dummyjson.com/products/category/womens-dresses")
        const data = await response.json()

        // Transform the API data to match our product format
        const formattedProducts = data.products.map((product) => ({
          id: product.id,
          nombre: product.title,
          imagen: product.thumbnail,
          descripcion: product.description.substring(0, 60) + "...",
          precio: `$${product.price.toFixed(2)}`,
          rating: product.rating,
          apiProduct: true,
        }))

        setApiProducts(formattedProducts)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching clothing products:", error)
        setLoading(false)
      }
    }

    fetchClothingProducts()
  }, [])

  // Combine static and API products
  const allProducts = [...staticProducts, ...apiProducts]

  return (
    <div className="products-page">
      

      <h2 className="titulo">Nuestros Productos</h2>

      {loading && <p className="loading">Cargando productos adicionales...</p>}

      <div className="productos-container">
        {allProducts.map((producto, index) => (
          <div key={producto.id || index} className="producto">
            <img
              src={producto.imagen || "/placeholder.svg"}
              alt={producto.nombre}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = "/images/placeholder.jpg"
              }}
            />
            {producto.apiProduct && <span className="api-badge">DummyJSON</span>}
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p className="precio">{producto.precio}</p>
            {producto.rating && <p className="rating">Rating: {producto.rating}/5</p>}
            <button>Comprar</button>
          </div>
        ))}
      </div>

      <h2 className="titulo">Productos de Otra API</h2>
      <div className="api-selector">
        <button onClick={() => fetchOtherApi("womens-dresses")}>Vestidos</button>
        <button onClick={() => fetchOtherApi("mens-shirts")}>Camisas</button>
        <button onClick={() => fetchOtherApi("womens-shoes")}>Zapatos</button>
      </div>
    </div>
  )

  // Function to fetch products from different categories
  async function fetchOtherApi(category) {
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products/category/${category}`)
      const data = await response.json()

      const formattedProducts = data.products.map((product) => ({
        id: product.id,
        nombre: product.title,
        imagen: product.thumbnail,
        descripcion: product.description.substring(0, 60) + "...",
        precio: `$${product.price.toFixed(2)}`,
        rating: product.rating,
        apiProduct: true,
      }))

      setApiProducts(formattedProducts)
      setLoading(false)
    } catch (error) {
      console.error(`Error fetching ${category}:`, error)
      setLoading(false)
    }
  }
}

export default Products
