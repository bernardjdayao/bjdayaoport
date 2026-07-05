import { FiCode, FiLock, FiTrendingUp, FiBookOpen } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

const POINTS = [
  {
    icon: FiCode,
    title: 'MERN stack, end to end',
    body: 'Comfortable owning a feature from MongoDB schema to the React component that renders it.',
  },
  {
    icon: FiLock,
    title: 'Security-minded by default',
    body: 'Builds with mTLS, AES-256-GCM, and ECDSA in mind, not bolted on after the fact.',
  },
  {
    icon: FiTrendingUp,
    title: 'Performance-aware',
    body: 'Treats load time and responsiveness as part of the spec, not an afterthought.',
  },
  {
    icon: FiBookOpen,
    title: 'Always learning',
    body: 'Picks up new stacks — from Kotlin to data visualization — when the problem calls for it.',
  },
];

export function About() {
  return (
    <section id="about" className="section-wrap py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineer first, designer at heart."
            description="A full-stack developer who treats interfaces and infrastructure as one craft."
          />
          <p className="body-text mt-6 text-balance">
            I build secure web applications end to end — from designing the database schema to
            shipping the interface a user actually touches. My background spans government-grade
            workflow systems, real-time mobile apps, and data-heavy dashboards, with a constant focus
            on solving real, sometimes overlooked, operational problems.
          </p>
          <p className="body-text mt-4 text-balance">
            I care about how software feels to use as much as how it&rsquo;s built underneath:
            clean information architecture, fast load times, and interfaces that don&rsquo;t make
            people think twice.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.08}>
              <div className="card h-full p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  <point.icon size={19} aria-hidden />
                </div>
                <h3 className="text-[16px] font-semibold text-secondary">{point.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{point.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
