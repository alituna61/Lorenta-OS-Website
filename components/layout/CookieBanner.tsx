"use client";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const CookieBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) setIsOpen(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
    
    localStorage.setItem("cookie_consent", "granted");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    // Tailwind uyarısı düzeltildi: max-w-[700px] yerine max-w-175 kullanıldı
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-99999 backdrop-blur-md bg-ink-primary/90 border border-[#262626] p-4 px-6 rounded-full shadow-lg w-[90%] max-w-175 flex items-center justify-between gap-6 text-sm text-[#a3a3a3]">
      <div className="flex items-center gap-4">
        {/* lucide-react yerine doğrudan SVG eklendi */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-[#525252] shrink-0"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <p className="flex-1 leading-relaxed">
          LorentaOS, deneyiminizi iyileştirmek için çerez kullanır.
        </p>
      </div>
      
      <div className="flex items-center gap-3 shrink-0">
        <button 
          onClick={() => setIsOpen(false)} 
          className="px-5 py-2.5 text-sm rounded-full border border-[#262626] hover:bg-neutral-800 transition-colors"
        >
          Reddet
        </button>
        <button 
          onClick={handleAccept} 
          className="px-5 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
};