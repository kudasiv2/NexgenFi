import { useState, useEffect } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { truncateAddress } from '@/utils/formatters';
import { Wallet, Menu, X, LogOut, User } from 'lucide-react';

export function Navigation() {
  const { account, isConnected, isConnecting, connectWallet, disconnectWallet } = useWeb3();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Invest', href: '#invest' },
    { label: 'Rewards', href: '#rewards' },
    { label: 'Team', href: '#team' },
    { label: 'Positions', href: '#positions' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-glass' : 'bg-transparent'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-white hidden sm:block">
                Orca<span className="text-blue-500">Trust</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Wallet Button */}
            <div className="flex items-center gap-4">
              {isConnected ? (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                    <User className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-white/80">{truncateAddress(account!)}</span>
                  </div>
                  <button
                    onClick={disconnectWallet}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <LogOut className="w-5 h-5 text-white/60" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="glow-button px-5 py-2.5 text-sm font-semibold text-white flex items-center gap-2"
                >
                  {isConnecting ? (
                    <div className="spinner" />
                  ) : (
                    <>
                      <Wallet className="w-4 h-4" />
                      <span className="hidden sm:inline">Connect Wallet</span>
                      <span className="sm:hidden">Connect</span>
                    </>
                  )}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
