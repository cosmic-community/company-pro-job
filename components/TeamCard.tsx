import type { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const photo = member.metadata.photo

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Photo */}
      <div className="relative h-72 overflow-hidden bg-navy-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={member.title}
            width={300}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-100 to-navy-100">
            <span className="text-6xl font-bold text-navy-300">
              {member.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Email overlay on hover */}
        {member.metadata.email && (
          <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href={`mailto:${member.metadata.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-navy-900 backdrop-blur-sm transition-colors hover:bg-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              {member.metadata.email}
            </a>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-navy-900">{member.title}</h3>
        <p className="mb-3 text-sm font-semibold text-indigo-500">
          {member.metadata.role}
        </p>
        {member.metadata.bio && (
          <p className="text-sm leading-relaxed text-navy-500">
            {member.metadata.bio}
          </p>
        )}
      </div>
    </div>
  )
}