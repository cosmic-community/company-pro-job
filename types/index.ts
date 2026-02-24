// Cosmic file/image type
export interface CosmicFile {
  url: string
  imgix_url: string
}

// Base Cosmic object
export interface CosmicObject {
  id: string
  title: string
  slug: string
  metadata: Record<string, unknown>
}

// Service object type
export interface Service extends CosmicObject {
  metadata: {
    description: string
    icon: string
    featured_image: CosmicFile | null
  }
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  metadata: {
    role: string
    bio: string
    photo: CosmicFile | null
    email: string
  }
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  metadata: {
    quote: string
    company: string
    photo: CosmicFile | null
  }
}

// About Page value item (stored as JSON metafield)
export interface AboutValue {
  emoji: string
  title: string
  description: string
}

// About Page singleton object type
export interface AboutPage extends CosmicObject {
  metadata: {
    hero_badge: string
    hero_title: string
    hero_highlight: string
    hero_subtitle: string
    mission_badge: string
    mission_heading: string
    mission_paragraph_1: string
    mission_paragraph_2: string
    stat_projects: string
    stat_satisfaction: string
    values_badge: string
    values_heading: string
    values_description: string
    values: AboutValue[] | string
    team_badge: string
    team_heading: string
    team_description: string
    cta_heading: string
    cta_description: string
    cta_primary_text: string
    cta_primary_link: string
    cta_secondary_text: string
    cta_secondary_link: string
  }
}