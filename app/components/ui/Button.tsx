import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "inverse" | "outline";
type ButtonSize = "md" | "lg" | "compact" | "wide" | "emphasis";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-tertiary-container text-on-tertiary hover:bg-tertiary shadow-sm",
  secondary:
    "bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary",
  inverse: "bg-surface text-primary hover:bg-surface-container-high",
  outline: "border border-outline-variant bg-surface text-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5",
  lg: "px-8 py-4 tracking-wider",
  compact: "px-6 py-3",
  wide: "px-8 py-3",
  emphasis: "px-10 py-3.5 font-bold",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ActionButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | "type"> & {
    href?: undefined;
    type?: "button" | "submit";
  };

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export function Button({
  variant = "primary",
  size = "lg",
  icon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-sans text-label-md uppercase transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as LinkButtonProps;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {icon}
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = rest as ActionButtonProps;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  );
}
