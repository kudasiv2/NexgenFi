import { Github, Twitter, MessageCircle, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: MessageCircle, href: '#', label: 'Telegram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Website' },
  ];

  const navLinks = [
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'Invest', href: '#invest' },
    { label: 'Rewards', href: '#rewards' },
    { label: 'Team', href: '#team' },
    { label: 'Positions', href: '#positions' },
  ];

  return (
    <footer className="w-full border-t border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">O</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Orca<span className="text-blue-500">Trust</span>
                </span>
              </a>
              <p className="text-white/60 max-w-md mb-6">
                A secure and transparent decentralized investment platform powered by smart contracts. 
                Earn daily rewards, build your team, and unlock unlimited potential.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contract Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contract</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-white/40 mb-1">Address</div>
                  <a
                    href="https://bscscan.com/address/0x98929d0c70e45FeE1C3BbF0E693D443F24EB457a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors break-all"
                  >
                    0x98929d0c70e45FeE1C3BbF0E693D443F24EB457a
                  </a>
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">Network</div>
                  <div className="text-sm text-white/60">BNB Smart Chain</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              {currentYear} OrcaTrust. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
