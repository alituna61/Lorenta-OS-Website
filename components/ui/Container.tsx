import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "main" | "article";
  children: React.ReactNode;
  className?: string;
  /** Standart genişlik. "narrow" okuma akışı için, "wide" geniş layout için. */
  width?: "narrow" | "default" | "wide";
};

const widthMap = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

/**
 * Yatay dolgu ve maksimum genişliği tek noktadan yöneten container.
 * Tüm sayfa içerikleri bu wrapper'ın içine girer.
 */
export function Container({
  as: Tag = "div",
  children,
  className,
  width = "default",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 sm:px-8", widthMap[width], className)}>
      {children}
    </Tag>
  );
}
