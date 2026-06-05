import { useState, useEffect } from "react";
import { Cloud, MapPin } from "lucide-react";

import { getWeather } from "../services/weatherService";
import { getNews } from "../services/newsService";

import ThemeToggle from "../components/ThemeToggle";
import WeatherCard from "../components/WeatherCard";
import NewsSection from "../components/NewsSection";
import WeatherSkeleton from "../components/WeatherSkeleton";

export default function Dashboard() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("technology");

  const [loading, setLoading] = useState(false);
  const [newsLoading, setNewsLoading] = useState(false);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city.trim());

      setWeather(data);
    } catch (err) {
      setError("City not found");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = async (
    selectedCategory = "technology"
  ) => {
    try {
      setNewsLoading(true);

      const articles = await getNews(
        selectedCategory
      );

      setNews(articles || []);
      setCategory(selectedCategory);
    } catch (err) {
      console.error(err);
      setNews([]);
    } finally {
      setNewsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews("technology");
  }, []);

  return (
    <div
      className={`min-h-screen px-5 py-8 transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-[#031a45] via-[#091b63] to-[#3d106a]"
          : "bg-gradient-to-br from-sky-50 via-blue-50 to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-8">
          <ThemeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full mx-auto mb-5 bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center shadow-[0_0_35px_rgba(168,85,247,0.5)]">
            <Cloud
              className="text-white"
              size={38}
            />
          </div>

          <h1
            className={`text-5xl md:text-7xl font-extrabold ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Weather + News{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Dashboard
            </span>
          </h1>

          <p
            className={`mt-4 text-lg md:text-xl ${
              darkMode
                ? "text-white/70"
                : "text-slate-600"
            }`}
          >
            Real-time weather and latest news
            in one place
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-5xl mx-auto mb-10">
          <div
            className={`flex overflow-hidden rounded-3xl border backdrop-blur-xl ${
              darkMode
                ? "bg-[#081b52]/70 border-cyan-400/20 shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                : "bg-white border-slate-200 shadow-xl"
            }`}
          >
            <div className="flex items-center px-5">
              <MapPin
                className={
                  darkMode
                    ? "text-white/60"
                    : "text-slate-500"
                }
              />
            </div>

            <input
              type="text"
              value={city}
              placeholder="Enter city name..."
              onChange={(e) =>
                setCity(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                handleSearch()
              }
              className={`flex-1 py-5 bg-transparent outline-none text-lg ${
                darkMode
                  ? "text-white placeholder:text-white/50"
                  : "text-slate-900 placeholder:text-slate-500"
              }`}
            />

            <button
              onClick={handleSearch}
              className="px-10 font-bold text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:opacity-90"
            >
              Search
            </button>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-8 text-center bg-red-500/10 border border-red-500 text-red-500 rounded-xl p-4">
            {error}
          </div>
        )}

        {/* Weather Section */}
        {loading ? (
          <WeatherSkeleton />
        ) : (
          weather && (
            <WeatherCard
              weather={weather}
              darkMode={darkMode}
            />
          )
        )}

        {/* News Section */}
        <NewsSection
          news={news}
          category={category}
          fetchNews={fetchNews}
          newsLoading={newsLoading}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}