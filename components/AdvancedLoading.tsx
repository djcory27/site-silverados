'use client';

import { useState, useEffect } from 'react';

interface LoadingProps {
  type?: 'spinner' | 'pulse' | 'bars' | 'dots' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
  fullScreen?: boolean;
}

export default function AdvancedLoading({
  type = 'spinner',
  size = 'md',
  color = '#2563eb',
  text,
  fullScreen = false
}: LoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (type === 'bars') {
      const interval = setInterval(() => {
        setProgress(prev => (prev + 1) % 101);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [type]);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const renderLoader = () => {
    switch (type) {
      case 'spinner':
        return (
          <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-${color} rounded-full animate-spin`} />
        );

      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} bg-${color} rounded-full animate-pulse`} />
        );

      case 'bars':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1 bg-blue-500 animate-pulse"
                style={{
                  height: `${20 + Math.sin((progress + i * 20) * Math.PI / 50) * 10}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );

      case 'skeleton':
        return (
          <div className="space-y-4">
            <div className="skeleton skeleton-rect" />
            <div className="space-y-2">
              <div className="skeleton skeleton-text" />
              <div className="skeleton skeleton-text" />
              <div className="skeleton skeleton-text" />
            </div>
            <div className="flex space-x-4">
              <div className="skeleton skeleton-circle" />
              <div className="flex-1 space-y-2">
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text" />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      {renderLoader()}
      {text && (
        <p className="text-gray-600 text-center animate-pulse">{text}</p>
      )}
      {type === 'bars' && (
        <div className="w-full max-w-xs">
          <div className="progress-advanced">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">{progress}%</p>
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      {content}
    </div>
  );
}

// Skeleton Card Component
export function SkeletonCard() {
  return (
    <div className="card p-6 space-y-4">
      <div className="skeleton skeleton-rect h-48" />
      <div className="space-y-2">
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text w-3/4" />
        <div className="skeleton skeleton-text w-1/2" />
      </div>
      <div className="flex space-x-4">
        <div className="skeleton skeleton-circle w-10 h-10" />
        <div className="flex-1 space-y-2">
          <div className="skeleton skeleton-text" />
          <div className="skeleton skeleton-text w-2/3" />
        </div>
      </div>
    </div>
  );
}

// Loading Button Component
export function LoadingButton({
  loading,
  children,
  onClick,
  ...props
}: {
  loading: boolean;
  children: React.ReactNode;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`btn-primary ${loading ? 'btn-loading' : ''}`}
      {...props}
    >
      {loading ? '' : children}
    </button>
  );
}
