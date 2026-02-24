import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamCard from '@/components/TeamCard'
import { getTeamMembers, getServices, getAboutPage } from '@/lib/cosmic'
import type { AboutValue } from '@/types'

export const revalidate = 60

export const metadata = {
  title: 'About Us — Company Pro',
  description:
    'Learn about our story, mission, and the talented team behind Company Pro.',
}

// Changed: Default values used as fallback when Cosmic content is not yet configured
const defaults = {
  hero_badge: 'Our Story',
  hero_title: 'About',
  hero_highlight: 'Company Pro',
  hero_subtitle:
    "We're a passionate team of developers, designers, and strategists dedicated to helping businesses thrive in the digital age.",
  mission_badge: 'Our Mission',
  mission_heading: 'Empowering businesses through digital innovation',
  mission_paragraph_1:
    'Founded with a vision to bridge the gap between technology and business success, Company Pro has grown into a trusted partner for companies of all sizes. We believe that great digital experiences are the foundation of modern business growth.',
  mission_paragraph_2:
    'Our approach combines creative thinking with technical excellence, ensuring every project we deliver not only looks outstanding but also drives real, measurable results for our clients.',
  stat_projects: '50+',
  stat_satisfaction: '98%',
  values_badge: 'What Drives Us',
  values_heading: 'Our Core Values',
  values_description:
    'These principles guide everything we do, from how we work with clients to how we build our team.',
  values: [
    {
      emoji: '🎯',
      title: 'Results-Driven',
      description:
        'Every decision we make is guided by measurable outcomes. We focus on delivering real value that impacts your bottom line.',
    },
    {
      emoji: '🤝',
      title: 'Collaborative',
      description:
        'We work alongside our clients as true partners, ensuring transparency and open communication at every step.',
    },
    {
      emoji: '💡',
      title: 'Innovative',
      description:
        'We stay ahead of industry trends and leverage cutting-edge technology to give our clients a competitive advantage.',
    },
  ] as AboutValue[],
  team_badge: 'The People Behind the Work',
  team_heading: 'Meet Our Team',
  team_description:
    'A talented group of professionals passionate about delivering exceptional results for our clients.',
  cta_heading: 'Ready to work with us?',
  cta_description:
    "Let's discuss how we can help your business grow with our expertise in web development, brand design, and digital marketing.",
  cta_primary_text: 'View Our Services',
  cta_primary_link: '/#services',
  cta_secondary_text: 'Get in Touch',
  cta_secondary_link: 'mailto:hello@companypro.com',
}

export default async function AboutPage() {
  // Changed: Fetch about page content alongside team members and services
  const [teamMembers, services, aboutPage] = await Promise.all([
    getTeamMembers(),
    getServices(),
    getAboutPage(),
  ])

  // Changed: Use Cosmic content with fallback to defaults
  const content = aboutPage?.metadata
  const heroBadge = content?.hero_badge || defaults.hero_badge
  const heroTitle = content?.hero_title || defaults.hero_title
  const heroHighlight = content?.hero_highlight || defaults.hero_highlight
  const heroSubtitle = content?.hero_subtitle || defaults.hero_subtitle
  const missionBadge = content?.mission_badge || defaults.mission_badge
  const missionHeading = content?.mission_heading || defaults.mission_heading
  const missionParagraph1 = content?.mission_paragraph_1 || defaults.mission_paragraph_1
  const missionParagraph2 = content?.mission_paragraph_2 || defaults.mission_paragraph_2
  const statProjects = content?.stat_projects || defaults.stat_projects
  const statSatisfaction = content?.stat_satisfaction || defaults.stat_satisfaction
  const valuesBadge = content?.values_badge || defaults.values_badge
  const valuesHeading = content?.values_heading || defaults.values_heading
  const valuesDescription = content?.values_description || defaults.values_description
  const teamBadge = content?.team_badge || defaults.team_badge
  const teamHeading = content?.team_heading || defaults.team_heading
  const teamDescription = content?.team_description || defaults.team_description
  const ctaHeading = content?.cta_heading || defaults.cta_heading
  const ctaDescription = content?.cta_description || defaults.cta_description
  const ctaPrimaryText = content?.cta_primary_text || defaults.cta_primary_text
  const ctaPrimaryLink = content?.cta_primary_link || defaults.cta_primary_link
  const ctaSecondaryText = content?.cta_secondary_text || defaults.cta_secondary_text
  const ctaSecondaryLink = content?.cta_secondary_link || defaults.cta_secondary_link

  // Changed: Parse values from JSON string or use defaults
  let values: AboutValue[] = defaults.values
  if (content?.values) {
    try {
      const parsed: unknown = JSON.parse(content.values)
      if (Array.isArray(parsed)) {
        values = parsed as AboutValue[]
      }
    } catch {
      // Use defaults if JSON parsing fails
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-indigo-900">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Gradient orbs */}
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

          <div className="relative z-10 container-max px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-indigo-200 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                {heroBadge}
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                {heroTitle}{' '}
                <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text text-transparent">
                  {heroHighlight}
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-navy-200 sm:text-xl">
                {heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
                  {missionBadge}
                </span>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                  {missionHeading}
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-navy-600">
                  {missionParagraph1}
                </p>
                <p className="text-lg leading-relaxed text-navy-600">
                  {missionParagraph2}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl border border-navy-100 bg-gray-50 p-6 text-center">
                  <div className="mb-2 text-3xl font-extrabold text-indigo-600">
                    {statProjects}
                  </div>
                  <p className="text-sm font-medium text-navy-500">
                    Projects Delivered
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-gray-50 p-6 text-center">
                  <div className="mb-2 text-3xl font-extrabold text-indigo-600">
                    {teamMembers.length}+
                  </div>
                  <p className="text-sm font-medium text-navy-500">
                    Team Members
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-gray-50 p-6 text-center">
                  <div className="mb-2 text-3xl font-extrabold text-indigo-600">
                    {services.length}
                  </div>
                  <p className="text-sm font-medium text-navy-500">
                    Core Services
                  </p>
                </div>
                <div className="rounded-2xl border border-navy-100 bg-gray-50 p-6 text-center">
                  <div className="mb-2 text-3xl font-extrabold text-indigo-600">
                    {statSatisfaction}
                  </div>
                  <p className="text-sm font-medium text-navy-500">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
                {valuesBadge}
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                {valuesHeading}
              </h2>
              <p className="text-lg leading-relaxed text-navy-500">
                {valuesDescription}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                    {value.emoji}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed text-navy-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
                {teamBadge}
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                {teamHeading}
              </h2>
              <p className="text-lg leading-relaxed text-navy-500">
                {teamDescription}
              </p>
            </div>

            {teamMembers.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => (
                  <TeamCard key={member.id} member={member} />
                ))}
              </div>
            ) : (
              <p className="text-center text-navy-500">
                Team information coming soon.
              </p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-navy-900 via-navy-800 to-indigo-900">
          <div className="container-max text-center">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {ctaHeading}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-navy-200">
              {ctaDescription}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={ctaPrimaryLink}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-xl hover:shadow-indigo-500/40"
              >
                {ctaPrimaryText}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
              <a
                href={ctaSecondaryLink}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                {ctaSecondaryText}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}