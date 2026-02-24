import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-navy-900 text-white">
      <div className="container-max section-padding">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700">
                <span className="text-lg font-bold text-white">C</span>
              </div>
              <span className="text-xl font-bold">Company Pro</span>
            </div>
            <p className="text-sm leading-relaxed text-navy-300">
              We help businesses thrive in the digital age with creative
              solutions, modern technology, and data-driven strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Services', href: '/#services' },
                { label: 'Team', href: '/#team' },
                { label: 'Testimonials', href: '/#testimonials' },
                { label: 'About', href: '/about' }, {/* Changed: Added About link */}
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 transition-colors duration-200 hover:text-indigo-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-navy-400">
              Get in Touch
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-navy-300">
              Ready to start your next project? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@companypro.com"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 transition-colors duration-200 hover:bg-indigo-500/20"
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
              hello@companypro.com
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-800 pt-8 text-center">
          <p className="text-sm text-navy-400">
            &copy; {currentYear} Company Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}