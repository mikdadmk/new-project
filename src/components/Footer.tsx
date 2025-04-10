/* biome-ignore lint/style/useSelfClosingElements: <explanation> */
"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-github-deepblue pt-16 border-t border-zinc-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <svg height="30" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="30" data-view-component="true" className="text-white fill-current">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
              </svg>
            </Link>
            <h3 className="text-white text-lg font-medium mb-3">
              Subscribe to our developer newsletter
            </h3>
            <p className="text-zinc-400 mb-4">
              Get tips, technical guides, and best practices. Twice a month. Right in your inbox.
            </p>
            <Link
              href="/newsletter"
              className="inline-block px-4 py-2 border border-zinc-700 text-zinc-300 rounded-md hover:border-zinc-500 hover:text-white transition-colors"
            >
              Subscribe
            </Link>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/enterprise">Enterprise</FooterLink>
              <FooterLink href="/copilot">Copilot</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/team">Team</FooterLink>
              <FooterLink href="/resources">Resources</FooterLink>
              <FooterLink href="/roadmap">Roadmap</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-3">
              <FooterLink href="/developer-api">Developer API</FooterLink>
              <FooterLink href="/partners">Partners</FooterLink>
              <FooterLink href="/education">Education</FooterLink>
              <FooterLink href="/cli">GitHub CLI</FooterLink>
              <FooterLink href="/desktop">GitHub Desktop</FooterLink>
              <FooterLink href="/mobile">GitHub Mobile</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Support</h4>
            <ul className="space-y-3">
              <FooterLink href="/docs">Docs</FooterLink>
              <FooterLink href="/community">Community Forum</FooterLink>
              <FooterLink href="/services">Professional Services</FooterLink>
              <FooterLink href="/premium-support">Premium Support</FooterLink>
              <FooterLink href="/skills">Skills</FooterLink>
              <FooterLink href="/status">Status</FooterLink>
              <FooterLink href="/contact">Contact GitHub</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/customer-stories">Customer stories</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/readme">The ReadME Project</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/newsroom">Newsroom</FooterLink>
              <FooterLink href="/inclusion">Inclusion</FooterLink>
              <FooterLink href="/social-impact">Social Impact</FooterLink>
              <FooterLink href="/shop">Shop</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 py-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 mb-6 md:mb-0">
            <span className="text-zinc-500 text-sm">© 2025 GitHub, Inc.</span>
            <FooterLink href="/terms" smaller>Terms</FooterLink>
            <FooterLink href="/privacy" smaller>Privacy</FooterLink>
            <FooterLink href="/sitemap" smaller>Sitemap</FooterLink>
            <FooterLink href="/git-guides" smaller>What is Git?</FooterLink>
          </div>

          <div className="flex gap-6">
            <Link href="https://www.linkedin.com/company/github" className="text-zinc-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link href="https://twitter.com/github" className="text-zinc-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link href="https://www.youtube.com/github" className="text-zinc-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children, smaller }: {
  href: string;
  children: React.ReactNode;
  smaller?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`text-zinc-400 hover:text-white transition-colors ${smaller ? 'text-sm' : ''}`}
      >
        {children}
      </Link>
    </li>
  );
}
