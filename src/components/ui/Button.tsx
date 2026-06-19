"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      asChild = false,
      loading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          // Base
          "inline-flex items-center justify-center gap-2 font-semibold rounded-full",
          "transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          "disabled:opacity-50 disabled:pointer-events-none",
          "select-none cursor-pointer whitespace-nowrap",

          // Sizes
          {
            "text-sm px-4 py-2 h-9": size === "sm",
            "text-sm px-6 py-3 h-11": size === "md",
            "text-base px-8 py-4 h-13": size === "lg",
          },

          // Variants
          {
            // Primary — gradient fill
            "bg-violet text-white shadow-[0_0_20px_rgba(0,102,204,0.35)] hover:bg-violet-hover hover:shadow-[0_0_28px_rgba(0,102,204,0.5)] hover:scale-[1.02] active:scale-[0.98]":
              variant === "primary",

            // Secondary — surface fill
            "bg-surface border border-border text-fg hover:bg-elevated hover:border-border-strong hover:scale-[1.01] active:scale-[0.99]":
              variant === "secondary",

            // Ghost — transparent
            "text-fg-muted hover:text-fg hover:bg-surface active:scale-[0.98]":
              variant === "ghost",

            // Outline — border only
            "border border-violet text-violet hover:bg-violet-muted hover:scale-[1.01] active:scale-[0.99]":
              variant === "outline",
          },

          className
        )}
        {...props}
      >
        {asChild ? children : (
          <>
            {loading && (
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
            )}
            {children}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
