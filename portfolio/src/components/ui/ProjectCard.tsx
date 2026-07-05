import { FiCheckCircle, FiGithub } from 'react-icons/fi';
import type { Project } from '../../types';
import { Badge } from './Badge';

const STATUS_LABEL: Record<NonNullable<Project['status']>, string> = {
  shipped: 'Shipped',
  live: 'Live',
  archived: 'Case study',
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-secondary/8">
      {/* Image: show project image when available, otherwise a gradient placeholder */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden">
        {/* Status pill (top-right) */}
        <div className="absolute top-3 right-3 z-10">
          {project.status && (
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12px] font-mono text-black shadow-sm">
              <span
                className={
                  'h-2.5 w-2.5 rounded-full ring-2 ring-gray-200 ' +
                  (project.status === 'archived' ? 'bg-gray-400' : 'bg-green-400')
                }
                aria-hidden
              />
              <span className="uppercase tracking-wider text-[11px]">
                {STATUS_LABEL[project.status]}
              </span>
            </div>
          )}
        </div>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(37,99,235,0.10), rgba(2,6,23,0.92))',
            }}
          />
        )}

        <div className="absolute inset-0 grid-bg opacity-30" />
        {/* Centered status bar */}
        {project.status && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white/90 text-black px-3 py-1 rounded font-mono text-[13px] tracking-[0.18em] uppercase">
              {STATUS_LABEL[project.status]}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[12px] text-muted">{project.period}</p>
        <h3 className="mt-1.5 text-[18px] font-semibold leading-snug text-secondary">
          {project.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.achievements.map((point) => (
            <li key={point} className="flex items-start gap-2 text-[13.5px] text-secondary/85">
              <FiCheckCircle className="mt-0.5 shrink-0 text-primary" size={15} aria-hidden />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-4 border-t border-secondary/8">
          <a
            href={project.github ?? '#'}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-secondary hover:text-primary transition-colors"
            aria-label={`View ${project.title} source on GitHub`}
          >
            <FiGithub size={15} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
