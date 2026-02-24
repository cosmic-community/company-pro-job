import type { TeamMember } from '@/types'
import TeamCard from '@/components/TeamCard'

interface TeamSectionProps {
  members: TeamMember[]
}

export default function TeamSection({ members }: TeamSectionProps) {
  if (!members || members.length === 0) {
    return null
  }

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-max">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
            Who We Are
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="text-lg leading-relaxed text-navy-500">
            A talented group of professionals passionate about delivering
            exceptional results for our clients.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}