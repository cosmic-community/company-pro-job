import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const photo = testimonial.metadata.photo

  return (
    <div className="relative rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Quote icon */}
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
        <svg
          className="h-5 w-5 text-indigo-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
        </svg>
      </div>

      {/* Quote text */}
      <blockquote className="mb-8 text-base leading-relaxed text-navy-700">
        &ldquo;{testimonial.metadata.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.title}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-indigo-100"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 text-lg font-bold text-white ring-2 ring-indigo-100">
            {testimonial.title.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-bold text-navy-900">
            {testimonial.title}
          </p>
          {testimonial.metadata.company && (
            <p className="text-sm text-navy-500">
              {testimonial.metadata.company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}