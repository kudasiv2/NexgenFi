import { useState, useEffect, useRef } from 'react';
import { useWeb3 } from '@/contexts/Web3Context';
import { useContract } from '@/hooks/useContract';
import { CONSTANTS } from '@/contracts/orcaTrust';
import { formatNumber, isValidUsername } from '@/utils/formatters';
import { 
  Wallet, 
  User, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Info,
  TrendingUp
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export function Invest() {
  const { isConnected, isRegistered, usdtBalance, connectWallet } = useWeb3();
  const { 
    register, 
    deposit, 
    checkUsername, 
    checkReferrer,
    txState 
  } = useContract();
  
  const investRef = useRef<HTMLDivElement>(null);
  
  // Registration state
  const [username, setUsername] = useState('');
  const [referrerUsername, setReferrerUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [referrerError, setReferrerError] = useState('');
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [isCheckingReferrer, setIsCheckingReferrer] = useState(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  
  // Deposit state
  const [depositAmount, setDepositAmount] = useState('');
  const [showDepositDialog, setShowDepositDialog] = useState(false);
  
  // Success/Error messages
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

    const elements = investRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Check username validity
  const handleUsernameChange = async (value: string) => {
    setUsername(value);
    setUsernameError('');
    
    if (value.length >= 3) {
      if (!isValidUsername(value)) {
        setUsernameError('Username must be 3-20 alphanumeric characters');
        return;
      }
      
      setIsCheckingUsername(true);
      const isValid = await checkUsername(value);
      setIsCheckingUsername(false);
      
      if (!isValid) {
        setUsernameError('Username is already taken');
      }
    }
  };

  // Check referrer validity
  const handleReferrerChange = async (value: string) => {
    setReferrerUsername(value);
    setReferrerError('');
    
    if (value.length >= 3) {
      setIsCheckingReferrer(true);
      const isValid = await checkReferrer(value);
      setIsCheckingReferrer(false);
      
      if (!isValid) {
        setReferrerError('Invalid referrer username');
      }
    }
  };

  // Handle registration
  const handleRegister = async () => {
    if (!username || !referrerUsername) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }
    
    if (usernameError || referrerError) {
      setMessage({ type: 'error', text: 'Please fix the errors before submitting' });
      return;
    }
    
    setShowRegisterDialog(true);
    const result = await register(username, referrerUsername);
    
    if (result.success) {
      setMessage({ type: 'success', text: 'Registration successful!' });
      setUsername('');
      setReferrerUsername('');
    } else {
      setMessage({ type: 'error', text: result.error || 'Registration failed' });
    }
    setShowRegisterDialog(false);
  };

  // Handle deposit
  const handleDeposit = async () => {
    const amount = parseFloat(depositAmount);
    
    if (!depositAmount || isNaN(amount) || amount < CONSTANTS.MINIMUM_DEPOSIT) {
      setMessage({ type: 'error', text: `Minimum deposit is ${CONSTANTS.MINIMUM_DEPOSIT} USDT` });
      return;
    }
    
    if (amount > parseFloat(usdtBalance)) {
      setMessage({ type: 'error', text: 'Insufficient USDT balance' });
      return;
    }
    
    setShowDepositDialog(true);
    const result = await deposit(depositAmount);
    
    if (result.success) {
      setMessage({ type: 'success', text: 'Deposit successful!' });
      setDepositAmount('');
    } else {
      setMessage({ type: 'error', text: result.error || 'Deposit failed' });
    }
    setShowDepositDialog(false);
  };

  if (!isConnected) {
    return (
      <section id="invest" ref={investRef} className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center animate-on-scroll opacity-0">
            <Wallet className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Connect to Invest</h2>
            <p className="text-white/60 mb-8">
              Connect your wallet to start investing and earning rewards.
            </p>
            <button
              onClick={connectWallet}
              className="glow-button px-8 py-3 text-white font-semibold"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="invest" ref={investRef} className="section-container">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {isRegistered ? 'Make a Deposit' : 'Register & Invest'}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            {isRegistered 
              ? 'Add more funds to your investment and increase your daily returns.'
              : 'Create your account with a unique username and start your investment journey.'}
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

        {!isRegistered ? (
          // Registration Form
          <div className="glass-card p-8 animate-on-scroll opacity-0 animation-delay-100">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold text-white">Create Your Account</h3>
            </div>

            <div className="space-y-6">
              {/* Username Input */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Username</label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => handleUsernameChange(e.target.value)}
                    placeholder="Enter username (3-20 characters)"
                    className="glass-input w-full pr-10"
                  />
                  {isCheckingUsername && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="spinner w-4 h-4" />
                    </div>
                  )}
                  {!isCheckingUsername && username && !usernameError && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                  )}
                </div>
                {usernameError && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {usernameError}
                  </p>
                )}
              </div>

              {/* Referrer Input */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Referrer Username</label>
                <div className="relative">
                  <input
                    type="text"
                    value={referrerUsername}
                    onChange={(e) => handleReferrerChange(e.target.value)}
                    placeholder="Enter referrer username"
                    className="glass-input w-full pr-10"
                  />
                  {isCheckingReferrer && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="spinner w-4 h-4" />
                    </div>
                  )}
                  {!isCheckingReferrer && referrerUsername && !referrerError && (
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                  )}
                </div>
                {referrerError && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {referrerError}
                  </p>
                )}
              </div>

              {/* Info */}
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div className="text-sm text-white/60">
                    <p className="mb-1">Minimum deposit: <span className="text-white">{CONSTANTS.MINIMUM_DEPOSIT} USDT</span></p>
                    <p className="mb-1">Daily ROI: <span className="text-white">{CONSTANTS.DAILY_ROI_PCT}%</span></p>
                    <p>Cycle duration: <span className="text-white">{CONSTANTS.CYCLE_DURATION} days</span></p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleRegister}
                disabled={txState.isLoading || !!usernameError || !!referrerError || !username || !referrerUsername}
                className="glow-button w-full py-4 text-lg font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {txState.isLoading ? (
                  <div className="spinner" />
                ) : (
                  <>
                    Register & Start Investing
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          // Deposit Form
          <div className="glass-card p-8 animate-on-scroll opacity-0 animation-delay-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Wallet className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-white">Make a Deposit</h3>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/60">Balance</div>
                <div className="text-lg font-semibold text-white">{formatNumber(usdtBalance)} USDT</div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm text-white/60 mb-2">Deposit Amount (USDT)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    placeholder={`Minimum ${CONSTANTS.MINIMUM_DEPOSIT} USDT`}
                    className="glass-input w-full pr-20"
                  />
                  <button
                    onClick={() => setDepositAmount(usdtBalance)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    MAX
                  </button>
                </div>
              </div>

              {/* Quick Amounts */}
              <div className="flex flex-wrap gap-2">
                {[10, 50, 100, 500, 1000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDepositAmount(amount.toString())}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {amount} USDT
                  </button>
                ))}
              </div>

              {/* Expected Returns */}
              {depositAmount && parseFloat(depositAmount) >= CONSTANTS.MINIMUM_DEPOSIT && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <div className="text-sm text-white/60 mb-2">Expected Returns</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-lg font-semibold text-green-400">
                            ${formatNumber(parseFloat(depositAmount) * CONSTANTS.DAILY_ROI_PCT / 100)}/day
                          </div>
                          <div className="text-xs text-white/40">Daily Return</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-green-400">
                            ${formatNumber(parseFloat(depositAmount) * CONSTANTS.DAILY_ROI_PCT / 100 * CONSTANTS.CYCLE_DURATION)}
                          </div>
                          <div className="text-xs text-white/40">Total ({CONSTANTS.CYCLE_DURATION} days)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleDeposit}
                disabled={txState.isLoading || !depositAmount || parseFloat(depositAmount) < CONSTANTS.MINIMUM_DEPOSIT}
                className="glow-button w-full py-4 text-lg font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {txState.isLoading ? (
                  <div className="spinner" />
                ) : (
                  <>
                    Deposit Now
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Transaction Dialog */}
        <Dialog open={showRegisterDialog || showDepositDialog} onOpenChange={() => {}}>
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
