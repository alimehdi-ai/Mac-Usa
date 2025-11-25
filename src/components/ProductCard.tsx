import Image from 'next/image'

interface ProductCardProps {
  name: string
  image: string
  category: 'premium' | 'grade1' | 'mixed'
}

const categoryLabels = {
  premium: { label: 'Premium', color: 'bg-amber-500' },
  grade1: { label: 'Grade 1', color: 'bg-primary-500' },
  mixed: { label: 'Mixed Rags', color: 'bg-secondary-500' },
}

const ProductCard = ({ name, image, category }: ProductCardProps) => {
  const categoryInfo = categoryLabels[category]

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={`absolute top-3 right-3 ${categoryInfo.color} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
          {categoryInfo.label}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-secondary-800 text-sm leading-tight">
          {name}
        </h3>
        <p className="text-xs text-secondary-500 mt-2">
          Available in bales
        </p>
      </div>
    </div>
  )
}

export default ProductCard
