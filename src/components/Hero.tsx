/* biome-ignore lint/suspicious/noCommentText: <explanation> */
/* biome-ignore lint/style/useSelfClosingElements: <explanation> */
"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Limit the movement effect
      const maxDistance = 50;
      const moveX = (clientX - centerX) / 40; // Makes the movement more subtle
      const moveY = (clientY - centerY) / 40;

      setMousePosition({
        x: Math.min(Math.max(moveX, -maxDistance), maxDistance),
        y: Math.min(Math.max(moveY, -maxDistance), maxDistance)
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add the isLoaded state after a short delay for animation entrance
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-github-deepblue">
      {/* Purple gradient background */}
      <div className="absolute inset-0 github-hero-glow opacity-70 z-0" />

      {/* Light diffusion animation elements */}
      <div
        className={`absolute left-1/2 top-1/3 z-0 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translate(-50%, -50%) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Main glow */}
        <div className="w-[600px] h-[600px] rounded-full bg-github-purple/20 blur-[100px] animate-pulse" />

        {/* Secondary glows */}
        <div className="absolute left-1/2 top-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-github-teal/15 blur-[80px] animate-pulse"
             style={{ animationDelay: '0.5s', animationDuration: '5s' }} />

        <div className="absolute left-1/2 top-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-github-magenta/15 blur-[60px] animate-pulse"
             style={{ animationDelay: '1s', animationDuration: '7s' }} />

        {/* Sparkle elements */}
        <div className="absolute w-2 h-2 bg-white rounded-full left-[30%] top-[40%] animate-twinkle"
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute w-3 h-3 bg-white rounded-full left-[70%] top-[30%] animate-twinkle"
             style={{ animationDelay: '0.7s', animationDuration: '4s' }} />
        <div className="absolute w-1 h-1 bg-white rounded-full left-[40%] top-[60%] animate-twinkle"
             style={{ animationDelay: '1.5s', animationDuration: '5s' }} />
        <div className="absolute w-2 h-2 bg-white rounded-full left-[60%] top-[65%] animate-twinkle"
             style={{ animationDelay: '2.1s', animationDuration: '3.5s' }} />
        <div className="absolute w-1 h-1 bg-white rounded-full left-[20%] top-[50%] animate-twinkle"
             style={{ animationDelay: '1.2s', animationDuration: '4.2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32 max-w-7xl">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          MIKDAD MK
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl">
            Join the worlds most widely adopted Mikku AI-powered developer platform.
          </p>

          <div className="w-full max-w-xs mb-10">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-transparent border border-zinc-700 rounded-md text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-github-purple/50"
                />
              </div>

              <Button className="w-full bg-white text-black hover:bg-zinc-200 hover:text-black transition-colors font-semibold py-6">
                Sign up for GitHub
              </Button>

              <div className="flex items-center justify-center">
                <span className="inline-block border-t border-zinc-700 w-full" />
                <span className="px-2 text-zinc-500 text-sm">or</span>
                <span className="inline-block border-t border-zinc-700 w-full" />
              </div>

              <Button
                className="w-full github-button-gradient text-white hover:opacity-90 transition-opacity font-semibold py-6"
              >
                Try GitHub Copilot
              </Button>
            </div>
          </div>
        </div>

        {/* GitHub UI Screenshot */}
        <div className="mt-12 relative max-w-5xl mx-auto">
          <div className="w-full h-full absolute top-0 left-0 z-0 bg-purple-gradient opacity-30" />
          <div className="rounded-lg overflow-hidden border border-zinc-800 shadow-2xl relative z-10">
            <div className="flex items-center px-4 py-2 bg-zinc-900 border-b border-zinc-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="bg-zinc-950 py-2 px-4">
              <div className="bg-zinc-900 rounded-md p-4">
                <p className="text-zinc-400 text-sm font-mono">{"// Sample code highlighting"}</p>
                <p className="text-github-purple text-sm font-mono">function <span className="text-github-teal">getRepositories</span>() &#123;</p>
                <p className="text-zinc-300 text-sm font-mono pl-4">return github.<span className="text-github-magenta">search</span>();</p>
                <p className="text-github-purple text-sm font-mono">&#125;</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand logos */}
      <div className="bg-github-deepblue py-10 border-t border-zinc-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-zinc-500 text-sm mb-6">GitHub is used by</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {/* These would be replaced with actual SVG logos */}
            <div className="text-zinc-400 font-semibold">Shopify</div>
            <div className="text-zinc-400 font-semibold">Stripe</div>
            <div className="text-zinc-400 font-semibold">Mercedes-Benz</div>
            <div className="text-zinc-400 font-semibold">Figma</div>
            <div className="text-zinc-400 font-semibold">Duolingo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
