import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TeamCard from '@/components/TeamCard'
import { getTeamMembers, getServices } from '@/lib/cosmic'

export const revalidate = 60

export const metadata = {
  title: 'About Us — Company Pro',
  description:
    'Learn about our story, mission, and the talented team behind Company Pro.',
}

export default async function AboutPage() {
  const [teamMembers, services] = await Promise.all([
    getTeamMembers(),
    getServices(),
  ])

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
                Our Story
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                About{' '}
                <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 bg-clip-text text-transparent">
                  Company Pro
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-navy-200 sm:text-xl">
                We&apos;re a passionate team of developers, designers, and
                strategists dedicated to helping businesses thrive in the digital
                age.
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
                  Our Mission
                </span>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                  Empowering businesses through digital innovation
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-navy-600">
                  Founded with a vision to bridge the gap between technology and
                  business success, Company Pro has grown into a trusted partner
                  for companies of all sizes. We believe that great digital
                  experiences are the foundation of modern business growth.
                </p>
                <p className="text-lg leading-relaxed text-navy-600">
                  Our approach combines creative thinking with technical
                  excellence, ensuring every project we deliver not only looks
                  outstanding but also drives real, measurable results for our
                  clients.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl border border-navy-100 bg-gray-50 p-6 text-center">
                  <div className="mb-2 text-3xl font-extrabold text-indigo-600">
                    50+
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
                    98%
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
                What Drives Us
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Our Core Values
              </h2>
              <p className="text-lg leading-relaxed text-navy-500">
                These principles guide everything we do, from how we work with
                clients to how we build our team.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                  🎯
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy-900">
                  Results-Driven
                </h3>
                <p className="text-base leading-relaxed text-navy-600">
                  Every decision we make is guided by measurable outcomes. We
                  focus on delivering real value that impacts your bottom line.
                </p>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                  🤝
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy-900">
                  Collaborative
                </h3>
                <p className="text-base leading-relaxed text-navy-600">
                  We work alongside our clients as true partners, ensuring
                  transparency and open communication at every step.
                </p>
              </div>

              <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-3xl">
                  💡
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy-900">
                  Innovative
                </h3>
                <p className="text-base leading-relaxed text-navy-600">
                  We stay ahead of industry trends and leverage cutting-edge
                  technology to give our clients a competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-600">
                The People Behind the Work
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="text-lg leading-relaxed text-navy-500">
                A talented group of professionals passionate about delivering
                exceptional results for our clients.
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
              Ready to work with us?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-navy-200">
              Let&apos;s discuss how we can help your business grow with our
              expertise in web development, brand design, and digital marketing.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/#services"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-400 hover:shadow-xl hover:shadow-indigo-500/40"
              >
                View Our Services
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
                href="mailto:hello@companypro.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}