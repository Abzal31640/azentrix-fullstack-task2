export default function NewsSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="animate-pulse rounded-3xl bg-white/10 h-80"
        />
      ))}
    </div>
  );
}