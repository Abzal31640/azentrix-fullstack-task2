import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({
  darkMode,
  setDarkMode,
}) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        darkMode
          ? "bg-slate-800 text-yellow-400 border border-slate-700 shadow-lg"
          : "bg-white text-slate-800 border border-slate-300 shadow-xl"
      }`}
    >
      {darkMode ? (
        <Sun size={24} />
      ) : (
        <Moon size={24} />
      )}
    </button>
  );
}
