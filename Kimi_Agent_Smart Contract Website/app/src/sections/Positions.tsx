import { useState, useEffect, useRef } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useContract } from '@/hooks/useContract';
import { formatUSDT, formatDate, formatRelativeTime, getPositionSource } from '@/utils/formatters';
import { 
  Layers, 
  Clock, 
  TrendingUp,
  CheckCircle,
  XCircle,
  Calendar,
  Wallet
} from 'lucide-react';

interface Position {
  amount: bigint;
  startTime: bigint;
  lastCheckpoint: bigint;
  endTime: bigint;
  earned: bigint;
  expectedTotalEarn: bigint;
  source: number;
  active: boolean;
  nextProfitTime: bigint;
}

export function Positions() {
  const { isConnected, isRegistered } = useWeb3();
  const { getPositions } = useContract();
  const positionsRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Position[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

    const elements = positionsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchPositions = async () => {
      if (isConnected && isRegistered) {
        setIsLoading(true);
        const data = await getPositions();
        setPositions(data.reverse()); // Show newest first
        setIsLoading(false);
      }
    };

    fetchPositions();
    const interval = setInterval(fetchPositions, 60000);
    return () => clearInterval(interval);
  }, [isConnected, isRegistered, getPositions]);

  const calculateProgress = (position: Position): number => {
    const now = Math.floor(Date.now() / 1000);
    const start = Number(position.startTime);
    const end = Number(position.endTime);
    const total = end - start;
    const elapsed = now - start;
    return Math.min(100, Math.max(0, (elapsed / total) * 100));
  };

  const calculateDailyReturn = (amount: bigint): string => {
    return formatUSDT((amount * BigInt(222)) / BigInt(10000));
  };

  if (!isConnected || !isRegistered) {
    return (
      <section id="positions" ref={positionsRef} className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center animate-on-scroll opacity-0">
            <Layers className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Your Positions</h2>
            <p className="text-white/60">
              Connect your wallet and register to view your investment positions.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="positions" ref={positionsRef} className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Your <span className="gradient-text-blue">Positions</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Track all your investments and their performance over time.
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 animate-on-scroll opacity-0 animation-delay-100">
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-white/60">Total Positions</span>
            </div>
            <div className="text-2xl font-bold text-white">{positions.length}</div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm text-white/60">Active</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {positions.filter(p => p.active).length}
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <span className="text-sm text-white/60">Completed</span>
            </div>
            <div className="text-2xl font-bold text-white">
              {positions.filter(p => !p.active).length}
            </div>
          </div>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <span className="text-sm text-white/60">Total Earned</span>
            </div>
            <div className="text-2xl font-bold text-white">
              ${formatUSDT(positions.reduce((acc, p) => acc + p.earned, BigInt(0)))}
            </div>
          </div>
        </div>

        {/* Positions List */}
        <div className="space-y-4 animate-on-scroll opacity-0 animation-delay-200">
          {isLoading ? (
            <div className="glass-card p-12 text-center">
              <div className="spinner w-8 h-8 mx-auto" />
              <p className="text-white/60 mt-4">Loading positions...</p>
            </div>
          ) : positions.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <Wallet className="w-16 h-16 text-white/20 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-2">No Positions Yet</h3>
              <p className="text-white/60 mb-6">
                Start investing to create your first position
              </p>
              <a href="#invest" className="glow-button px-8 py-3 text-white font-semibold inline-block">
                Make a Deposit
              </a>
            </div>
          ) : (
            positions.map((position, index) => (
              <div
                key={index}
                className={`glass-card p-6 ${!position.active ? 'opacity-60' : ''}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      position.active 
                        ? 'bg-green-500/20' 
                        : 'bg-gray-500/20'
                    }`}>
                      {position.active ? (
                        <TrendingUp className="w-6 h-6 text-green-500" />
                      ) : (
                        <CheckCircle className="w-6 h-6 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-white">
                          ${formatUSDT(position.amount)}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-xs ${
                          position.active
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {position.active ? 'Active' : 'Completed'}
                        </span>
                      </div>
                      <div className="text-sm text-white/60">
                        {getPositionSource(Number(position.source))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-right">
                      <div className="text-white/40">Daily Return</div>
                      <div className="text-green-400 font-medium">
                        +${calculateDailyReturn(position.amount)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white/40">Earned</div>
                      <div className="text-white font-medium">
                        ${formatUSDT(position.earned)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Progress</span>
                    <span className="text-white">{calculateProgress(position).toFixed(1)}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${calculateProgress(position)}%` }}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/40" />
                    <div>
                      <div className="text-xs text-white/40">Start Date</div>
                      <div className="text-sm text-white">
                        {formatDate(Number(position.startTime))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white/40" />
                    <div>
                      <div className="text-xs text-white/40">End Date</div>
                      <div className="text-sm text-white">
                        {formatDate(Number(position.endTime))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-white/40" />
                    <div>
                      <div className="text-xs text-white/40">Expected Total</div>
                      <div className="text-sm text-white">
                        ${formatUSDT(position.expectedTotalEarn)}
                      </div>
                    </div>
                  </div>
                  {position.active && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <div>
                        <div className="text-xs text-white/40">Next Profit</div>
                        <div className="text-sm text-blue-400">
                          {formatRelativeTime(Number(position.nextProfitTime))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
