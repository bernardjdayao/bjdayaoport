import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SITE } from '../../constants/content';
import { staggerContainer, fadeUp } from '../../animations/variants';

const STATUS_ROWS = [
  { label: 'auth', value: 'mTLS verified', ok: true },
  { label: 'cipher', value: 'AES-256-GCM', ok: true },
  { label: 'stack', value: 'MERN · Kotlin', ok: true },
  { label: 'uptime', value: '99.9%', ok: true },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-[72px]"
    >
      {/* Animated grid backdrop */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      {/* Floating geometric shapes */}
      <motion.div
        aria-hidden
        className="absolute right-[8%] top-[22%] hidden h-24 w-24 rounded-2xl border border-accent/30 bg-accent/5 lg:block"
        animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[6%] bottom-[18%] hidden h-16 w-16 rounded-full border border-primary/30 bg-primary/5 lg:block"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[18%] bottom-[12%] hidden h-10 w-10 rotate-45 border border-secondary/15 lg:block"
        animate={{ rotate: [45, 90, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-wrap relative grid grid-cols-1 items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.09, 0.1)}
        >
          <motion.p variants={fadeUp} className="eyebrow mb-5">
            Available for new opportunities
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-secondary sm:text-[48px] lg:text-[64px]"
          >
            {SITE.name}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-4 text-[20px] font-medium text-primary sm:text-[24px]">
            {SITE.role}
          </motion.p>

          <motion.p variants={fadeUp} className="body-text mt-5 max-w-lg text-balance">
            {SITE.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowRight aria-hidden />
            </a>
            <a href="public/resume.pdf" download className="btn-secondary">
              Download Resume <FiDownload aria-hidden />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-5">
            <a
              href="https://github.com/bernardjdayao"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-primary"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dbernardjustin/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-primary"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Send an email"
              className="text-muted transition-colors hover:text-primary"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Signature element: a live "system status" readout, echoing the
            secure-systems focus of the work without being literal hero art. */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm rounded-2xl border border-secondary/10 bg-secondary text-white shadow-2xl shadow-secondary/20"
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 font-mono text-[12px] text-white/50">session.status</span>
          </div>
          <dl className="space-y-3.5 px-5 py-5 font-mono text-[13px]">
            {STATUS_ROWS.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                className="flex items-center justify-between"
              >
                <dt className="text-white/45">{row.label}</dt>
                <dd className="flex items-center gap-2 text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  {row.value}
                </dd>
              </motion.div>
            ))}
          </dl>
          <div className="border-t border-white/10 px-5 py-3.5">
            <p className="font-mono text-[12px] text-accent">$ deployment verified ✓</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
