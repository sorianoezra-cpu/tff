// Mock blog post data
export const blogPosts = [
  {
    id: 1,
    slug: 'how-to-care-for-roses',
    title: 'How to Care for Your Roses',
    excerpt: 'Learn the essential tips for keeping your roses fresh and vibrant for as long as possible.',
    image: 'https://images.unsplash.com/photo-1518621012428-3bd3c384157e?w=1200&h=675&fit=crop&q=80',
    date: '2024-01-15',
    category: 'Care Tips',
  },
  {
    id: 2,
    slug: 'seasonal-flower-guide',
    title: 'Seasonal Flower Guide: What to Plant This Spring',
    excerpt: 'Discover the best flowers to plant in spring and create a beautiful garden.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1200&h=675&fit=crop&q=80',
    date: '2024-01-10',
    category: 'Gardening',
  },
  {
    id: 3,
    slug: 'arranging-flowers-like-pro',
    title: 'Arranging Flowers Like a Professional',
    excerpt: 'Simple techniques to create stunning floral arrangements at home.',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&h=675&fit=crop&q=80',
    date: '2024-01-05',
    category: 'DIY',
  },
  {
    id: 4,
    slug: 'best-flowers-for-weddings',
    title: 'Best Flowers for Summer Weddings',
    excerpt: 'Our top picks for wedding flowers that stay fresh and beautiful all day long.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=675&fit=crop&q=80',
    date: '2023-12-28',
    category: 'Weddings',
  },
]

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

export const getFeaturedPosts = (limit = 3) => {
  return blogPosts.slice(0, limit)
}

