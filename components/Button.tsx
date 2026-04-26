import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline" | "filled";
  download?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "outline",
  download = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center type-ui cursor-pointer transition-all " +
    "rounded-[var(--radius-md)]";

  const styles = {
    outline:
      "border border-body text-body bg-transparent " +
      "hover:bg-body hover:text-bg duration-[var(--transition-fast)]",
    filled:
      "bg-body text-bg hover:bg-heading duration-[var(--transition-fast)]",
  };

  const spacing = { padding: "var(--space-3) var(--space-5)" };
  const cls = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls} style={spacing} download={download || undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cls} style={spacing}>
      {children}
    </button>
  );
}
