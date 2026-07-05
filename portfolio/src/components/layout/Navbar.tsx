import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { NAV_LINKS, SITE } from '../../constants/content';
import { useActiveSection } from '../../hooks/useActiveSection';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.href.replace('#', '')));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/75 backdrop-blur-md border-b border-secondary/8' : 'bg-transparent'
      }`}
    >
      <nav className="section-wrap flex h-[72px] items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="font-semibold text-[17px] tracking-tight text-secondary flex items-center gap-2"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-white font-mono text-[13px]">
            BD
          </span>
          {SITE.name.split(' ')[0]} {SITE.name.split(' ')[1]}
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace('#', '');
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-[14px] font-medium transition-colors ${
                    isActive ? 'text-secondary' : 'text-muted hover:text-secondary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-4 right-4 -bottom-px h-[2px] bg-primary rounded-full"
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary !px-5 !py-2.5 !text-[14px]">
            Let&rsquo;s talk
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-secondary"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white border-b border-secondary/8"
          >
            <ul className="section-wrap py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-[16px] font-medium text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full">
                  Let&rsquo;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
