"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="p-2 px-10 rounded-lg bg-gray-900 text-white dark:bg-gray-800 dark:text-yellow-400 " // Tailwind for styling
      onClick={toggleTheme}
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
}
