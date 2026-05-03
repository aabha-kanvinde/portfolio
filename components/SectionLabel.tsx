interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <h2 className={`type-overline ${className}`}>{children}</h2>
  );
}
