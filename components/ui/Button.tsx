import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "signal" | "ghost-inverse";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-[opacity,border-color,background-color] duration-200 " +
  "focus-visible:outline-none";

const variantStyles: Record<Variant, string> = {
  primary: "bg-accent-primary text-surface hover:opacity-90 active:opacity-80",
  secondary:
    "border border-border-subtle bg-surface text-ink-primary " +
    "hover:border-ink-primary",
  ghost: "text-ink-primary hover:bg-border-subtle/50",
  /** Koyu arka plan üzerinde vurgulu CTA — lime/signal rengi */
  signal: "bg-accent-signal text-ink-primary hover:opacity-90 active:opacity-80",
  /** Koyu arka plan üzerinde ghost — beyaz metin */
  "ghost-inverse": "text-surface hover:bg-surface/10",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-small",
  md: "px-6 py-3 text-small",
  lg: "px-8 py-4 text-body",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Tek primitive: hem <button> hem <Link> olarak çalışır.
 * `href` verirsen Link; vermezsen button.
 */
export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    props.className,
  );

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {props.children}
      </Link>
    );
  }

  // Button modu: native button props'larını ayır, custom props'ları (variant/size/className) düş
  const {
    variant: _omitVariant,
    size: _omitSize,
    className: _omitClassName,
    children,
    ...nativeButtonProps
  } = props;
  void _omitVariant;
  void _omitSize;
  void _omitClassName;

  return (
    <button className={classes} {...nativeButtonProps}>
      {children}
    </button>
  );
}
