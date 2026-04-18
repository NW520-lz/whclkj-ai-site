'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';


export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { href: '/products', label: t.footer.links.product.services },
      { href: '/products#features', label: t.footer.links.product.marketInsight },
      { href: '/products#pricing', label: t.footer.links.product.smartOutreach },
      { href: '/products#enterprise', label: t.footer.links.product.dataSync },
    ],
    company: [
      { href: '/about', label: t.footer.links.company.about },
      { href: '/blog', label: t.footer.links.company.blog },
      { href: '/about#careers', label: t.footer.links.company.careers },
      { href: '/contact', label: t.footer.links.company.contact },
    ],
    resources: [
      { href: '#', label: t.footer.links.resources.industry },
      { href: '#', label: t.footer.links.resources.solutions },
      { href: '#', label: t.footer.links.resources.support },
      { href: '#', label: t.footer.links.resources.cases },
    ],
    legal: [
      { href: '#', label: t.footer.links.legal.privacy },
      { href: '#', label: t.footer.links.legal.terms },
      { href: '#', label: t.footer.links.legal.cookies },
    ],
  };

  return (
    <footer className="border-t border-white/10 bg-[var(--color-bg-darker)]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.product}
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.company}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.resources}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.legal}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-white/10 pt-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-sm font-bold text-white">畅</span>
            </div>
            <span className="text-sm text-[var(--color-text-muted)]">
              © {new Date().getFullYear()} {t.footer.copyright}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
