import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight text-gray-900">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Fresh flowers, delivered with love. Making every moment bloom.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                We started with a simple belief: everyone deserves to experience the joy and beauty that fresh flowers bring. What began as a small passion project has grown into a curated collection of the finest blooms, carefully selected and arranged by our team of floral artists.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Each arrangement is crafted with attention to detail, ensuring that every petal, stem, and leaf is perfectly placed. We work directly with local growers to source the freshest flowers, supporting sustainable practices while bringing you nature's most beautiful creations.
              </p>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=800&fit=crop&auto=format&q=90"
                alt="Floral arrangement process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=800&fit=crop&auto=format&q=90"
                alt="Fresh flowers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                To make beautiful, fresh flowers accessible to everyone, delivered right to your door with care and precision. We believe flowers have the power to transform spaces, uplift spirits, and create lasting memories.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Whether you're celebrating a special occasion, expressing your feelings, or simply adding beauty to your day, we're here to help you find the perfect arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-semibold text-center mb-16 tracking-tight text-gray-900">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Freshness</h3>
              <p className="text-gray-600 leading-relaxed">
                Every flower is handpicked at peak freshness and delivered with care to ensure maximum longevity and beauty.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We source only the finest blooms from trusted growers, ensuring each arrangement meets our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Service</h3>
              <p className="text-gray-600 leading-relaxed">
                From selection to delivery, we're committed to providing exceptional service and creating moments that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-4xl font-semibold mb-6 tracking-tight text-gray-900">
            Ready to Bloom?
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light">
            Explore our collection and find the perfect arrangement for your special moment.
          </p>
          <Link to="/collection" className="btn-primary inline-block">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

