import { CONSTANTS } from '@/contracts/orcaTrust';

// Format number with commas
export const formatNumber = (value: string | number, decimals = 2): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0';
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

// Format USDT amount (from wei to USDT)
export const formatUSDT = (value: string | number | bigint, decimals = 2): string => {
  try {
    let num: number;
    if (typeof value === 'bigint') {
      num = Number(value) / 1e18;
    } else if (typeof value === 'string') {
      num = parseFloat(value) / 1e18;
    } else {
      num = value / 1e18;
    }
    return formatNumber(num, decimals);
  } catch {
    return '0';
  }
};

// Parse USDT to wei
export const parseUSDT = (value: string): bigint => {
  try {
    const num = parseFloat(value);
    if (isNaN(num)) return BigInt(0);
    return BigInt(Math.floor(num * 1e18));
  } catch {
    return BigInt(0);
  }
};

// Format timestamp to date
export const formatDate = (timestamp: number): string => {
  try {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '-';
  }
};

// Format timestamp to relative time
export const formatRelativeTime = (timestamp: number): string => {
  try {
    const now = Date.now();
    const diff = timestamp * 1000 - now;
    
    if (diff <= 0) return 'Expired';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) {
      return `${days}d ${hours}h`;
    }
    return `${hours}h`;
  } catch {
    return '-';
  }
};

// Truncate address
export const truncateAddress = (address: string, start = 6, end = 4): string => {
  if (!address) return '';
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};

// Calculate ROI
export const calculateROI = (amount: number, days: number): number => {
  return amount * (CONSTANTS.DAILY_ROI_PCT / 100) * days;
};

// Calculate total expected return
export const calculateTotalReturn = (amount: number): number => {
  return calculateROI(amount, CONSTANTS.CYCLE_DURATION);
};

// Format rank name
export const formatRank = (rank: number): string => {
  const ranks = [
    'None',
    'Starter',
    'Bronze',
    'Silver',
    'Gold',
    'Platinum',
    'Diamond',
    'Crown',
    'Crown Star',
    'Legend'
  ];
  return ranks[rank] || 'None';
};

// Format percentage
export const formatPercent = (value: number, decimals = 2): string => {
  return `${formatNumber(value, decimals)}%`;
};

// Validate username
export const isValidUsername = (username: string): boolean => {
  const regex = /^[a-zA-Z0-9]{3,20}$/;
  return regex.test(username);
};

// Get position source name
export const getPositionSource = (source: number): string => {
  const sources = ['Deposit', 'Daily Compound', 'Network Compound'];
  return sources[source] || 'Unknown';
};

// Format time remaining
export const formatTimeRemaining = (seconds: number): string => {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
};
