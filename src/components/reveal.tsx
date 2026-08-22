import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "text",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  variant?: "text" | "image";
}) {
  const { ref, shown } = useReveal<HTMLElement>();

  if (variant === "image") {
    // The clip-path lives on an inner element: a fully clipped node never
    // reports an intersection, so the observer must watch an unclipped parent.
    return (
      <Tag ref={ref as never} className={className}>
        <div
          data-shown={shown}
          style={{ transitionDelay: `${delay}ms` }}
          className="reveal-img"
        >
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref as never}
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

