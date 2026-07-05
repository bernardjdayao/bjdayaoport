import { SKILL_GROUPS } from '../../constants/content';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { Reveal } from '../ui/Reveal';

export function Skills() {
  return (
    <section id="skills" className="bg-secondary/[0.02] py-24 sm:py-32">
      <div className="section-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="A toolkit built across web, mobile, and data."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.id} delay={(i % 3) * 0.08}>
              <div className="card h-full p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/5">
                <h3 className="text-[15px] font-semibold text-secondary">{group.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
