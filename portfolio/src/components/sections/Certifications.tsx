import { FiShield } from 'react-icons/fi';
import { CERTIFICATIONS } from '../../constants/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Certifications() {
  return (
    <section id="certifications" className="bg-secondary/[0.02] py-24 sm:py-32">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Verified credentials." align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 0.07}>
              <div className="card flex items-center gap-4 p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  <FiShield size={19} aria-hidden />
                </div>
                <div>
                  <p className="text-[14.5px] font-semibold text-secondary leading-snug">{cert.name}</p>
                  <p className="text-[12.5px] text-muted">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
