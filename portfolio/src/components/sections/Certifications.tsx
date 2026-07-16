import { FiShield } from 'react-icons/fi';
import { CERTIFICATIONS } from '../../constants/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Certifications() {
  const resolveAssetUrl = (path?: string) => {
    if (!path) return '/images/certifications/placeholder.svg';
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
  };

  return (
    <section id="certifications" className="bg-secondary/[0.02] py-24 sm:py-32">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Verified credentials." align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 0.07}>
              <div className="card overflow-hidden p-0 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/5">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-secondary/8 bg-gradient-to-br from-slate-50 to-slate-100 p-3">
                  <div className="flex h-full items-center justify-center rounded-xl border border-slate-200/80 bg-white p-2 shadow-inner shadow-slate-200/50">
                    <img
                      src={resolveAssetUrl(cert.image)}
                      alt={`${cert.name} certificate`}
                      className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-300 hover:scale-[1.01]"
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary">
                    <FiShield size={19} aria-hidden />
                  </div>
                  <div>
                    <p className="text-[14.5px] font-semibold leading-snug text-secondary">{cert.name}</p>
                    <p className="text-[12.5px] text-muted">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
