import { useParams, Link, Navigate } from 'react-router-dom'
import { getPostBySlug } from '../data/posts'

const BlogDetail = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2NzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjc1IiBmaWxsPSIjZTVlN2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzljYTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJsb2cgSW1hZ2U8L3RleHQ+PC9zdmc+'
          }}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li>
                <Link to="/" className="hover:text-gray-900 transition-colors">Blog</Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-gray-900 font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm">
              <span className="px-4 py-1.5 bg-black text-white rounded-full font-medium">
                {post.category}
              </span>
              <span className="text-gray-600">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-gray-900">
              {post.title}
            </h1>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
              <p>
                {post.excerpt}
              </p>
              <p>
                Flowers have a remarkable ability to transform any space and lift our spirits. Whether you're decorating your home, celebrating a special occasion, or simply wanting to add a touch of nature's beauty to your day, understanding how to care for and arrange flowers can make all the difference.
              </p>
              <p>
                In this comprehensive guide, we'll explore everything you need to know about selecting, caring for, and arranging flowers to create stunning displays that last. From choosing the right blooms to mastering basic arrangement techniques, you'll learn the secrets that professional florists use every day.
              </p>
              <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">
                Getting Started
              </h2>
              <p>
                The key to beautiful flower arrangements starts with quality flowers. Look for blooms with firm petals, vibrant colors, and stems that are strong and healthy. When selecting flowers, consider the occasion, the space where they'll be displayed, and how long you want them to last.
              </p>
              <p>
                Once you have your flowers, proper care is essential. Trim the stems at an angle, remove any leaves that will be below the water line, and place them in clean water with flower food. Change the water every few days and trim the stems again to ensure maximum freshness.
              </p>
              <h2 className="text-2xl font-semibold mt-12 mb-6 text-gray-900">
                Arrangement Tips
              </h2>
              <p>
                Creating a beautiful arrangement is both an art and a science. Start with a focal flower, then add complementary blooms, filler flowers, and greenery. Consider the color palette, height variation, and overall shape you want to achieve. Don't be afraid to experiment and let your creativity shine!
              </p>
              <p>
                Remember, the best arrangements often come from trial and error. Start simple, learn the basics, and gradually try more complex designs as you gain confidence. With practice and patience, you'll be creating professional-quality arrangements in no time.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-gray-100 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Ready to Create Your Own Arrangement?
            </h3>
            <p className="text-gray-600 mb-8">
              Browse our collection of fresh flowers and start creating beautiful arrangements today.
            </p>
            <Link to="/collection" className="btn-primary inline-block">
              Shop Fresh Flowers
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogDetail

