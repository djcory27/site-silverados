"use client";

import { useState, useEffect } from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white" | "accent";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  color = "primary",
  className = ""
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const colorClasses = {
    primary: "text-brand-primary",
    white: "text-white",
    accent: "text-brand-accent"
  };

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin rounded-full border-2 border-current border-t-transparent`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

interface LoadingDotsProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white" | "accent";
  className?: string;
}

export function LoadingDots({
  size = "md",
  color = "primary",
  className = ""
}: LoadingDotsProps) {
  const sizeClasses = {
    sm: "w-1 h-1",
    md: "w-2 h-2",
    lg: "w-3 h-3"
  };

  const colorClasses = {
    primary: "bg-brand-primary",
    white: "bg-white",
    accent: "bg-brand-accent"
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`} role="status" aria-label="Loading">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  );
}

interface LoadingPulseProps {
  className?: string;
}

export function LoadingPulse({ className = "" }: LoadingPulseProps) {
  return (
    <div className={`animate-pulse-glow-advanced ${className}`}>
      <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded w-1/2"></div>
    </div>
  );
}

interface PageLoaderProps {
  message?: string;
  className?: string;
}

export function PageLoader({
  message = "Loading...",
  className = ""
}: PageLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 100);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-brand-light/80 backdrop-blur-sm ${className}`}>
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-brand-dark font-medium mb-4">{message}</p>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-primary to-brand-accent transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-primary/20 rounded-full animate-liquid-float" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-brand-accent/20 rounded-full animate-liquid-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-brand-secondary/20 rounded-full animate-liquid-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </div>
  );
}
