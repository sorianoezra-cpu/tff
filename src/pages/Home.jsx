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
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Apple Style */}
      <section className="relative bg-white py-24 md:py-40" aria-labelledby="hero-heading">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center">
            <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tight text-gray-900">
              Fresh Flowers<br />for Every Occasion
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto font-light">
              Beautiful arrangements delivered to your door. Making every moment special with nature's finest blooms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collection" className="btn-primary inline-block">
                Shop Now
              </Link>
              <Link to="/collection" className="btn-secondary inline-block">
                Browse Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Best Sellers - Apple Style */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="best-sellers-heading">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 id="best-sellers-heading" className="text-4xl md:text-5xl font-semibold text-center mb-4 text-gray-900 tracking-tight">
            Shop Best Sellers
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Our most loved arrangements</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/collection" className="text-gray-900 hover:text-gray-600 text-lg font-medium transition-colors">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Shop By Occasion - Apple Style */}
      <section className="py-24 md:py-32 bg-gray-50" aria-labelledby="occasion-heading">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 id="occasion-heading" className="text-4xl md:text-5xl font-semibold text-center mb-4 text-gray-900 tracking-tight">
            Shop By Occasion
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Find the perfect arrangement</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={`/collection?occasion=${collection.slug}`}
                className="group relative aspect-square bg-white rounded-2xl overflow-hidden transition-all duration-300"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzM4YTk2MyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q29sbGVjdGlvbjwvdGV4dD48L3N2Zz4='
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-base text-center drop-shadow-lg">
                    {collection.name}
                  </h3>
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

