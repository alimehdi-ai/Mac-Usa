import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

export const metadata: Metadata = {
  title: 'Products | Mac USA Rags - Thrift Clothing Categories',
  description: 'Browse our complete range of secondhand clothing products. Premium, Grade 1, and Mixed Rags available in various categories including jackets, pants, shirts, and more.',
}

// Product data with AI-generated image URLs from Unsplash
const products = [
  { name: 'BASEBALL CAPS', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80' },
  { name: 'CHILDREN JACKETS (SPRING, SUMMER)', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80' },
  { name: 'CHILDREN JACKETS (WINTER)', image: 'https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?w=400&q=80' },
  { name: 'CHILDREN JACKETS (WINTER II)', image: 'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=400&q=80' },
  { name: 'CHILDREN PANTS (JEANS)', image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&q=80' },
  { name: 'CHILDREN POLYESTER MIX', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&q=80' },
  { name: 'CHILDREN RUMMAGE 0–3', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80' },
  { name: 'CHILDREN RUMMAGE 4–14 (L/S)', image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&q=80' },
  { name: 'CHILDREN RUMMAGE 4–14 (SPRING, SUMMER)', image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400&q=80' },
  { name: 'CHILDREN SKI SUITS', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80' },
  { name: 'CHILDREN SWEATSHIRTS/SWEATPANTS MIX', image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&q=80' },
  { name: 'CHILDREN WINTER MIX 4–14', image: 'https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?w=400&q=80' },
  { name: 'COATS, JACKETS', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&q=80' },
  { name: 'COSTUMES (HALLOWEEN)', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=400&q=80' },
  { name: 'FAUX JACKETS', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80' },
  { name: 'HATS, SCARFS', image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80' },
  { name: 'HATS, SCARFS, GLOVES (ADULT)', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&q=80' },
  { name: 'HATS, SCARFS, GLOVES (CHILDREN)', image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=400&q=80' },
  { name: 'JACKETS (WINTER)', image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80' },
  { name: 'JACKETS (WINTER) SIZE PLUS', image: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400&q=80' },
  { name: 'JACKETS (AUTUMN, WINTER II)', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80' },
  { name: 'JACKETS (SPRING & FALL) SIZE PLUS', image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=400&q=80' },
  { name: 'JACKETS (SPRING–FALL)', image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=400&q=80' },
  { name: 'JACKETS (SPRING–FALL II)', image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=400&q=80' },
  { name: 'JEANS PANTS (YOUTH)', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80' },
  { name: 'JOGGING PANTS (POLYESTER)', image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&q=80' },
  { name: 'JOGGING PANTS MIX', image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&q=80' },
  { name: 'LADIES BLAZERS – JACKETS', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80' },
  { name: 'LADIES BLOUSES (SIZE PLUS)', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&q=80' },
  { name: 'LADIES BLOUSES COTTON – PLUS SIZE', image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&q=80' },
  { name: 'LADIES BLOUSES L/S', image: 'https://images.unsplash.com/photo-1551048632-24e444b48a3e?w=400&q=80' },
  { name: 'LADIES BLOUSES POLY', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80' },
  { name: 'LADIES BLOUSES KNIT L/S', image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80' },
  { name: 'LADIES DRESSES (PARTY)', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80' },
  { name: 'LADIES DRESSES (SMALL SIZES)', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80' },
  { name: 'LADIES DRESSES, SKIRTS', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&q=80' },
  { name: 'LADIES DRESSES, SKIRTS – KNIT', image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80' },
  { name: 'LADIES LINGERIE', image: 'https://images.unsplash.com/photo-1617331721458-bd3bd3f9c7f8?w=400&q=80' },
  { name: 'LADIES MIX, PLUS SIZE, PREMIUM', image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80' },
  { name: 'LADIES PANTS CASUAL', image: 'https://images.unsplash.com/photo-1551854838-212c50b4c184?w=400&q=80' },
  { name: 'LADIES PANTS DRESSY', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80' },
  { name: 'LADIES JEANS', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80' },
  { name: 'LADIES PANTS PLUS SIZE', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&q=80' },
  { name: 'LADIES SCARFS (BEACH)', image: 'https://images.unsplash.com/photo-1601379327928-bedfaf9da2d0?w=400&q=80' },
  { name: 'LADIES SHORTS EXTRA', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80' },
  { name: 'LADIES SWIMSUITS', image: 'https://images.unsplash.com/photo-1570976447640-ac859083963f?w=400&q=80' },
  { name: 'LADIES TOPS S/S', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80' },
  { name: 'LADIES TOPS', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=400&q=80' },
  { name: 'LADIES TOPS SLEEVELESS', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&q=80' },
  { name: 'MENS MIX PLUS SIZE', image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=400&q=80' },
  { name: 'MENS PANTS CARGO', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80' },
  { name: 'MENS SHIRTS (FLANNEL)', image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400&q=80' },
  { name: 'MENS SHIRTS L/S', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80' },
  { name: 'MENS QUILTED SHIRTS', image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&q=80' },
  { name: 'MENS SUIT PANTS', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80' },
  { name: 'MENS SUMMER TOPS PLUS SIZE', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80' },
  { name: 'MENS T-SHIRTS L/S', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80' },
  { name: 'MENS UNDERWEAR', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&q=80' },
  { name: 'MENS PANTS PLUS SIZE', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80' },
  { name: 'OVERCOATS / RAINCOATS', image: 'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?w=400&q=80' },
  { name: 'PLUSH PAJAMAS', image: 'https://images.unsplash.com/photo-1616627561839-074385245ff6?w=400&q=80' },
  { name: 'PONCHO', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80' },
  { name: 'PULLOVER / VEST', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80' },
  { name: 'SKI SUITS', image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400&q=80' },
  { name: 'SOCKS, PANTYHOSE', image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&q=80' },
  { name: 'SPORT WEAR', image: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=400&q=80' },
  { name: 'SWEATERS', image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&q=80' },
  { name: 'SWEATSHIRTS (ADULT MIX)', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80' },
  { name: 'TURTLENECKS', image: 'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=400&q=80' },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1920&q=80"
            alt="Thrift clothing products"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl text-secondary-200 max-w-3xl mx-auto">
            Browse our extensive range of quality secondhand clothing available in Premium, Grade 1, and Mixed Rags
          </p>
        </div>
      </section>

      {/* Quality Selection Pills */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#premium"
              className="px-6 py-3 bg-amber-100 text-amber-700 rounded-full font-semibold hover:bg-amber-200 transition-colors"
            >
              Premium Quality
            </a>
            <a
              href="#grade1"
              className="px-6 py-3 bg-primary-100 text-primary-700 rounded-full font-semibold hover:bg-primary-200 transition-colors"
            >
              Grade 1
            </a>
            <a
              href="#mixed"
              className="px-6 py-3 bg-secondary-100 text-secondary-700 rounded-full font-semibold hover:bg-secondary-200 transition-colors"
            >
              Mixed Rags
            </a>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section id="premium" className="py-16 bg-amber-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Banner */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80"
              alt="Premium quality thrift clothing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-900/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Highest Quality
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">Premium</h2>
                <p className="text-amber-100 mt-2 max-w-xl mx-auto">
                  Brand-name items, like-new condition, perfect for boutique resale
                </p>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.map((product, index) => (
              <ProductCard
                key={`premium-${index}`}
                name={product.name}
                image={product.image}
                category="premium"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Grade 1 Section */}
      <section id="grade1" className="py-16 bg-primary-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Banner */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&q=80"
              alt="Grade 1 quality thrift clothing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Excellent Quality
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">Grade 1</h2>
                <p className="text-primary-100 mt-2 max-w-xl mx-auto">
                  Good condition items, minor wear acceptable, great value
                </p>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.map((product, index) => (
              <ProductCard
                key={`grade1-${index}`}
                name={product.name}
                image={product.image}
                category="grade1"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mixed Rags Section */}
      <section id="mixed" className="py-16 bg-secondary-100 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Banner */}
          <div className="relative h-64 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80"
              alt="Mixed rags thrift clothing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Bulk Value
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">Mixed Rags</h2>
                <p className="text-secondary-200 mt-2 max-w-xl mx-auto">
                  Unsorted mixed items, lowest cost per pound, bulk quantities
                </p>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {products.map((product, index) => (
              <ProductCard
                key={`mixed-${index}`}
                name={product.name}
                image={product.image}
                category="mixed"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Place an Order?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for pricing, availability, and to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/how-to-order"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200"
            >
              How to Order
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/12813017800"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
