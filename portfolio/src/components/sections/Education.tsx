import { FiAward } from 'react-icons/fi';
import { EDUCATION } from '../../constants/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Education() {
  return (
    <section id="education" className="section-wrap py-24 sm:py-32">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Academic background." />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {EDUCATION.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.1}>
            <div className="card h-full p-7">
              <p className="font-mono text-[12px] text-muted">{item.period}</p>
              <h3 className="mt-1.5 text-[17px] font-semibold text-secondary">{item.school}</h3>
              <p className="mt-1 text-[14.5px] text-muted">{item.program}</p>
              <ul className="mt-4 space-y-2">
                {item.honors.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-[13.5px] text-secondary/85">
                    <FiAward className="text-primary" size={15} aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
