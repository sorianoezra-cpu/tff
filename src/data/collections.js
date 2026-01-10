// Mock collection/occasion data
export const collections = [
  {
    id: 'anniversary',
    name: 'Anniversary',
    slug: 'anniversary',
    description: 'Romantic arrangements perfect for celebrating love',
    image: '/images/placeholder-anniversary.jpg',
  },
  {
    id: 'birthday',
    name: 'Birthday',
    slug: 'birthday',
    description: 'Bright and cheerful flowers for special birthdays',
    image: '/images/placeholder-birthday.jpg',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    slug: 'wedding',
    description: 'Elegant floral arrangements for your special day',
    image: '/images/placeholder-wedding.jpg',
  },
  {
    id: 'spring',
    name: 'Spring Collection',
    slug: 'spring',
    description: 'Fresh blooms to welcome the spring season',
    image: '/images/placeholder-spring.jpg',
  },
  {
    id: 'gift',
    name: 'Perfect Gifts',
    slug: 'gift',
    description: 'Thoughtful floral gifts for any recipient',
    image: '/images/placeholder-gift.jpg',
  },
  {
    id: 'relaxation',
    name: 'Wellness & Relaxation',
    slug: 'relaxation',
    description: 'Calming arrangements to soothe and relax',
    image: '/images/placeholder-relaxation.jpg',
  },
]

export const getCollectionBySlug = (slug) => {
  return collections.find(collection => collection.slug === slug)
}

