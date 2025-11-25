'use client'

import { useState } from 'react'

// Product categories with all items
const productCategories = [
  {
    category: 'Children\'s Clothing',
    products: [
      'CHILDREN JACKETS (SPRING, SUMMER)',
      'CHILDREN JACKETS (WINTER)',
      'CHILDREN JACKETS (WINTER II)',
      'CHILDREN PANTS (JEANS)',
      'CHILDREN POLYESTER MIX',
      'CHILDREN RUMMAGE 0–3',
      'CHILDREN RUMMAGE 4–14 (L/S)',
      'CHILDREN RUMMAGE 4–14 (SPRING, SUMMER)',
      'CHILDREN SKI SUITS',
      'CHILDREN SWEATSHIRTS/SWEATPANTS MIX',
      'CHILDREN WINTER MIX 4–14',
    ]
  },
  {
    category: 'Ladies\' Clothing',
    products: [
      'LADIES BLAZERS – JACKETS',
      'LADIES BLOUSES (SIZE PLUS)',
      'LADIES BLOUSES COTTON – PLUS SIZE',
      'LADIES BLOUSES L/S',
      'LADIES BLOUSES POLY',
      'LADIES BLOUSES KNIT L/S',
      'LADIES DRESSES (PARTY)',
      'LADIES DRESSES (SMALL SIZES)',
      'LADIES DRESSES, SKIRTS',
      'LADIES DRESSES, SKIRTS – KNIT',
      'LADIES LINGERIE',
      'LADIES MIX, PLUS SIZE, PREMIUM',
      'LADIES PANTS CASUAL',
      'LADIES PANTS DRESSY',
      'LADIES JEANS',
      'LADIES PANTS PLUS SIZE',
      'LADIES SCARFS (BEACH)',
      'LADIES SHORTS EXTRA',
      'LADIES SWIMSUITS',
      'LADIES TOPS S/S',
      'LADIES TOPS',
      'LADIES TOPS SLEEVELESS',
    ]
  },
  {
    category: 'Men\'s Clothing',
    products: [
      'MENS MIX PLUS SIZE',
      'MENS PANTS CARGO',
      'MENS SHIRTS (FLANNEL)',
      'MENS SHIRTS L/S',
      'MENS QUILTED SHIRTS',
      'MENS SUIT PANTS',
      'MENS SUMMER TOPS PLUS SIZE',
      'MENS T-SHIRTS L/S',
      'MENS UNDERWEAR',
      'MENS PANTS PLUS SIZE',
    ]
  },
  {
    category: 'Outerwear & Jackets',
    products: [
      'COATS, JACKETS',
      'FAUX JACKETS',
      'JACKETS (WINTER)',
      'JACKETS (WINTER) SIZE PLUS',
      'JACKETS (AUTUMN, WINTER II)',
      'JACKETS (SPRING & FALL) SIZE PLUS',
      'JACKETS (SPRING–FALL)',
      'JACKETS (SPRING–FALL II)',
      'OVERCOATS / RAINCOATS',
      'SKI SUITS',
    ]
  },
  {
    category: 'Pants & Bottoms',
    products: [
      'JEANS PANTS (YOUTH)',
      'JOGGING PANTS (POLYESTER)',
      'JOGGING PANTS MIX',
    ]
  },
  {
    category: 'Accessories',
    products: [
      'BASEBALL CAPS',
      'HATS, SCARFS',
      'HATS, SCARFS, GLOVES (ADULT)',
      'HATS, SCARFS, GLOVES (CHILDREN)',
      'SOCKS, PANTYHOSE',
    ]
  },
  {
    category: 'Other Items',
    products: [
      'COSTUMES (HALLOWEEN)',
      'PLUSH PAJAMAS',
      'PONCHO',
      'PULLOVER / VEST',
      'SPORT WEAR',
      'SWEATERS',
      'SWEATSHIRTS (ADULT MIX)',
      'TURTLENECKS',
    ]
  },
]

const qualityTypes = [
  { value: 'premium', label: 'Premium', description: 'Highest quality, brand-name items, like-new condition' },
  { value: 'grade1', label: 'Grade 1', description: 'Excellent quality with minor wear, great value' },
  { value: 'mixed', label: 'Mixed Rags', description: 'Unsorted bulk items at lowest cost' },
]

const orderTypes = [
  { value: '40ft', label: '40ft Container (~22,000 lbs)', description: 'Best for large international orders' },
  { value: '20ft', label: '20ft Container (~10,000 lbs)', description: 'Standard international shipping' },
  { value: 'small', label: 'Small Order (US Domestic)', description: 'Shipped via UPS/LTL within USA' },
]

const destinationRegions = [
  'West Africa (Nigeria, Ghana, Benin, etc.)',
  'East Africa (Kenya, Tanzania, Uganda, etc.)',
  'Southern Africa (South Africa, Zimbabwe, etc.)',
  'Central Africa (Cameroon, Congo, etc.)',
  'North Africa',
  'Other International',
  'United States (Domestic)',
]

interface SelectedProduct {
  id: string
  name: string
  quality: string
  quantity: string
}

const QuoteForm = () => {
  const [step, setStep] = useState(1)
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([])
  const [formData, setFormData] = useState({
    orderType: '',
    destination: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({
    category: '',
    product: '',
    quality: '',
    quantity: '1',
  })

  const handleAddProduct = () => {
    if (currentProduct.product && currentProduct.quality) {
      const newProduct: SelectedProduct = {
        id: Date.now().toString(),
        name: currentProduct.product,
        quality: currentProduct.quality,
        quantity: currentProduct.quantity,
      }
      setSelectedProducts([...selectedProducts, newProduct])
      setCurrentProduct({ category: '', product: '', quality: '', quantity: '1' })
    }
  }

  const handleRemoveProduct = (id: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== id))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const getProductsByCategory = (category: string) => {
    const cat = productCategories.find(c => c.category === category)
    return cat ? cat.products : []
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-secondary-900 mb-4">Quote Request Submitted!</h3>
        <p className="text-secondary-600 mb-6 max-w-md mx-auto">
          Thank you for your interest! Our team will review your request and get back to you within 24 hours with a detailed quote.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setIsSubmitted(false)
              setStep(1)
              setSelectedProducts([])
              setFormData({
                orderType: '',
                destination: '',
                name: '',
                email: '',
                phone: '',
                company: '',
                message: '',
              })
            }}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Request Another Quote
          </button>
          <a
            href="https://wa.me/12813017800"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-secondary-200 text-secondary-500'}`}>
            1
          </div>
          <div className={`w-16 md:w-24 h-1 ${step >= 2 ? 'bg-primary-600' : 'bg-secondary-200'}`}></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-secondary-200 text-secondary-500'}`}>
            2
          </div>
          <div className={`w-16 md:w-24 h-1 ${step >= 3 ? 'bg-primary-600' : 'bg-secondary-200'}`}></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-primary-600 text-white' : 'bg-secondary-200 text-secondary-500'}`}>
            3
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 text-sm text-secondary-600 mb-8">
        <span className={step === 1 ? 'text-primary-600 font-semibold' : ''}>Select Products</span>
        <span className={step === 2 ? 'text-primary-600 font-semibold' : ''}>Order Details</span>
        <span className={step === 3 ? 'text-primary-600 font-semibold' : ''}>Contact Info</span>
      </div>

      {/* Step 1: Select Products */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="bg-secondary-50 rounded-xl p-6">
            <h3 className="font-semibold text-secondary-800 mb-4">Add Products to Your Quote</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* Category Select */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Product Category
                </label>
                <select
                  value={currentProduct.category}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value, product: '' })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a category</option>
                  {productCategories.map(cat => (
                    <option key={cat.category} value={cat.category}>{cat.category}</option>
                  ))}
                </select>
              </div>

              {/* Product Select */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Product
                </label>
                <select
                  value={currentProduct.product}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, product: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  disabled={!currentProduct.category}
                >
                  <option value="">Select a product</option>
                  {getProductsByCategory(currentProduct.category).map(product => (
                    <option key={product} value={product}>{product}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {/* Quality Select */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Quality Grade
                </label>
                <select
                  value={currentProduct.quality}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, quality: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select quality</option>
                  {qualityTypes.map(type => (
                    <option key={type.value} value={type.value}>{type.label} - {type.description}</option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Number of Bales
                </label>
                <input
                  type="number"
                  min="1"
                  value={currentProduct.quantity}
                  onChange={(e) => setCurrentProduct({ ...currentProduct, quantity: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddProduct}
              disabled={!currentProduct.product || !currentProduct.quality}
              className="w-full md:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-secondary-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Product
            </button>
          </div>

          {/* Selected Products List */}
          {selectedProducts.length > 0 && (
            <div className="border border-secondary-200 rounded-xl overflow-hidden">
              <div className="bg-secondary-100 px-6 py-3 font-semibold text-secondary-800">
                Selected Products ({selectedProducts.length})
              </div>
              <div className="divide-y divide-secondary-200">
                {selectedProducts.map((product) => (
                  <div key={product.id} className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-secondary-800">{product.name}</p>
                      <p className="text-sm text-secondary-500">
                        Quality: <span className="capitalize">{product.quality}</span> | Quantity: {product.quantity} bale(s)
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(product.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={selectedProducts.length === 0}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-secondary-300 disabled:cursor-not-allowed"
            >
              Continue to Order Details
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Order Details */}
      {step === 2 && (
        <div className="space-y-6">
          {/* Order Type */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-3">
              Order Type *
            </label>
            <div className="grid md:grid-cols-3 gap-4">
              {orderTypes.map((type) => (
                <label
                  key={type.value}
                  className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    formData.orderType === type.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-secondary-200 hover:border-secondary-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="orderType"
                    value={type.value}
                    checked={formData.orderType === type.value}
                    onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
                    className="sr-only"
                  />
                  <span className="font-semibold text-secondary-800">{type.label}</span>
                  <span className="text-sm text-secondary-500 mt-1">{type.description}</span>
                  {formData.orderType === type.value && (
                    <div className="absolute top-3 right-3">
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Shipping Destination *
            </label>
            <select
              value={formData.destination}
              onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              required
            >
              <option value="">Select destination region</option>
              {destinationRegions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          {/* Order Summary */}
          <div className="bg-secondary-50 rounded-xl p-6">
            <h4 className="font-semibold text-secondary-800 mb-4">Order Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary-600">Products Selected:</span>
                <span className="font-medium">{selectedProducts.length} items</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary-600">Total Bales:</span>
                <span className="font-medium">{selectedProducts.reduce((sum, p) => sum + parseInt(p.quantity), 0)}</span>
              </div>
              {formData.orderType && (
                <div className="flex justify-between">
                  <span className="text-secondary-600">Order Type:</span>
                  <span className="font-medium">{orderTypes.find(t => t.value === formData.orderType)?.label}</span>
                </div>
              )}
              {formData.destination && (
                <div className="flex justify-between">
                  <span className="text-secondary-600">Destination:</span>
                  <span className="font-medium">{formData.destination}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-3 border border-secondary-300 text-secondary-700 rounded-lg font-semibold hover:bg-secondary-50 transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={!formData.orderType || !formData.destination}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-secondary-300 disabled:cursor-not-allowed"
            >
              Continue to Contact Info
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Contact Information */}
      {step === 3 && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">
              Additional Notes
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Any specific requirements, questions, or details about your order..."
            ></textarea>
          </div>

          {/* Final Summary */}
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
            <h4 className="font-semibold text-primary-800 mb-4">Quote Request Summary</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-secondary-600 mb-1">Products:</p>
                <ul className="space-y-1">
                  {selectedProducts.map(p => (
                    <li key={p.id} className="text-secondary-800">
                      • {p.name} ({p.quality}, {p.quantity} bales)
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-secondary-600 mb-1">Order Type:</p>
                <p className="font-medium text-secondary-800 mb-2">
                  {orderTypes.find(t => t.value === formData.orderType)?.label}
                </p>
                <p className="text-secondary-600 mb-1">Destination:</p>
                <p className="font-medium text-secondary-800">{formData.destination}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-6 py-3 border border-secondary-300 text-secondary-700 rounded-lg font-semibold hover:bg-secondary-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-secondary-300 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submit Quote Request
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default QuoteForm
