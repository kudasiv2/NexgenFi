import { useState, useEffect, useRef } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useContract } from '@/hooks/useContract';
import { formatUSDT, formatNumber } from '@/utils/formatters';
import { 
  TrendingUp, 
  Users, 
  Award,
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface RewardStats {
  dailyAvailable: string;
  dailyReserve: string;
  networkAvailable: string;
  networkReserve: string;
  referralRewards: string;
  onboardingRewards: string;
  rankRewards: string;
}

export function Rewards() {
  const { isConnected, isRegistered } = useWeb3();
  const { 
    getDailyRewards, 
    getNetworkRewards,
    withdrawDailyReward,
    compoundDailyReward,
    withdrawNetworkReward,
    compoundNetworkReward,
    manualCalculateRewards,
    txState 
  } = useContract();
  
  const rewardsRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState<RewardStats>({
    dailyAvailable: '0',
    dailyReserve: '0',
    networkAvailable: '0',
    networkReserve: '0',
    referralRewards: '0',
    onboardingRewards: '0',
    rankRewards: '0',
  });
  const [activeTab, setActiveTab] = useState<'daily' | 'network'>('daily');
  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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

    const elements = rewardsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchRewards = async () => {
      if (isConnected && isRegistered) {
        const daily = await getDailyRewards();
        const network = await getNetworkRewards();
        
        setStats({
          dailyAvailable: formatUSDT(daily.availableReward),
          dailyReserve: formatUSDT(daily.reserve),
          networkAvailable: formatUSDT(network.availableReward),
          networkReserve: formatUSDT(network.reserve),
          referralRewards: '0',
          onboardingRewards: '0',
          rankRewards: '0',
        });
      }
    };

    fetchRewards();
    const interval = setInterval(fetchRewards, 30000);
    return () => clearInterval(interval);
  }, [isConnected, isRegistered, getDailyRewards, getNetworkRewards]);

  const handleAction = async (action: string) => {
    setShowDialog(true);
    setMessage(null);

    let result;
    switch (action) {
      case 'withdrawDaily':
        result = await withdrawDailyReward('0');
        break;
      case 'compoundDaily':
        result = await compoundDailyReward('0');
        break;
      case 'withdrawNetwork':
        result = await withdrawNetworkReward('0');
        break;
      case 'compoundNetwork':
        result = await compoundNetworkReward('0');
        break;
      case 'manualCalc':
        result = await manualCalculateRewards();
        break;
      default:
        result = { success: false, error: 'Unknown action' };
    }

    setShowDialog(false);
    if (result.success) {
      setMessage({ type: 'success', text: `${action.replace(/([A-Z])/g, ' $1').trim()} successful!` });
    } else {
      setMessage({ type: 'error', text: result.error || 'Action failed' });
    }
  };

  if (!isConnected || !isRegistered) {
    return (
      <section id="rewards" ref={rewardsRef} className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center animate-on-scroll opacity-0">
            <Award className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Rewards</h2>
            <p className="text-white/60">
              Connect your wallet and register to start earning rewards.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rewards" ref={rewardsRef} className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your <span className="gradient-text-blue">Rewards</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Withdraw or compound your earnings to maximize your returns.
          </p>
        </div>

        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
            message.type === 'success' 
              ? 'bg-green-500/10 border border-green-500/30' 
              : 'bg-red-500/10 border border-red-500/30'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-500" />
            )}
            <span className={message.type === 'success' ? 'text-green-400' : 'text-red-400'}>
              {message.text}
            </span>
          </div>
        )}

        {/* Tabs */}
        <div className="flex justify-center mb-8 animate-on-scroll opacity-0 animation-delay-100">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveTab('daily')}
              className={`tab-button ${activeTab === 'daily' ? 'active' : ''}`}
            >
              Daily Rewards
            </button>
            <button
              onClick={() => setActiveTab('network')}
              className={`tab-button ${activeTab === 'network' ? 'active' : ''}`}
            >
              Network Rewards
            </button>
          </div>
        </div>

        {/* Daily Rewards */}
        {activeTab === 'daily' && (
          <div className="glass-card p-8 animate-on-scroll opacity-0 animation-delay-200">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">Daily Rewards</h3>
              </div>
              <button
                onClick={() => handleAction('manualCalc')}
                disabled={txState.isLoading}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                title="Manual Calculate"
              >
                <RefreshCw className={`w-5 h-5 text-white/60 ${txState.isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-white/60 mb-1">Available to Withdraw</div>
                <div className="text-2xl font-bold text-white">${formatNumber(stats.dailyAvailable)}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-white/60 mb-1">Reserve</div>
                <div className="text-2xl font-bold text-white/80">${formatNumber(stats.dailyReserve)}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAction('withdrawDaily')}
                disabled={txState.isLoading || parseFloat(stats.dailyAvailable) === 0}
                className="glow-button py-4 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <ArrowDownLeft className="w-5 h-5" />
                Withdraw All
              </button>
              <button
                onClick={() => handleAction('compoundDaily')}
                disabled={txState.isLoading || parseFloat(stats.dailyAvailable) === 0}
                className="glow-button-secondary py-4 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <ArrowUpRight className="w-5 h-5" />
                Compound All
              </button>
            </div>
          </div>
        )}

        {/* Network Rewards */}
        {activeTab === 'network' && (
          <div className="glass-card p-8 animate-on-scroll opacity-0 animation-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-white">Network Rewards</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-white/60 mb-1">Available to Withdraw</div>
                <div className="text-2xl font-bold text-white">${formatNumber(stats.networkAvailable)}</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <div className="text-sm text-white/60 mb-1">Reserve</div>
                <div className="text-2xl font-bold text-white/80">${formatNumber(stats.networkReserve)}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAction('withdrawNetwork')}
                disabled={txState.isLoading || parseFloat(stats.networkAvailable) === 0}
                className="glow-button py-4 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <ArrowDownLeft className="w-5 h-5" />
                Withdraw All
              </button>
              <button
                onClick={() => handleAction('compoundNetwork')}
                disabled={txState.isLoading || parseFloat(stats.networkAvailable) === 0}
                className="glow-button-secondary py-4 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <ArrowUpRight className="w-5 h-5" />
                Compound All
              </button>
            </div>
          </div>
        )}

        {/* Transaction Dialog */}
        <Dialog open={showDialog} onOpenChange={() => {}}>
          <DialogContent className="glass-card border-white/10">
            <DialogHeader>
              <DialogTitle className="text-white text-center">
                Processing Transaction
              </DialogTitle>
              <DialogDescription className="text-white/60 text-center">
                Please confirm the transaction in your wallet...
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center py-8">
              <div className="spinner w-12 h-12" />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
