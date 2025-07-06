import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-2xl lg:max-w-4xl mx-auto text-center px-4">
        {/* Logo section */}
        <div className="mb-8 sm:mb-12">
          <div className="relative inline-block">
            <Image
              src="/bixor-icon.png"
              alt="Bixor Logo"
              width={80}
              height={80}
              className="mx-auto mb-4 sm:mb-6 drop-shadow-2xl sm:w-[120px] sm:h-[120px]"
              priority
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-white rounded-full scale-150"></div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light text-white mb-3 sm:mb-4 tracking-tight">
            BIXOR
          </h1>
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mx-auto mb-3 sm:mb-4"></div>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-light text-zinc-400 tracking-wide">
            Trading Interface
          </h2>
        </div>

        {/* Content section */}
        <div className="mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto">
          <p className="text-base sm:text-xl md:text-2xl text-zinc-300 mb-6 sm:mb-8 font-light leading-relaxed px-4 sm:px-0">
            A sophisticated trading platform designed for the modern trader.
          </p>
        </div>

        {/* Discord section */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-zinc-500 text-base sm:text-lg font-light">Join our community</p>
          <a
            href="https://discord.gg/NHVv5qNXNj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg text-white font-medium transition-all duration-300 hover:bg-zinc-800 hover:scale-105 group text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Discord
          </a>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-6 sm:mt-0 sm:absolute sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 text-zinc-600 text-xs sm:text-sm font-light text-center">
        © 2024 Bixor. All rights reserved.
      </div>
    </div>
  );
}
