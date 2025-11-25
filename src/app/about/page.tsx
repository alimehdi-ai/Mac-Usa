import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | Mac USA Rags - Premium Thrift Clothing Exports',
  description: 'Learn about Mac USA Rags, a leading US-based thrift clothing export company helping developing countries with affordable quality secondhand clothing.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Mac USA Rags warehouse operations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            About Mac USA Rags
          </h1>
          <p className="text-xl md:text-2xl text-secondary-200 max-w-3xl mx-auto">
            Your trusted partner for quality secondhand clothing exports from Houston, Texas
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-heading">
                Our Story
              </h2>
              <div className="space-y-4 text-secondary-600 text-lg">
                <p>
                  Mac USA Rags was founded with a simple mission: to bridge the gap between surplus quality clothing in the United States and the growing demand for affordable apparel in developing countries.
                </p>
                <p>
                  Based in Houston, Texas, we have grown from a small operation to become one of the leading thrift clothing exporters serving Africa and beyond. Our strategic location near the Port of Houston allows us to efficiently ship containers worldwide.
                </p>
                <p>
                  With over 15 years of experience in the secondhand clothing industry, we have built strong relationships with suppliers, shipping partners, and customers across the globe. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                alt="Mac USA Rags warehouse with clothing bales"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80"
                alt="Helping communities with affordable clothing"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                Our Mission
              </h2>
              <div className="space-y-4 text-primary-100 text-lg">
                <p>
                  At Mac USA Rags, our mission extends beyond commerce. We believe in creating sustainable solutions that benefit communities in developing countries while promoting environmental responsibility through clothing reuse.
                </p>
                <p>
                  By providing affordable, quality secondhand clothing to markets in Africa, we help families access clothing that would otherwise be out of reach. Our exports support local businesses, create jobs, and contribute to the economic development of the communities we serve.
                </p>
                <p>
                  We are committed to ethical business practices, fair pricing, and building long-term partnerships with our customers based on trust and mutual success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Focus */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
              Our Export Focus on Africa
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Africa represents our primary market, where we have established strong distribution networks and lasting partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">West Africa</h3>
              <p className="text-secondary-600">
                Major exports to Nigeria, Ghana, Benin, and Cameroon. Strong demand for all quality grades with established distribution partners.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">East Africa</h3>
              <p className="text-secondary-600">
                Growing presence in Kenya, Tanzania, and Uganda. These markets value high-quality items and have consistent demand year-round.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Southern Africa</h3>
              <p className="text-secondary-600">
                Expanding operations in South Africa and neighboring countries. Focus on premium and Grade 1 products for growing middle-class markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Grading System */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
              Our Quality Grading System
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We maintain strict quality standards to ensure every customer receives exactly what they expect.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Premium */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                  alt="Premium quality clothing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-amber-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                    Premium
                  </div>
                  <h3 className="text-2xl font-bold text-white">Highest Quality</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Brand-name and designer items</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Like-new condition</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">No stains, holes, or defects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Perfect for boutique resale</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Grade 1 */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
                  alt="Grade 1 quality clothing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-primary-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                    Grade 1
                  </div>
                  <h3 className="text-2xl font-bold text-white">Excellent Quality</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Good quality items</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Minor wear acceptable</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Great value proposition</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Popular for street markets</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mixed Rags */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80"
                  alt="Mixed rags clothing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-secondary-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                    Mixed Rags
                  </div>
                  <h3 className="text-2xl font-bold text-white">Bulk Value</h3>
                </div>
              </div>
              <div className="p-6 bg-white">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Unsorted mixed items</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Lowest cost per pound</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Large bulk quantities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-secondary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-600">Ideal for large operations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse & Team */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
              Our Warehouse & Team
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              State-of-the-art facilities and experienced professionals ensuring quality at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
                alt="Mac USA Rags warehouse facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">Modern Warehouse</h3>
                <p className="text-secondary-200 text-sm">Houston, Texas</p>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                alt="Sorting and grading team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">Expert Sorting Team</h3>
                <p className="text-secondary-200 text-sm">Experienced professionals</p>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80"
                alt="Clothing bales ready for shipping"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">Quality Bales</h3>
                <p className="text-secondary-200 text-sm">Ready for export</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Mac USA Rags for their thrift clothing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
