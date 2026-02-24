import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import { getServices, getTeamMembers, getTestimonials } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [services, teamMembers, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection services={services} />
        <TeamSection members={teamMembers} />
        <TestimonialsSection testimonials={testimonials} />
      </main>
      <Footer />
    </>
  )
}