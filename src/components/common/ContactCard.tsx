import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children: React.ReactNode;
  color?: "blue" | "emerald" | "amber";
  className?: string;
}

const colorStyles = {
  blue: {
    iconBg: "#EFF8FF",
    iconColor: "#048CE4",
    border: "rgba(4,140,228,0.1)",
    shadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(4,140,228,0.06)",
    hoverShadow: "0 8px 24px rgba(0,0,0,0.06), 0 16px 40px rgba(4,140,228,0.14)",
  },
  emerald: {
    iconBg: "#F0FDF4",
    iconColor: "#16a34a",
    border: "rgba(22,163,74,0.1)",
    shadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(22,163,74,0.06)",
    hoverShadow: "0 8px 24px rgba(0,0,0,0.06), 0 16px 40px rgba(22,163,74,0.14)",
  },
  amber: {
    iconBg: "#FFFBEB",
    iconColor: "#d97706",
    border: "rgba(217,119,6,0.1)",
    shadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(217,119,6,0.06)",
    hoverShadow: "0 8px 24px rgba(0,0,0,0.06), 0 16px 40px rgba(217,119,6,0.14)",
  },
};

export const ContactCard = ({
  icon: Icon,
  title,
  description,
  children,
  color = "blue",
  className = "",
}: ContactCardProps) => {
  const styles = colorStyles[color];

  return (
    <div
      className={`group p-6 rounded-2xl cursor-default transition-all duration-250 ${className}`}
      style={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${styles.border}`,
        boxShadow: styles.shadow,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px) scale(1.02)";
        el.style.boxShadow = styles.hoverShadow;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0) scale(1)";
        el.style.boxShadow = styles.shadow;
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: styles.iconBg }}
      >
        <Icon className="w-5 h-5" style={{ color: styles.iconColor }} />
      </div>
      <h3 className="text-sm font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed mb-3">{description}</p>
      {children}
    </div>
  );
};
