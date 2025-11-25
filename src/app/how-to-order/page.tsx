import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Order | Mac USA Rags - Container & Small Orders',
  description: 'Learn how to order thrift clothing from Mac USA Rags. Full container orders for Africa exports or small orders within the US. Step-by-step ordering guide.',
}

export default function HowToOrderPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
            alt="Shipping containers for clothing export"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            How to Order
          </h1>
          <p className="text-xl md:text-2xl text-secondary-200 max-w-3xl mx-auto">
            Simple steps to get quality secondhand clothing delivered to your location
          </p>
        </div>
      </section>

      {/* Step 1: Choose Quality Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white text-2xl font-bold rounded-full mb-4">
              1
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
              Choose Your Quality Category
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Select the quality grade that best fits your market and budget requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Premium */}
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-amber-700 mb-3">Premium</h3>
              <p className="text-secondary-600 mb-4">
                Highest quality, brand-name items. Perfect for boutique resale with maximum profit margins.
              </p>
              <ul className="text-left space-y-2 text-sm text-secondary-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Like-new condition
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Designer brands
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No defects
                </li>
              </ul>
            </div>

            {/* Grade 1 */}
            <div className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-700 mb-3">Grade 1</h3>
              <p className="text-secondary-600 mb-4">
                Excellent quality with minor wear. Great balance of quality and value for street markets.
              </p>
              <ul className="text-left space-y-2 text-sm text-secondary-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Good condition
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Minor wear acceptable
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Great value
                </li>
              </ul>
            </div>

            {/* Mixed Rags */}
            <div className="bg-secondary-50 border-2 border-secondary-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-700 mb-3">Mixed Rags</h3>
              <p className="text-secondary-600 mb-4">
                Unsorted bulk items at lowest cost. Ideal for large-scale operations seeking volume.
              </p>
              <ul className="text-left space-y-2 text-sm text-secondary-600">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-secondary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bulk quantities
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-secondary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Lowest price
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-secondary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Various conditions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Choose Order Size */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white text-2xl font-bold rounded-full mb-4">
              2
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
              Choose Your Order Size
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We offer two ordering pathways to fit different business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Full Container Orders */}
            <div id="containers" className="bg-white rounded-2xl shadow-lg overflow-hidden scroll-mt-32">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
                  alt="Shipping containers for full container orders"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    International Export
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">Full Container Orders</h3>
                  <p className="text-primary-100">20ft or 40ft containers to Africa</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-secondary-600 mb-6">
                  Best for international buyers looking to import large quantities. We handle all export documentation and shipping logistics.
                </p>
                
                {/* Steps */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Select Product Mix</h4>
                      <p className="text-sm text-secondary-600">Choose your product categories and quality grades</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Transportation Fee Calculated</h4>
                      <p className="text-sm text-secondary-600">We calculate land transport to port</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Sea Freight Calculated</h4>
                      <p className="text-sm text-secondary-600">Shipping costs to your destination port</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Total CIF or FOB Estimate</h4>
                      <p className="text-sm text-secondary-600">Complete pricing with all costs included</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Booking Confirmed</h4>
                      <p className="text-sm text-secondary-600">Secure your order with deposit</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                      6
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Documentation Prepared</h4>
                      <p className="text-sm text-secondary-600">All export documents handled</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                      7
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Shipment to Africa</h4>
                      <p className="text-sm text-secondary-600">Container shipped to your destination</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary-50 rounded-xl">
                  <h4 className="font-semibold text-primary-800 mb-2">Container Options:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded-lg">
                      <span className="font-bold text-primary-600">20ft Container</span>
                      <p className="text-secondary-600">~10,000 lbs capacity</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <span className="font-bold text-primary-600">40ft Container</span>
                      <p className="text-secondary-600">~22,000 lbs capacity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Orders */}
            <div id="small-orders" className="bg-white rounded-2xl shadow-lg overflow-hidden scroll-mt-32">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Small bundled clothing orders"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    US Domestic
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">Small Orders</h3>
                  <p className="text-amber-100">Delivery anywhere in the USA</p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-secondary-600 mb-6">
                  Perfect for smaller businesses, resellers, or those wanting to test products before committing to larger orders.
                </p>
                
                {/* Steps */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Choose Items</h4>
                      <p className="text-sm text-secondary-600">Select products from our inventory</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Pay Invoice</h4>
                      <p className="text-sm text-secondary-600">Receive and pay detailed invoice</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Shipping via UPS/LTL</h4>
                      <p className="text-sm text-secondary-600">Fast domestic shipping options</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-800">Delivery Anywhere in US</h4>
                      <p className="text-sm text-secondary-600">Receive your order at your door</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-amber-50 rounded-xl">
                  <h4 className="font-semibold text-amber-800 mb-2">Benefits:</h4>
                  <ul className="space-y-2 text-sm text-secondary-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      No minimum order required
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Fast shipping within 3-7 days
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Test before large orders
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Perfect for resellers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
              Payment & Documentation
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              We make the ordering process simple and transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Flexible Payment</h3>
              <p className="text-secondary-600">
                Wire transfer, bank deposit, or other arrangements. Deposits secure your order, balance before shipping.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Full Documentation</h3>
              <p className="text-secondary-600">
                Bill of lading, packing list, commercial invoice, and all required export documents provided.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">Direct Communication</h3>
              <p className="text-secondary-600">
                Reach us anytime via phone or WhatsApp. We respond quickly to all inquiries and keep you updated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Place Your Order?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200"
            >
              Get Quote
            </Link>
          
          </div>
        </div>
      </section>
    </>
  )
}
