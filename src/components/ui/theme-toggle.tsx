import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="relative w-16 h-8 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
          : "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
        boxShadow: isDark
          ? "inset 0 2px 8px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)"
          : "inset 0 2px 8px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)",
      }}
      aria-label="Toggle theme"
    >
      {/* Sun Icon (Left) */}
      <div
        className="absolute left-2 top-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          opacity: isDark ? 0.3 : 0,
          transform: isDark ? "translateY(-50%) scale(0.8)" : "translateY(-50%) scale(1)",
        }}
      >
        <Sun className="w-4 h-4 text-gray-400" />
      </div>

      {/* Moon Icon (Right) */}
      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300"
        style={{
          opacity: isDark ? 0 : 0.3,
          transform: isDark ? "translateY(-50%) scale(1)" : "translateY(-50%) scale(0.8)",
        }}
      >
        <Moon className="w-4 h-4 text-gray-400" />
      </div>

      {/* Sliding Button */}
      <div
        className="absolute top-1 transition-all duration-300 ease-out rounded-full"
        style={{
          left: isDark ? "calc(100% - 28px)" : "4px",
          width: "24px",
          height: "24px",
          background: isDark
            ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
            : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
          boxShadow: isDark
            ? "0 4px 12px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)"
            : "0 4px 12px rgba(251, 191, 36, 0.5), 0 0 20px rgba(251, 191, 36, 0.3)",
        }}
      >
        {/* Icon inside sliding button */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          ) : (
            <Sun className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
          )}
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-50"
          style={{
            background: isDark ? "#3b82f6" : "#fbbf24",
          }}
        />
      </div>
    </button>
  );
};
