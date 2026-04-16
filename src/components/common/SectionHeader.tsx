import { SectionBadge } from "./SectionBadge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "blue" | "purple" | "emerald" | "amber";
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  badge,
  badgeVariant = "blue",
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const maxWidthClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`${alignClass} ${className}`}>
      {badge && (
        <div className="mb-4 sm:mb-5">
          <SectionBadge variant={badgeVariant}>{badge}</SectionBadge>
        </div>
      )}
      <h2
        className="text-2xl sm:text-3xl md:text-[2.6rem] font-bold text-gray-900 mb-3 sm:mb-4 leading-[1.1]"
        style={{ letterSpacing: "-0.025em" }}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-sm sm:text-base text-gray-500 leading-[1.7] max-w-lg ${maxWidthClass}`}>
          {description}
        </p>
      )}
    </div>
  );
};
