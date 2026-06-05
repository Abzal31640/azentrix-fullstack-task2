import NewsCard from "./NewsCard";
import NewsSkeleton from "./NewsSkeleton";

export default function NewsSection({
  news,
  category,
  fetchNews,
  newsLoading,
  darkMode,
}) {
  const categories = [
    "technology",
    "business",
    "sports",
    "health",
    "entertainment",
  ];

  return (
    <div
      className={`rounded-[35px] p-8 ${
        darkMode
          ? "bg-[#09163d]/80 border border-white/10"
          : "bg-white shadow-xl border border-slate-200"
      }`}
    >
      <h2
        className={`text-4xl font-bold mb-8 ${
          darkMode
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        📰 Top News
      </h2>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => fetchNews(cat)}
            className={`px-5 py-3 rounded-xl capitalize transition ${
              category === cat
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : darkMode
                ? "bg-white/10 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {newsLoading ? (
        <NewsSkeleton />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              darkMode={darkMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}