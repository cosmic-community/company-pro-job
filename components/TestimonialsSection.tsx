import type { Testimonial } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
            Client Love
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-lg leading-relaxed text-navy-500">
            Don&apos;t just take our word for it — hear from the businesses
            we&apos;ve helped grow.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}