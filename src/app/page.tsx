import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QualityCategoryCard from '@/components/QualityCategoryCard'

export const metadata: Metadata = {
  title: 'Mac USA Rags | Premium Thrift Clothing Exports to Africa',
  description: 'Mac USA Rags is a leading US-based thrift clothing export company. We offer Premium, Grade 1, and Mixed Rags quality secondhand clothing exports to Africa and worldwide.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Shipping containers and clothing bales for export"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/70 to-secondary-900/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading leading-tight">
              Premium Thrift Clothing Exports from the USA
            </h1>
            <p className="text-xl md:text-2xl text-secondary-200 mb-8 leading-relaxed">
              Quality secondhand clothing bales shipped worldwide. Trusted by businesses across Africa for over a decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 text-center"
              >
                Browse Products
              </Link>
              <Link
                href="/how-to-order"
                className="bg-white text-secondary-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-100 transition-colors duration-200 text-center"
              >
                How to Order
              </Link>
              <a
                href="https://wa.me/12813017800"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200 text-center flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
                <div className="text-secondary-300 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
                <div className="text-secondary-300 text-sm">Containers Shipped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">30+</div>
                <div className="text-secondary-300 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Categories Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
              Our Quality Categories
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Choose from three quality grades tailored to meet different market needs and price points.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <QualityCategoryCard
              title="Premium"
              description="Highest quality secondhand clothing. Carefully selected, minimal wear, perfect for boutique resale."
              image="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
              features={[
                'Brand-name items',
                'Minimal wear & defects',
                'Ready for retail',
                'Highest profit margins',
              ]}
              href="/products#premium"
              accent="amber"
            />
            <QualityCategoryCard
              title="Grade 1"
              description="Excellent quality clothing with minimal signs of use. Great balance of quality and value."
              image="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80"
              features={[
                'Good condition items',
                'Minor wear acceptable',
                'Popular for markets',
                'Great value proposition',
              ]}
              href="/products#grade1"
              accent="blue"
            />
            <QualityCategoryCard
              title="Mixed Rags"
              description="Unsorted mixed clothing bales. Ideal for large-scale operations and cost-conscious buyers."
              image="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80"
              features={[
                'Bulk quantities',
                'Lowest cost per pound',
                'Various conditions',
                'High volume opportunity',
              ]}
              href="/products#mixed"
              accent="slate"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
              Why Choose Mac USA Rags?
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We are committed to providing the best quality secondhand clothing with exceptional service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Control */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Quality Control</h3>
              <p className="text-secondary-600">
                Every bale is carefully sorted and graded by experienced professionals to ensure consistent quality.
              </p>
            </div>

            {/* Fast Shipping */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Fast Shipping</h3>
              <p className="text-secondary-600">
                Direct shipping to Africa and worldwide. Efficient logistics to get your order delivered quickly.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Transparent Pricing</h3>
              <p className="text-secondary-600">
                Clear, upfront pricing with no hidden fees. FOB and CIF quotes available for your convenience.
              </p>
            </div>

            {/* Expert Support */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Expert Support</h3>
              <p className="text-secondary-600">
                Dedicated team available via phone and WhatsApp to assist with all your questions and orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Shipping Map Section */}
      <section className="py-20 bg-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80"
            alt="Global shipping network"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                Shipping Worldwide from Houston, Texas
              </h2>
              <p className="text-xl text-secondary-300 mb-8">
                Our Houston-based warehouse serves as the hub for all international shipments. We specialize in exports to Africa, with regular container shipments to:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Nigeria', 'Ghana', 'Kenya', 'Tanzania', 'Uganda', 'South Africa', 'Cameroon', 'Benin'].map((country) => (
                  <div key={country} className="flex items-center text-secondary-200">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {country}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
              >
                Request a Quote
              </Link>
            </div>
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
                alt="Global shipping map showing worldwide distribution"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Start Your Order?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Whether you need a full container or a small order, we are here to help. Contact us today for competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200"
            >
              View All Products
            </Link>
            <Link
              href="/how-to-order"
              className="bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-800 transition-colors duration-200"
            >
              Learn How to Order
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
