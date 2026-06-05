import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ onSearch, theme, setTheme }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() === "") return;
    onSearch(city);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3 p-4 shadow-md bg-white dark:bg-gray-900">
      
      {/* Title */}
      <h1 className="text-xl font-bold">
        🌦️ Weather + 📰 News Dashboard
      </h1>

      {/* Search Box */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city..."
          className="border px-3 py-1 rounded"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Search
        </button>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 rounded"
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}