import type { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
            What We Do
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="text-lg leading-relaxed text-navy-500">
            We deliver end-to-end digital solutions that help businesses stand
            out and succeed in today&apos;s competitive landscape.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}