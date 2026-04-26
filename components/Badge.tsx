interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "shipped" | "progress" | "soon";
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`pill ${className}`}>
      {children}
    </span>
  );
}
