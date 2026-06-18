import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  /** Dikey boşluk yoğunluğu. */
  spacing?: "tight" | "default" | "loose";
  id?: string;
};

const spacingMap = {
  tight: "py-16",
  default: "py-24",
  loose: "py-32",
} as const;

/**
 * Standart bir sayfa kesiti. Dikey ritmi tek noktadan yönetir.
 */
export function Section({
  children,
  className,
  spacing = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn(spacingMap[spacing], className)}>
      {children}
    </section>
  );
}
