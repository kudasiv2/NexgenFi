import { useState, useEffect, useRef } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useContract } from '@/hooks/useContract';
import { formatUSDT, formatNumber, truncateAddress } from '@/utils/formatters';
import { REFERRAL_PCT } from '@/contracts/orcaTrust';
import { 
  Users, 
  UserPlus, 
  Copy,
  CheckCircle,
  TrendingUp,
  Award,
  ChevronRight
} from 'lucide-react';

interface Referral {
  address: string;
  username: string;
  deposit: string;
}

export function Team() {
  const { isConnected, isRegistered, userInfo } = useWeb3();
  const { getDirectReferrals, getContractInfo } = useContract();
  const teamRef = useRef<HTMLDivElement>(null);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [copied, setCopied] = useState(false);
  const [contractStats, setContractStats] = useState<any>(null);

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

    const elements = teamRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (isConnected && isRegistered) {
        const directReferrals = await getDirectReferrals();
        const contractInfo = await getContractInfo();
        setContractStats(contractInfo);
        
        // Format referrals (in a real app, you'd fetch more details for each)
        const formattedReferrals = directReferrals.map((addr: string) => ({
          address: addr,
          username: '-',
          deposit: '0',
        }));
        setReferrals(formattedReferrals);
      }
    };

    fetchData();
  }, [isConnected, isRegistered, getDirectReferrals, getContractInfo]);

  const copyReferralLink = () => {
    if (userInfo?.username) {
      const link = `${window.location.origin}?ref=${userInfo.username}`;
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isConnected || !isRegistered) {
    return (
      <section id="team" ref={teamRef} className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center animate-on-scroll opacity-0">
            <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Your Team</h2>
            <p className="text-white/60">
              Connect your wallet and register to view your team and referral rewards.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="team" ref={teamRef} className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your <span className="gradient-text-blue">Team</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Build your network and earn rewards from up to 10 referral levels.
          </p>
        </div>

        {/* Referral Link */}
        <div className="glass-card p-6 mb-8 animate-on-scroll opacity-0 animation-delay-100">
          <div className="flex items-center gap-3 mb-4">
            <UserPlus className="w-6 h-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-white">Your Referral Link</h3>
          </div>
          <div className="flex gap-3">
            <div className="flex-1 glass-input py-3 px-4 text-white/60 truncate">
              {window.location.origin}?ref={userInfo?.username || 'your-username'}
            </div>
            <button
              onClick={copyReferralLink}
              className="glow-button px-6 flex items-center gap-2"
            >
              {copied ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
              <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-on-scroll opacity-0 animation-delay-200">
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-white/60">Directs</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {formatNumber(userInfo?.directsCount?.toString() || '0')}
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-sm text-white/60">Team Size</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {formatNumber(userInfo?.teamCount?.toString() || '0')}
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="text-sm text-white/60">Team Deposit</span>
            </div>
            <div className="text-2xl font-bold text-white">
              ${formatUSDT(userInfo?.teamActiveDeposit || 0)}
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <UserPlus className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-white/60">Platform Users</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {contractStats ? formatNumber(contractStats._totalRegisteredUsers.toString()) : '-'}
            </div>
          </div>
        </div>

        {/* Referral Levels */}
        <div className="glass-card p-6 mb-8 animate-on-scroll opacity-0 animation-delay-300">
          <h3 className="text-lg font-semibold text-white mb-6">Referral Rewards Structure</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {REFERRAL_PCT.map((pct, index) => (
              <div key={index} className="p-3 rounded-xl bg-white/5 text-center">
                <div className="text-xs text-white/40 mb-1">Level {index + 1}</div>
                <div className="text-lg font-bold text-blue-400">{pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Referrals */}
        <div className="glass-card p-6 animate-on-scroll opacity-0 animation-delay-400">
          <h3 className="text-lg font-semibold text-white mb-6">Direct Referrals</h3>
          {referrals.length === 0 ? (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-white/20 mx-auto mb-4" />
              <p className="text-white/40">No direct referrals yet</p>
              <p className="text-sm text-white/30 mt-2">
                Share your referral link to start building your team
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {referrals.map((referral, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {truncateAddress(referral.address)}
                      </div>
                      <div className="text-sm text-white/40">{referral.username}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <span>${referral.deposit}</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
