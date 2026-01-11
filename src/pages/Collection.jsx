import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, getProductsByOccasion, searchProducts } from '../data/products'
import { getCollectionBySlug } from '../data/collections'

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [priceFilter, setPriceFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')
  const occasionParam = searchParams.get('occasion')
  const collection = occasionParam ? getCollectionBySlug(occasionParam) : null

  // Get filtered products
  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by occasion/collection
    if (occasionParam) {
      filtered = getProductsByOccasion(occasionParam)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery.trim()).filter(p => 
        occasionParam ? getProductsByOccasion(occasionParam).some(op => op.id === p.id) : true
      )
    }

    // Filter by price
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number)
      filtered = filtered.filter(product => {
        if (max) {
          return product.price >= min && product.price <= max
        } else {
          return product.price >= min
        }
      })
    }

    return filtered
  }, [occasionParam, searchQuery, priceFilter])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setSearchParams({ ...(occasionParam && { occasion: occasionParam }), search: searchQuery.trim() })
    } else {
      const newParams = new URLSearchParams(searchParams)
      newParams.delete('search')
      setSearchParams(newParams)
    }
  }

  const handleOccasionChange = (occasion) => {
    if (occasion) {
      setSearchParams({ occasion })
    } else {
      setSearchParams({})
    }
    setSearchQuery('')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/collection" className="hover:text-green-600 transition-colors">Shop</Link>
            </li>
            {collection && (
              <>
                <li>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-900 font-medium">{collection.name}</li>
              </>
            )}
          </ol>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          {collection ? collection.name : 'Shop All Flowers'}
        </h1>
        {collection && (
          <p className="text-gray-600 mb-8 max-w-2xl">{collection.description}</p>
        )}

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                  aria-label="Submit search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Price Filter */}
            <div>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                aria-label="Filter by price"
              >
                <option value="all">All Prices</option>
                <option value="0-30">Under $30</option>
                <option value="30-50">$30 - $50</option>
                <option value="50-75">$50 - $75</option>
                <option value="75-">$75+</option>
              </select>
            </div>
          </div>

          {/* Occasion Filter */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">Occasion:</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleOccasionChange(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform ${
                  !occasionParam
                    ? 'bg-green-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105 active:scale-95'
                }`}
              >
                All
              </button>
              <button
                onClick={() => handleOccasionChange('anniversary')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform ${
                  occasionParam === 'anniversary'
                    ? 'bg-green-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105 active:scale-95'
                }`}
              >
                Anniversary
              </button>
              <button
                onClick={() => handleOccasionChange('birthday')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform ${
                  occasionParam === 'birthday'
                    ? 'bg-green-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105 active:scale-95'
                }`}
              >
                Birthday
              </button>
              <button
                onClick={() => handleOccasionChange('wedding')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform ${
                  occasionParam === 'wedding'
                    ? 'bg-green-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105 active:scale-95'
                }`}
              >
                Wedding
              </button>
              <button
                onClick={() => handleOccasionChange('gift')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform ${
                  occasionParam === 'gift'
                    ? 'bg-green-600 text-white shadow-md scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105 active:scale-95'
                }`}
              >
                Gift
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <svg
              className="w-24 h-24 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setPriceFilter('all')
                setSearchParams({})
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Collection

