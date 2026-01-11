import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../state/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const defaultVariant = product.variants.find(v => v.id === product.defaultVariant) || product.variants[0]
  const [isAdding, setIsAdding] = useState(false)

  const handleQuickAddWithFeedback = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsAdding(true)
    addToCart(product, defaultVariant, 1)
    setTimeout(() => setIsAdding(false), 600)
  }

  return (
    <div className="group relative bg-white">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2U1ZTdlYiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9kdWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg=='
            }}
          />
          {product.originalPrice && (
            <span className="absolute top-3 left-3 bg-black text-white text-xs font-medium px-3 py-1 rounded-full">
              Sale
            </span>
          )}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">{product.title}</h3>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-xl font-semibold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
      <div>
        <button
          onClick={handleQuickAddWithFeedback}
          disabled={isAdding}
          className={`w-full text-white py-3 rounded-full font-medium transition-all duration-200 ${
            isAdding
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-black hover:bg-gray-800'
          }`}
          aria-label={`Add ${product.title} to cart`}
        >
          {isAdding ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Added!
            </span>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  )
}

export default ProductCard

