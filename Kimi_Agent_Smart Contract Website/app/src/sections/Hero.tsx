import { useEffect, useRef } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

export function Hero() {
  const { isConnected, connectWallet, isConnecting } = useWeb3();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Daily ROI', value: '2.22%', icon: TrendingUp },
    { label: 'Cycle Duration', value: '45 Days', icon: Shield },
    { label: 'Referral Levels', value: '10 Levels', icon: Users },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-on-scroll opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-blue-400 font-medium">Decentralized Investment Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-on-scroll opacity-0 animation-delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Grow Your Wealth with{' '}
            <span className="gradient-text-blue">OrcaTrust</span>
          </h1>

          {/* Subheading */}
          <p className="animate-on-scroll opacity-0 animation-delay-200 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            A secure and transparent DeFi investment platform powered by smart contracts. 
            Earn daily rewards, build your team, and unlock unlimited potential.
          </p>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 animation-delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {!isConnected ? (
              <button
                onClick={connectWallet}
                disabled={isConnecting}
                className="glow-button px-8 py-4 text-lg font-semibold text-white flex items-center gap-3"
              >
                {isConnecting ? (
                  <div className="spinner" />
                ) : (
                  <>
                    Connect Wallet
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            ) : (
              <a
                href="#dashboard"
                className="glow-button px-8 py-4 text-lg font-semibold text-white flex items-center gap-3"
              >
                View Dashboard
                <ArrowRight className="w-5 h-5" />
              </a>
            )}
            <a
              href="#invest"
              className="glow-button-secondary px-8 py-4 text-lg font-semibold text-white"
            >
              Start Investing
            </a>
          </div>

          {/* Stats */}
          <div className="animate-on-scroll opacity-0 animation-delay-400 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card glass-card-hover p-6 flex flex-col items-center"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-blue-500 mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
