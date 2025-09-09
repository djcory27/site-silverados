'use client';

import { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  feelsLike: number;
  uvIndex: number;
  visibility: number;
}

const mockWeatherData: WeatherData = {
  temperature: 72,
  condition: 'Sunny',
  humidity: 45,
  windSpeed: 8,
  icon: '☀️',
  feelsLike: 75,
  uvIndex: 6,
  visibility: 10
};

const weatherTips = [
  {
    condition: 'Sunny',
    tip: 'Perfect weather for outdoor activities! Don\'t forget sunscreen for both you and your dog.',
    icon: '🧴'
  },
  {
    condition: 'Cloudy',
    icon: '☁️',
    tip: 'Comfortable weather for playtime. Great for extended outdoor activities.'
  },
  {
    condition: 'Rainy',
    icon: '🌧️',
    tip: 'Indoor activities recommended. Check our covered seating areas for dry fun.'
  },
  {
    condition: 'Windy',
    icon: '💨',
    tip: 'Keep an eye on small dogs and loose items. Great day for fetch games!'
  }
];

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>(mockWeatherData);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate weather API call
  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWeather(mockWeatherData);
      setIsLoading(false);
    };

    fetchWeather();
  }, []);

  const getWeatherTip = (condition: string) => {
    return weatherTips.find(tip => tip.condition.toLowerCase().includes(condition.toLowerCase())) || weatherTips[0];
  };

  const currentTip = getWeatherTip(weather.condition);

  const getUVIndexColor = (uvIndex: number) => {
    if (uvIndex <= 2) return 'text-green-600 bg-green-100';
    if (uvIndex <= 5) return 'text-yellow-600 bg-yellow-100';
    if (uvIndex <= 7) return 'text-orange-600 bg-orange-100';
    if (uvIndex <= 10) return 'text-red-600 bg-red-100';
    return 'text-purple-600 bg-purple-100';
  };

  const getTemperatureColor = (temp: number) => {
    if (temp < 50) return 'text-blue-600';
    if (temp < 70) return 'text-green-600';
    if (temp < 85) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Today's Weather</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Updated just now</span>
        </div>
      </div>

      {isLoading ? (
        <div className="animate-pulse">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>
                <div className="h-8 bg-gray-200 rounded w-24 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
            <div className="text-right">
              <div className="h-12 bg-gray-200 rounded w-20 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Main Weather Display */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{weather.icon}</div>
              <div>
                <div className={`text-4xl font-black ${getTemperatureColor(weather.temperature)}`}>
                  {weather.temperature}°F
                </div>
                <div className="text-lg text-gray-600 font-medium">{weather.condition}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{weather.feelsLike}°F</div>
              <div className="text-sm text-gray-600">Feels like</div>
            </div>
          </div>

          {/* Weather Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Humidity</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{weather.humidity}%</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l.707.707A1 1 0 0012.414 11H15m-3 7.5A9.5 9.5 0 1121.5 12 9.5 9.5 0 0112 2.5z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Wind</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{weather.windSpeed} mph</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">☀️</span>
                <span className="text-sm font-semibold text-gray-700">UV Index</span>
              </div>
              <div className={`text-2xl font-bold px-2 py-1 rounded-lg inline-block ${getUVIndexColor(weather.uvIndex)}`}>
                {weather.uvIndex}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Visibility</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{weather.visibility} mi</div>
            </div>
          </div>

          {/* Weather Tip */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-100">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{currentTip.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Weather Tip</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{currentTip.tip}</p>
              </div>
            </div>
          </div>

          {/* Park Status */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-800">Park is Open</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
