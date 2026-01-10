import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'How long will my flowers last?',
    answer: 'Most of our fresh cut flowers will last 5-7 days when properly cared for. We include care instructions with every order to help you get the most out of your arrangement.',
  },
  {
    id: 2,
    question: 'Do you offer same-day delivery?',
    answer: 'Yes! We offer same-day delivery for orders placed before 2 PM on weekdays and 12 PM on weekends. Delivery is available within a 15-mile radius of our shop.',
  },
  {
    id: 3,
    question: 'Can I customize my arrangement?',
    answer: 'Absolutely! You can add special requests in the order notes, and our florists will do their best to accommodate. For major customizations, please call us directly.',
  },
  {
    id: 4,
    question: 'What is your return policy?',
    answer: 'We guarantee our flowers for 7 days. If you\'re not satisfied with your order, please contact us within 48 hours and we\'ll make it right with a replacement or refund.',
  },
  {
    id: 5,
    question: 'Do you offer subscription services?',
    answer: 'Yes! We have weekly, bi-weekly, and monthly subscription options. Subscribers receive a 15% discount and free delivery. You can customize or skip any delivery.',
  },
]

const FAQ = () => {
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-gray-500 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openId === faq.id && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-6 py-4 text-gray-600 border-t border-gray-200"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

