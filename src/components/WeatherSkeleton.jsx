export default function WeatherSkeleton() {
  return (
    <div className="animate-pulse rounded-[35px] p-8 mb-12 bg-white/10 h-80">
      <div className="h-12 bg-white/20 rounded w-1/3 mb-4"></div>
      <div className="h-24 bg-white/20 rounded w-1/4 mb-4"></div>
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-20 rounded bg-white/20"
          />
        ))}
      </div>
    </div>
  );
}