interface BadgeProps {
  children: React.ReactNode;
  tone?: 'default' | 'accent';
}

export function Badge({ children, tone = 'default' }: BadgeProps) {
  const toneClasses =
    tone === 'accent'
      ? 'bg-primary/8 text-primary border-primary/15'
      : 'bg-secondary/5 text-secondary/80 border-secondary/10';

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-[12px] tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
