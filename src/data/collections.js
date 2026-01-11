// Mock collection/occasion data
export const collections = [
  {
    id: 'anniversary',
    name: 'Anniversary',
    slug: 'anniversary',
    description: 'Romantic arrangements perfect for celebrating love',
    image: 'https://images.unsplash.com/photo-1518621012428-3bd3c384157e?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'birthday',
    name: 'Birthday',
    slug: 'birthday',
    description: 'Bright and cheerful flowers for special birthdays',
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    slug: 'wedding',
    description: 'Elegant floral arrangements for your special day',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'spring',
    name: 'Spring Collection',
    slug: 'spring',
    description: 'Fresh blooms to welcome the spring season',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'gift',
    name: 'Perfect Gifts',
    slug: 'gift',
    description: 'Thoughtful floral gifts for any recipient',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop&q=80',
  },
  {
    id: 'relaxation',
    name: 'Wellness & Relaxation',
    slug: 'relaxation',
    description: 'Calming arrangements to soothe and relax',
    image: 'https://images.unsplash.com/photo-1611834905996-b30d97dcf651?w=600&h=600&fit=crop&q=80',
  },
]

export const getCollectionBySlug = (slug) => {
  return collections.find(collection => collection.slug === slug)
}

