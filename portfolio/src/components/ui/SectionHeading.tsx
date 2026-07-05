interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="section-title text-balance">{title}</h2>
      {description && <p className="body-text mt-4 max-w-xl">{description}</p>}
    </div>
  );
}
