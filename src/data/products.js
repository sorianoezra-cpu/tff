// Mock product data - Replace with real data later
export const products = [
  {
    id: 1,
    slug: 'classic-rose-bouquet',
    title: 'Classic Rose Bouquet',
    price: 49.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=800&fit=crop&q=80',
    description: 'A beautiful arrangement of fresh red roses perfect for any occasion.',
    category: 'bouquets',
    occasion: 'anniversary',
    inStock: true,
    variants: [
      { id: 1, name: 'Small (6 roses)', price: 34.99, inStock: true },
      { id: 2, name: 'Medium (12 roses)', price: 49.99, inStock: true },
      { id: 3, name: 'Large (24 roses)', price: 79.99, inStock: true },
    ],
    defaultVariant: 2,
  },
  {
    id: 2,
    slug: 'sunflower-delight',
    title: 'Sunflower Delight',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1597848212624-e593beba345c?w=800&h=800&fit=crop&q=80',
    description: 'Bright and cheerful sunflowers that bring sunshine to any room.',
    category: 'bouquets',
    occasion: 'birthday',
    inStock: true,
    variants: [
      { id: 1, name: 'Small (3 sunflowers)', price: 29.99, inStock: true },
      { id: 2, name: 'Medium (6 sunflowers)', price: 39.99, inStock: true },
      { id: 3, name: 'Large (9 sunflowers)', price: 59.99, inStock: true },
    ],
    defaultVariant: 2,
  },
  {
    id: 3,
    slug: 'elegant-lilies',
    title: 'Elegant Lilies Arrangement',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=800&h=800&fit=crop&q=80',
    description: 'Sophisticated white lilies with green accents for a timeless look.',
    category: 'arrangements',
    occasion: 'wedding',
    inStock: true,
    variants: [
      { id: 1, name: 'Standard', price: 54.99, inStock: true },
      { id: 2, name: 'Deluxe (with vase)', price: 74.99, inStock: true },
    ],
    defaultVariant: 1,
  },
  {
    id: 4,
    slug: 'tulip-paradise',
    title: 'Tulip Paradise',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&h=800&fit=crop&q=80',
    description: 'Colorful mix of tulips in various shades for a vibrant display.',
    category: 'bouquets',
    occasion: 'spring',
    inStock: true,
    variants: [
      { id: 1, name: 'Small (10 tulips)', price: 34.99, inStock: true },
      { id: 2, name: 'Medium (20 tulips)', price: 44.99, inStock: true },
      { id: 3, name: 'Large (30 tulips)', price: 64.99, inStock: true },
    ],
    defaultVariant: 2,
  },
  {
    id: 5,
    slug: 'orchid-elegance',
    title: 'Orchid Elegance',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1595433569758-92f86b1011ec?w=800&h=800&fit=crop&q=80',
    description: 'Exotic purple orchids in a decorative pot for lasting beauty.',
    category: 'plants',
    occasion: 'gift',
    inStock: true,
    variants: [
      { id: 1, name: 'Single plant', price: 64.99, inStock: true },
      { id: 2, name: 'Double plant arrangement', price: 119.99, inStock: true },
    ],
    defaultVariant: 1,
  },
  {
    id: 6,
    slug: 'lavender-dreams',
    title: 'Lavender Dreams',
    price: 42.99,
    image: 'https://images.unsplash.com/photo-1611834905996-b30d97dcf651?w=800&h=800&fit=crop&q=80',
    description: 'Fragrant lavender bouquet that soothes and delights the senses.',
    category: 'bouquets',
    occasion: 'relaxation',
    inStock: true,
    variants: [
      { id: 1, name: 'Standard', price: 42.99, inStock: true },
      { id: 2, name: 'Large bundle', price: 69.99, inStock: true },
    ],
    defaultVariant: 1,
  },
  {
    id: 7,
    slug: 'mixed-seasonal',
    title: 'Mixed Seasonal Arrangement',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=800&fit=crop&q=80',
    description: 'A delightful mix of seasonal flowers that changes throughout the year.',
    category: 'arrangements',
    occasion: 'any',
    inStock: true,
    variants: [
      { id: 1, name: 'Small', price: 39.99, inStock: true },
      { id: 2, name: 'Medium', price: 49.99, inStock: true },
      { id: 3, name: 'Large', price: 69.99, inStock: true },
    ],
    defaultVariant: 2,
  },
  {
    id: 8,
    slug: 'carnations-bright',
    title: 'Bright Carnations',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1598625243502-e0fac1f7fafe?w=800&h=800&fit=crop&q=80',
    description: 'Vibrant multi-colored carnations that last long and stay fresh.',
    category: 'bouquets',
    occasion: 'birthday',
    inStock: true,
    variants: [
      { id: 1, name: 'Standard (12 stems)', price: 34.99, inStock: true },
      { id: 2, name: 'Large (24 stems)', price: 59.99, inStock: true },
    ],
    defaultVariant: 1,
  },
]

export const getProductBySlug = (slug) => {
  return products.find(product => product.slug === slug)
}

export const getProductsByOccasion = (occasion) => {
  if (!occasion || occasion === 'any') return products
  return products.filter(product => product.occasion === occasion)
}

export const getProductsByCategory = (category) => {
  if (!category) return products
  return products.filter(product => product.category === category)
}

export const searchProducts = (query) => {
  if (!query) return products
  const lowerQuery = query.toLowerCase()
  return products.filter(product => 
    product.title.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  )
}

