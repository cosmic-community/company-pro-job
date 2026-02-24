import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const icon = service.metadata.icon
  const image = service.metadata.featured_image

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      {image && (
        <div className="relative h-52 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={service.title}
            width={400}
            height={250}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
          {icon && (
            <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 text-2xl shadow-lg backdrop-blur-sm">
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {!image && icon && (
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
            {icon}
          </div>
        )}
        <h3 className="mb-3 text-xl font-bold text-navy-900 group-hover:text-indigo-600 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-base leading-relaxed text-navy-600">
          {service.metadata.description}
        </p>
      </div>
    </div>
  )
}