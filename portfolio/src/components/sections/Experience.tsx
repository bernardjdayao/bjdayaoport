import { EXPERIENCE } from '../../constants/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Experience() {
  return (
    <section id="experience" className="bg-secondary/[0.02] py-24 sm:py-32">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked."
          />
        </Reveal>

        <ol className="mt-14 max-w-2xl">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <li className="relative pl-10 pb-12 last:pb-0">
                <span
                  className="absolute left-[5px] top-1.5 bottom-0 w-px dotted-line"
                  aria-hidden
                />
                <span
                  className="absolute left-0 top-1 h-[11px] w-[11px] rounded-full border-2 border-primary bg-white"
                  aria-hidden
                />

                <p className="font-mono text-[12px] text-muted">{item.period}</p>
                <h3 className="mt-1 text-[18px] font-semibold text-secondary">
                  {item.role} <span className="font-normal text-muted">· {item.org}</span>
                </h3>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="text-[14.5px] leading-relaxed text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
