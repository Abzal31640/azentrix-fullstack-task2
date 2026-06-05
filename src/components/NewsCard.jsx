export default function NewsCard({
  article,
  darkMode,
}) {
  return (
    <div
      className={`rounded-3xl overflow-hidden transition hover:scale-105 ${
        darkMode
          ? "bg-white/5 border border-white/10"
          : "bg-white border border-slate-200 shadow-lg"
      }`}
    >
      <img
        src={
          article.image ||
          article.urlToImage ||
          "https://via.placeholder.com/400x250"
        }
        alt={article.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3
          className={`font-bold text-lg line-clamp-2 ${
            darkMode
              ? "text-white"
              : "text-slate-900"
          }`}
        >
          {article.title}
        </h3>

        <p
          className={`mt-3 text-sm line-clamp-3 ${
            darkMode
              ? "text-white/60"
              : "text-slate-600"
          }`}
        >
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 text-cyan-500 font-semibold"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}