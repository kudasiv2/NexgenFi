import { useEffect, useRef, useState } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useContract } from '@/hooks/useContract';
import { formatUSDT, formatNumber, formatRank } from '@/utils/formatters';
import { 
  Wallet, 
  TrendingUp, 
  Users, 
  Award, 
  Clock,
  DollarSign,
  BarChart3,
  Target
} from 'lucide-react';

interface DashboardStats {
  totalDeposited: string;
  totalActiveDeposit: string;
  totalWithdrawn: string;
  dailyReturn: string;
  teamCount: number;
  directsCount: number;
  rank: number;
  dailyRewards: string;
  networkRewards: string;
}

export function Dashboard() {
  const { isConnected, isRegistered, userInfo, userInfoExtra } = useWeb3();
  const { getDailyRewards, getNetworkRewards, getContractInfo } = useContract();
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState<DashboardStats>({
    totalDeposited: '0',
    totalActiveDeposit: '0',
    totalWithdrawn: '0',
    dailyReturn: '0',
    teamCount: 0,
    directsCount: 0,
    rank: 0,
    dailyRewards: '0',
    networkRewards: '0',
  });
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

    const elements = dashboardRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchRewards = async () => {
      if (isConnected && isRegistered) {
        const daily = await getDailyRewards();
        const network = await getNetworkRewards();
        const contractInfo = await getContractInfo();
        
        setStats(prev => ({
          ...prev,
          dailyRewards: formatUSDT(daily.availableReward + daily.reserve),
          networkRewards: formatUSDT(network.availableReward + network.reserve),
        }));
        
        setContractStats(contractInfo);
      }
    };

    fetchRewards();
    const interval = setInterval(fetchRewards, 30000);
    return () => clearInterval(interval);
  }, [isConnected, isRegistered, getDailyRewards, getNetworkRewards, getContractInfo]);

  useEffect(() => {
    if (userInfo && userInfoExtra) {
      setStats(prev => ({
        ...prev,
        totalDeposited: formatUSDT(userInfo._totalDeposited),
        totalActiveDeposit: formatUSDT(userInfoExtra._totalActiveDeposit),
        totalWithdrawn: formatUSDT(userInfo._totalWithdrawn),
        dailyReturn: formatUSDT(userInfoExtra.dailyReturnAmount),
        teamCount: Number(userInfoExtra.teamCount),
        directsCount: Number(userInfoExtra.directsCount),
        rank: Number(userInfoExtra.rank),
      }));
    }
  }, [userInfo, userInfoExtra]);

  const statCards = [
    {
      label: 'Total Deposited',
      value: `$${stats.totalDeposited}`,
      subValue: 'USDT',
      icon: Wallet,
      color: 'blue',
    },
    {
      label: 'Active Deposit',
      value: `$${stats.totalActiveDeposit}`,
      subValue: 'USDT',
      icon: Target,
      color: 'green',
    },
    {
      label: 'Daily Return',
      value: `$${stats.dailyReturn}`,
      subValue: 'USDT/day',
      icon: TrendingUp,
      color: 'purple',
    },
    {
      label: 'Total Withdrawn',
      value: `$${stats.totalWithdrawn}`,
      subValue: 'USDT',
      icon: DollarSign,
      color: 'orange',
    },
  ];

  const rewardCards = [
    {
      label: 'Daily Rewards',
      value: `$${stats.dailyRewards}`,
      icon: Clock,
      description: 'Available to withdraw or compound',
    },
    {
      label: 'Network Rewards',
      value: `$${stats.networkRewards}`,
      icon: BarChart3,
      description: 'Referral & leadership rewards',
    },
  ];

  if (!isConnected) {
    return (
      <section id="dashboard" ref={dashboardRef} className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12 text-center animate-on-scroll opacity-0">
            <Wallet className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Connect Your Wallet</h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Connect your wallet to view your dashboard and manage your investments.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!isRegistered) {
    return (
      <section id="dashboard" ref={dashboardRef} className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-12 text-center animate-on-scroll opacity-0">
            <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Register to Start</h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              You need to register with a username and referrer to access the platform.
            </p>
            <a href="#invest" className="glow-button px-8 py-3 text-white font-semibold inline-flex items-center gap-2">
              Register Now
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="dashboard" ref={dashboardRef} className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your <span className="gradient-text-blue">Dashboard</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Track your investments, rewards, and team performance in real-time.
          </p>
        </div>

        {/* Rank Badge */}
        <div className="flex justify-center mb-8 animate-on-scroll opacity-0 animation-delay-100">
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
            <Award className="w-6 h-6 text-blue-500" />
            <span className="text-white font-semibold">Rank: {formatRank(stats.rank)}</span>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 animate-on-scroll opacity-0 animation-delay-200">
          {statCards.map((card) => (
            <div key={card.label} className="stats-card">
              <div className="flex items-center justify-between mb-4">
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
                <span className="text-xs text-white/40 uppercase tracking-wider">{card.subValue}</span>
              </div>
              <div className="stats-value">{card.value}</div>
              <div className="stats-label">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Rewards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8 animate-on-scroll opacity-0 animation-delay-300">
          {rewardCards.map((card) => (
            <div key={card.label} className="glass-card glass-card-hover p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-white/60 mb-1">{card.label}</div>
                  <div className="text-2xl font-bold text-white">{card.value}</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <card.icon className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <p className="text-sm text-white/40">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="glass-card p-6 animate-on-scroll opacity-0 animation-delay-400">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-white">Team Statistics</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-white">{formatNumber(stats.teamCount)}</div>
              <div className="text-sm text-white/60">Total Team</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{formatNumber(stats.directsCount)}</div>
              <div className="text-sm text-white/60">Direct Referrals</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                {contractStats ? formatNumber(contractStats._totalRegisteredUsers.toString()) : '-'}
              </div>
              <div className="text-sm text-white/60">Platform Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                {contractStats ? `$${formatUSDT(contractStats._totalWithdrawn)}` : '-'}
              </div>
              <div className="text-sm text-white/60">Total Withdrawn</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
