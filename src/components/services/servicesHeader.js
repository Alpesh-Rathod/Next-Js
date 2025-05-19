// pages/about-us.js
import Link from 'next/link';

export default function ServicesHeader() {
  return (
    <div className="breadcrumb-section">
      <div className="relative w-full h-48 bg-gray-900">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60"
          style={{ 
            backgroundImage: "url('/service-bg.jpg')" 
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <nav className="flex items-center text-sm text-white">
            <Link href="/" className="flex items-center hover:text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-300">
               Company
            </span>
          </nav>
          {/* Page title */}
          <h1 className="text-white text-2xl font-semibold">
            Services
          </h1>
        </div>
      </div>
      
    </div>
  );
}