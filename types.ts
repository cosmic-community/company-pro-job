export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  metadata: {
    description: string;
    icon?: string;
    featured_image?: CosmicFile;
  };
}

export interface TeamMember extends CosmicObject {
  metadata: {
    role: string;
    bio?: string;
    photo?: CosmicFile;
    email?: string;
  };
}

export interface Testimonial extends CosmicObject {
  metadata: {
    quote: string;
    company?: string;
    photo?: CosmicFile;
  };
}