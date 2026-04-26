// TODO: micro-animation — staggered fade-in on section enter
import Link from "next/link";
import { Mail, FileText, ExternalLink, Globe } from "lucide-react";

const links = [
  { href: "mailto:akanvinde@adobe.com", label: "Email me",  icon: Mail,         external: false               },
  { href: "https://linkedin.com",       label: "LinkedIn",  icon: ExternalLink,  external: true                },
  { href: "/resume.pdf",                label: "Resume",    icon: FileText,      external: false, download: true },
  { href: "https://behance.net",        label: "Behance",   icon: Globe,         external: true                },
];

export default function CTARow() {
  return (
    <div className="flex flex-wrap justify-center" style={{ gap: "var(--space-3)" }}>
      {links.map(({ href, label, icon: Icon, external, download }) => (
        <Link
          key={href}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download || undefined}
          className="inline-flex items-center type-ui text-body bg-surface border border-border rounded-[var(--radius-full)] hover:bg-border transition-colors duration-150"
          style={{ padding: "var(--space-3) var(--space-5)", gap: "var(--space-2)" }}
        >
          <Icon size={15} strokeWidth={1.75} />
          {label}
        </Link>
      ))}
    </div>
  );
}
