'use client'

import { useState } from 'react'

// Product list with codes
const productList = [
  { code: 'D6F', name: 'Hats Summer Mix' },
  { code: 'SR2', name: 'Ladies blouses polyester rayon' },
  { code: 'BE0', name: 'Ladies blouses cotton rayon' },
  { code: '1AD', name: 'Ladies pants beach' },
  { code: '396', name: 'Ladies pants capri' },
  { code: 'J41', name: 'Ladies pants casual' },
  { code: 'M41', name: 'Ladies pants sport cargo' },
  { code: '8E5', name: 'Mens pants cotton' },
  { code: '4FB', name: 'Mens polo shirts S S' },
  { code: '504', name: 'Mens shirts flannel all sizes' },
  { code: '38E', name: 'Mens suit pants' },
  { code: '439', name: 'Mens T shirts' },
  { code: '26E', name: 'Pillows' },
  { code: '253', name: 'Scarves' },
  { code: '79C', name: 'Socks' },
  { code: '9A2', name: 'Towels II' },
  { code: '8C4', name: 'Diapers adults assorted sizes' },
  { code: '6BA', name: 'Shoes fall winter' },
  { code: '157', name: 'Bedding blankets' },
  { code: '903', name: 'Bedding comforters quilts' },
  { code: '881', name: 'Ladies plus size dresses skirts shorts' },
  { code: 'AD4', name: 'Ladies swim suits' },
  { code: 'E45', name: 'Shoes pumps heels' },
  { code: '135', name: 'Shoes slippers' },
]

const qualityGrades = [
  { value: 'premium', label: 'Premium' },
  { value: 'grade1', label: 'Grade 1' },
  { value: 'mixed', label: 'Mixed Rags' },
]

interface ProductSelection {
  code: string
  name: string
  quantity: number
  grade: string
}

interface CustomerInfo {
  fullName: string
  country: string
  portNumber: string
  phone: string
  email: string
  companyName: string
  arrangeShippingMyself: boolean
  shippingAddress: string
}

const QuoteForm = () => {
  const [step, setStep] = useState(1)
  const [productSelections, setProductSelections] = useState<ProductSelection[]>(
    productList.map(p => ({ code: p.code, name: p.name, quantity: 0, grade: 'premium' }))
  )
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: '',
    country: '',
    portNumber: '',
    phone: '',
    email: '',
    companyName: '',
    arrangeShippingMyself: false,
    shippingAddress: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleQuantityChange = (code: string, quantity: number) => {
    setProductSelections(prev =>
      prev.map(p => (p.code === code ? { ...p, quantity: Math.max(0, quantity) } : p))
    )
  }

  const handleGradeChange = (code: string, grade: string) => {
    setProductSelections(prev =>
      prev.map(p => (p.code === code ? { ...p, grade } : p))
    )
  }

  const getSelectedProducts = () => {
    return productSelections.filter(p => p.quantity > 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
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
              setProductSelections(
                productList.map(p => ({ code: p.code, name: p.name, quantity: 0, grade: 'premium' }))
              )
              setCustomerInfo({
                fullName: '',
                country: '',
                portNumber: '',
                phone: '',
                email: '',
                companyName: '',
                arrangeShippingMyself: false,
                shippingAddress: '',
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

  const selectedProductsCount = getSelectedProducts().length

  return (
    <form onSubmit={handleSubmit}>
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-secondary-200 text-secondary-500'}`}>
            1
          </div>
          <div className={`w-24 md:w-32 h-1 ${step >= 2 ? 'bg-primary-600' : 'bg-secondary-200'}`}></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-secondary-200 text-secondary-500'}`}>
            2
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 text-sm text-secondary-600 mb-8">
        <span className={step === 1 ? 'text-primary-600 font-semibold' : ''}>Select Products</span>
        <span className={step === 2 ? 'text-primary-600 font-semibold' : ''}>Customer Info</span>
      </div>

      {/* Step 1: Select Products */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="bg-secondary-50 rounded-xl p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-secondary-800">Select Products & Quantities</h3>
              <span className="text-sm text-secondary-600">
                {selectedProductsCount} product{selectedProductsCount !== 1 ? 's' : ''} selected
              </span>
            </div>
            
            {/* Product Grid Header - Desktop */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 py-3 px-4 bg-secondary-100 rounded-lg mb-2 text-sm font-medium text-secondary-700">
              <div className="col-span-1">Code</div>
              <div className="col-span-5">Product Name</div>
              <div className="col-span-3">Quantity</div>
              <div className="col-span-3">Quality Grade</div>
            </div>

            {/* Product List - Scrollable */}
            <div className="max-h-[500px] overflow-y-auto space-y-2 pr-2">
              {productSelections.map((product) => (
                <div
                  key={product.code}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 p-4 rounded-lg border transition-colors ${
                    product.quantity > 0
                      ? 'border-primary-300 bg-primary-50'
                      : 'border-secondary-200 bg-white hover:border-secondary-300'
                  }`}
                >
                  {/* Code - Mobile shows inline */}
                  <div className="md:col-span-1 flex items-center">
                    <span className="md:hidden text-xs font-medium text-secondary-500 mr-2">Code:</span>
                    <span className="text-sm font-mono text-secondary-600">{product.code}</span>
                  </div>

                  {/* Product Name */}
                  <div className="md:col-span-5 flex items-center">
                    <span className="font-medium text-secondary-800">{product.name}</span>
                  </div>

                  {/* Quantity Input */}
                  <div className="md:col-span-3 flex items-center gap-2">
                    <span className="md:hidden text-sm text-secondary-500">Qty:</span>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(product.code, product.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-secondary-200 hover:bg-secondary-300 rounded-l-lg transition-colors"
                      >
                        <svg className="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <input
                        type="number"
                        min="0"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.code, parseInt(e.target.value) || 0)}
                        className="w-16 h-8 text-center border-y border-secondary-200 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                      <button
                        type="button"
                        onClick={() => handleQuantityChange(product.code, product.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-secondary-200 hover:bg-secondary-300 rounded-r-lg transition-colors"
                      >
                        <svg className="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Quality Grade Dropdown */}
                  <div className="md:col-span-3 flex items-center gap-2">
                    <span className="md:hidden text-sm text-secondary-500">Grade:</span>
                    <select
                      value={product.grade}
                      onChange={(e) => handleGradeChange(product.code, e.target.value)}
                      className="flex-1 px-3 py-1.5 text-sm border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
                    >
                      {qualityGrades.map((grade) => (
                        <option key={grade.value} value={grade.value}>
                          {grade.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Summary */}
          {selectedProductsCount > 0 && (
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-4">
              <h4 className="font-semibold text-primary-800 mb-3">Selected Products Summary</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                {getSelectedProducts().map((p) => (
                  <div key={p.code} className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                    <span className="text-secondary-800">{p.name}</span>
                    <span className="text-primary-600 font-medium">
                      {p.quantity} × {qualityGrades.find(g => g.value === p.grade)?.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={selectedProductsCount === 0}
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-secondary-300 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Continue
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Customer Information */}
      {step === 2 && (
        <div className="space-y-6">
          <div className="bg-secondary-50 rounded-xl p-6">
            <h3 className="font-semibold text-secondary-800 mb-6">Customer Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={customerInfo.fullName}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  value={customerInfo.country}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, country: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your Country"
                  required
                />
              </div>

              {/* Port Number */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Port Number *
                </label>
                <input
                  type="text"
                  value={customerInfo.portNumber}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, portNumber: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Destination Port Number"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={customerInfo.companyName}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, companyName: e.target.value })}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your Company (Optional)"
                />
              </div>
            </div>

            {/* Shipping Checkbox */}
            <div className="mt-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customerInfo.arrangeShippingMyself}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, arrangeShippingMyself: e.target.checked })}
                  className="w-5 h-5 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                />
                <span className="text-secondary-700 font-medium">I will arrange shipping myself</span>
              </label>
            </div>

            {/* Shipping Address - Show only if checkbox is unchecked */}
            {!customerInfo.arrangeShippingMyself && (
              <div className="mt-6">
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Shipping Address *
                </label>
                <textarea
                  value={customerInfo.shippingAddress}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, shippingAddress: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your full shipping address"
                  required={!customerInfo.arrangeShippingMyself}
                />
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
            <h4 className="font-semibold text-primary-800 mb-4">Quote Request Summary</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-secondary-600 mb-2">Selected Products:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {getSelectedProducts().map((p) => (
                    <div key={p.code} className="flex items-center justify-between bg-white rounded-lg px-3 py-2">
                      <span className="text-secondary-800">{p.name}</span>
                      <span className="text-primary-600 font-medium">
                        {p.quantity} × {qualityGrades.find(g => g.value === p.grade)?.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-primary-200">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary-600">Total Products:</span>
                  <span className="font-medium text-secondary-800">{selectedProductsCount} items</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-secondary-600">Total Quantity:</span>
                  <span className="font-medium text-secondary-800">
                    {getSelectedProducts().reduce((sum, p) => sum + p.quantity, 0)} units
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-3 border border-secondary-300 text-secondary-700 rounded-lg font-semibold hover:bg-secondary-50 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <button
              type="submit"
              disabled={
                isSubmitting ||
                !customerInfo.fullName ||
                !customerInfo.country ||
                !customerInfo.portNumber ||
                !customerInfo.phone ||
                !customerInfo.email ||
                (!customerInfo.arrangeShippingMyself && !customerInfo.shippingAddress)
              }
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
