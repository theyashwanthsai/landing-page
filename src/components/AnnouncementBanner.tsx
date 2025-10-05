import React from 'react';

interface AnnouncementBannerProps {
  message?: string;
  linkText?: string;
  linkUrl?: string;
  badge?: string;
  emoji?: string;
}

export function AnnouncementBanner({ 
  message = "TuriLabs makes it to NeurIPS 2025!",
  linkText = "Learn more →",
  linkUrl = "/research",
  badge = "NEWS",
  emoji = "🎉"
}: AnnouncementBannerProps) {
  return (
    <div className="relative z-40 bg-white bg-opacity-80 backdrop-blur-sm border-b border-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-50 text-pink-600">
              {emoji} {badge}
            </span>
            <span className="text-sm font-medium text-primary">
              {message}
            </span>
            <a 
              href={linkUrl} 
              className="text-sm text-pink-500 hover:text-pink-700 font-medium underline transition-colors"
            >
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
