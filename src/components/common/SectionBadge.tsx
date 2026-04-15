interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "purple" | "emerald" | "amber";
  className?: string;
}

const variantStyles = {
  blue: "bg-blue-50 text-blue-600",
  purple: "bg-purple-50 text-purple-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
};

export const SectionBadge = ({ 
  children, 
  variant = "blue",
  className = "" 
}: SectionBadgeProps) => {
  return (
    <span 
      className={`inline-block px-4 py-1.5 ${variantStyles[variant]} text-[11px] font-bold rounded-full uppercase tracking-[0.1em] ${className}`}
    >
      {children}
    </span>
  );
};
