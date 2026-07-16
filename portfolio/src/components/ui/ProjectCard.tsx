import { useState } from 'react';
import { FiCheckCircle, FiGithub } from 'react-icons/fi';
import type { Project } from '../../types';
import { Badge } from './Badge';

const STATUS_LABEL: Record<Project['status'], string> = {
  shipped: 'Shipped',
  live: 'Live',
  archived: 'Case study',
};

const STATUS_COLOR: Record<Project['status'], string> = {
  shipped: 'bg-emerald-500',
  live:    'bg-accent',
  archived:'bg-muted',
};

export function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const resolveAssetUrl = (path?: string) => {
    if (!path) return undefined;
    return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
  };

  const imageSrc = resolveAssetUrl(project.image);
  const hasImage = !!imageSrc && !imgError;

  return (
    <article className="card group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-secondary/8 dark:hover:shadow-black/30">
      {/* Project image / fallback gradient */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-3">
        {hasImage ? (
          <div className="flex h-full items-center justify-center rounded-xl border border-slate-200/80 bg-white p-2 shadow-inner shadow-slate-200/50">
            <img
              src={imageSrc}
              alt={`${project.title} screenshot`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="max-h-full max-w-full rounded-lg object-contain object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          <>
            <div className="absolute inset-0 grid-bg opacity-20 dark:opacity-10" />
            <div className="flex h-full items-center justify-center">
              <span className="font-mono text-[13px] tracking-[0.18em] text-white/50 uppercase">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          </>
        )}

        {/* Status pill always visible */}
        <span className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm bg-black/40`}>
          <span className={`h-1.5 w-1.5 rounded-full ${STATUS_COLOR[project.status]}`} aria-hidden />
          {STATUS_LABEL[project.status]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[12px] text-muted">{project.period}</p>
        <h3 className="mt-1.5 text-[18px] font-semibold leading-snug text-secondary dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-2">
          {project.achievements.map((point) => (
            <li key={point} className="flex items-start gap-2 text-[13.5px] text-secondary/85 dark:text-white/75">
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

        <div className="mt-6 border-t border-secondary/8 dark:border-white/8 pt-4">
          <a
            href={project.github ?? '#'}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-secondary dark:text-white/80 hover:text-primary dark:hover:text-primary transition-colors"
            aria-label={`View ${project.title} source on GitHub`}
          >
            <FiGithub size={15} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
