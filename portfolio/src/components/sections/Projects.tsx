import { PROJECTS } from '../../constants/content';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { Reveal } from '../ui/Reveal';

export function Projects() {
  return (
    <section id="projects" className="section-wrap py-24 sm:py-32">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="A few systems I've designed and shipped, from secure government tooling to real-time mobile apps."
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
