import { cn } from "../../lib/utils";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-geist",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 font-geist",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight font-geist",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: TypographyProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight font-geist",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
}

export function P({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "leading-7 [&:not(:first-child)]:mt-6 font-geist",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Blockquote({ children, className, ...props }: TypographyProps) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic font-geist", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function List({ children, className, ...props }: TypographyProps) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2 font-geist", className)}
      {...props}
    >
      {children}
    </ul>
  );
}

export function InlineCode({ children, className, ...props }: TypographyProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold font-geist",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
}

export function Lead({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn("text-xl text-muted-foreground font-geist", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Large({ children, className, ...props }: TypographyProps) {
  return (
    <div
      className={cn("text-lg font-semibold font-geist", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function Small({ children, className, ...props }: TypographyProps) {
  return (
    <small
      className={cn("text-sm font-medium leading-none font-geist", className)}
      {...props}
    >
      {children}
    </small>
  );
}

export function Muted({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn("text-sm text-muted-foreground font-geist", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Table({ children, className, ...props }: TypographyProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full font-geist", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({
  children,
  className,
  ...props
}: TypographyProps) {
  return (
    <thead className={cn("font-geist", className)} {...props}>
      <tr className="m-0 border-t p-0 even:bg-muted">{children}</tr>
    </thead>
  );
}

export function TableCell({ children, className, ...props }: TypographyProps) {
  return (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right font-geist",
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}

export function TableHead({ children, className, ...props }: TypographyProps) {
  return (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right font-geist",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}
