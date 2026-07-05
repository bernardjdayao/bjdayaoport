import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SITE } from '../../constants/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary/8 bg-white">
      <div className="section-wrap py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[14px] text-muted order-2 sm:order-1">
          © {year} {SITE.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4 order-1 sm:order-2">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-muted hover:text-primary transition-colors"
          >
            <FiGithub size={19} />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted hover:text-primary transition-colors"
          >
            <FiLinkedin size={19} />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Send an email"
            className="text-muted hover:text-primary transition-colors"
          >
            <FiMail size={19} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-secondary/15 text-secondary hover:border-primary hover:text-primary transition-colors"
          >
            <FiArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
