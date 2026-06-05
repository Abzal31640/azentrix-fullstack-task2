import {
  Cloud,
  Droplets,
  Wind,
  Gauge,
  Eye,
} from "lucide-react";

export default function WeatherCard({
  weather,
  darkMode,
}) {
  if (!weather) return null;

  const stats = [
    {
      icon: <Droplets size={28} />,
      title: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      icon: <Wind size={28} />,
      title: "Wind",
      value: `${weather.wind.speed} km/h`,
    },
    {
      icon: <Gauge size={28} />,
      title: "Pressure",
      value: `${weather.main.pressure} hPa`,
    },
    {
      icon: <Eye size={28} />,
      title: "Visibility",
      value: `${(
        weather.visibility / 1000
      ).toFixed(1)} km`,
    },
  ];

  return (
    <div
      className={`rounded-[35px] p-8 mb-12 transition-all ${
        darkMode
          ? "bg-gradient-to-r from-[#163d9c]/70 to-[#5a1dbd]/50 backdrop-blur-xl border border-white/10"
          : "bg-white shadow-2xl border border-slate-200"
      }`}
    >
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Section */}
        <div className="flex items-center gap-8">
          <div
            className={`w-44 h-44 rounded-full flex items-center justify-center ${
              darkMode
                ? "bg-white/5 border border-white/10"
                : "bg-slate-100 border border-slate-200"
            }`}
          >
            <Cloud
              size={90}
              className="text-yellow-400"
            />
          </div>

          <div>
            <h2
              className={`text-5xl font-bold ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {weather.name},{" "}
              {weather.sys?.country}
            </h2>

            <p
              className={`capitalize text-xl mt-2 ${
                darkMode
                  ? "text-white/70"
                  : "text-slate-600"
              }`}
            >
              {
                weather.weather?.[0]
                  ?.description
              }
            </p>

            <h3
              className={`text-7xl font-bold mt-4 ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              {Math.round(weather.main.temp)}
              °C
            </h3>

            <p
              className={
                darkMode
                  ? "text-white/70"
                  : "text-slate-600"
              }
            >
              Feels like{" "}
              {Math.round(
                weather.main.feels_like
              )}
              °C
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="flex justify-center text-cyan-400">
                {item.icon}
              </div>

              <p
                className={`mt-3 ${
                  darkMode
                    ? "text-white/70"
                    : "text-slate-500"
                }`}
              >
                {item.title}
              </p>

              <h4
                className={`text-3xl font-bold ${
                  darkMode
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                {item.value}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}