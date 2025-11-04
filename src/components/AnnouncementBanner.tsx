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
  linkUrl = "/blog/neurips-workshop-acceptance",
}: AnnouncementBannerProps) {
  return (
    <div className="relative z-40 bg-black border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm font-medium text-pink-300">
            {message}
          </span>
          <a 
            href={linkUrl}
            className="text-sm text-pink-200 hover:text-white font-medium underline transition-colors"
          >
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
}
