import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import BlogCarousel from '../components/BlogCarousel'
import FAQ from '../components/FAQ'
import { products } from '../data/products'
import { collections } from '../data/collections'

const Home = () => {
  // Get best sellers (first 4 products for display)
  const bestSellers = products.slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-400 text-white py-20 md:py-32" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
              Fresh Flowers for Every Occasion
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Beautiful arrangements delivered to your door. Making every moment special with nature's finest blooms.
            </p>
            <Link to="/collection" className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Best Sellers */}
      <section className="py-16 bg-white" aria-labelledby="best-sellers-heading">
        <div className="container mx-auto px-4">
          <h2 id="best-sellers-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Shop Best Sellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/collection" className="btn-primary inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Shop By Occasion */}
      <section className="py-16 bg-gray-50" aria-labelledby="occasion-heading">
        <div className="container mx-auto px-4">
          <h2 id="occasion-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Shop By Occasion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collection?occasion=${collection.slug}`}
                className="group relative aspect-square bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-green-600">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzM4YTk2MyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q29sbGVjdGlvbjwvdGV4dD48L3N2Zz4='
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-bold text-lg md:text-xl text-center px-4 group-hover:scale-110 transition-transform">
                      {collection.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Highlights Carousel */}
      <BlogCarousel />

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}

export default Home

