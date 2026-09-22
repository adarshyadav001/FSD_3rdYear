import { useEffect, useState } from 'react'
import './App.css'

const PRODUCTS_URL = 'https://fakestoreapi.com/products'

function App() {
  const [count, setCount] = useState(0)
  const [pointer, setPointer] = useState(1000)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function fetchProducts() {
      try {
        setIsLoading(true)
        setError('')
        const response = await fetch(PRODUCTS_URL, { signal: controller.signal })
        if (!response.ok) throw new Error('Products could not be loaded.')

        setProducts(await response.json())
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'Something went wrong while loading products.')
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false)
      }
    }

    fetchProducts()
    return () => controller.abort()
  }, [])

  return (
    <main className="product-page">
      <header className="page-header">
        <p className="eyebrow">React useEffect example</p>
        <h1>Store products</h1>
        <p>Products are loaded once when this page opens.</p>
      </header>

      <section className="controls" aria-label="State controls">
        <div>
          <span>Count</span><strong>{count}</strong>
          <button type="button" onClick={() => setCount((value) => value + 10)}>Add 10</button>
        </div>
        <div>
          <span>Pointer</span><strong>{pointer}</strong>
          <button type="button" onClick={() => setPointer((value) => value + 10)}>Add 10</button>
        </div>
      </section>

      {isLoading && <p className="status">Loading products…</p>}
      {error && <p className="status error" role="alert">{error}</p>}

      {!isLoading && !error && (
        <section className="product-grid" aria-label="Products">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <p className="category">{product.category}</p>
                <h2>{product.title}</h2>
                <p className="price">${product.price.toFixed(2)}</p>
                <p className="description">{product.description}</p>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}

export default App
