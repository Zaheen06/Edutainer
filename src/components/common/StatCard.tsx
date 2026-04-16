interface StatCardProps {
  value: string;
  label: string;
  description?: string;
  color?: "blue" | "violet" | "emerald" | "amber";
  className?: string;
}

const colorStyles = {
  blue: {
    bar: "bg-blue-500",
    num: "text-blue-600",
    border: "border-blue-100",
  },
  violet: {
    bar: "bg-violet-500",
    num: "text-violet-600",
    border: "border-violet-100",
  },
  emerald: {
    bar: "bg-emerald-500",
    num: "text-emerald-600",
    border: "border-emerald-100",
  },
  amber: {
    bar: "bg-amber-500",
    num: "text-amber-600",
    border: "border-amber-100",
  },
};

export const StatCard = ({
  value,
  label,
  description,
  color = "blue",
  className = "",
}: StatCardProps) => {
  const styles = colorStyles[color];

  return (
    <div
      className={`relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 border ${styles.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden ${className}`}
    >
      <div className={`absolute top-0 left-0 right-0 h-[2.5px] sm:h-[3px] ${styles.bar} rounded-t-xl sm:rounded-t-2xl`} />
      <div className={`text-3xl sm:text-4xl font-bold tracking-tight mb-2 ${styles.num}`}>
        {value}
      </div>
      <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3">{label}</div>
      {description && (
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{description}</p>
      )}
    </div>
  );
};
