import Image from 'next/image'
import Link from 'next/link'

interface QualityCategoryCardProps {
  title: string
  description: string
  image: string
  features: string[]
  href: string
  accent: 'amber' | 'blue' | 'slate'
}

const accentColors = {
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-500',
    text: 'text-amber-700',
    button: 'bg-amber-500 hover:bg-amber-600',
  },
  blue: {
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    badge: 'bg-primary-500',
    text: 'text-primary-700',
    button: 'bg-primary-500 hover:bg-primary-600',
  },
  slate: {
    bg: 'bg-secondary-50',
    border: 'border-secondary-200',
    badge: 'bg-secondary-500',
    text: 'text-secondary-700',
    button: 'bg-secondary-500 hover:bg-secondary-600',
  },
}

const QualityCategoryCard = ({ title, description, image, features, href, accent }: QualityCategoryCardProps) => {
  const colors = accentColors[accent]

  return (
    <div className={`rounded-2xl overflow-hidden ${colors.bg} ${colors.border} border-2`}>
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className={`absolute top-4 left-4 ${colors.badge} text-white px-4 py-1.5 rounded-full font-semibold text-sm`}>
          {title}
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold ${colors.text} mb-3`}>{title}</h3>
        <p className="text-secondary-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-secondary-700">
              <svg className={`w-4 h-4 mr-2 ${colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className={`inline-block w-full text-center ${colors.button} text-white py-3 rounded-lg font-semibold transition-colors duration-200`}
        >
          View Products
        </Link>
      </div>
    </div>
  )
}

export default QualityCategoryCard
