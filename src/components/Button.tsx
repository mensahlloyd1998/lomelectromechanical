import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  asAnchor = false,
  href,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap active:scale-[0.98]";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[#0088E8] hover:bg-[#0077CC] text-white shadow-sm hover:shadow-[0_0_16px_rgba(0,136,232,0.35)] focus-visible:outline-[#0088E8]",
    secondary:
      "bg-white border border-[#CBD5E1] text-[#0F2942] hover:bg-slate-50 hover:border-[#0088E8] hover:text-[#0088E8] focus-visible:outline-[#0088E8]",
    outline:
      "bg-transparent border border-[#0088E8] text-[#0088E8] hover:bg-[#0088E8] hover:text-white focus-visible:outline-[#0088E8]",
    white:
      "bg-white text-[#005ea3] hover:bg-slate-100 font-semibold shadow-sm focus-visible:outline-white",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
