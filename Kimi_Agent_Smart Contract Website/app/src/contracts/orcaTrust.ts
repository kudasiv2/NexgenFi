export const CONTRACT_ADDRESS = '0x98929d0c70e45FeE1C3BbF0E693D443F24EB457a';

export const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';

export const CONTRACT_ABI = [
  {"inputs":[{"internalType":"uint256","name":"_lpPositionId","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
  {"inputs":[],"name":"AlreadyRegistered","type":"error"},
  {"inputs":[],"name":"BelowMinimum","type":"error"},
  {"inputs":[],"name":"CannotSelfRefer","type":"error"},
  {"inputs":[],"name":"DailyLimitReached","type":"error"},
  {"inputs":[],"name":"InsufficientBalance","type":"error"},
  {"inputs":[],"name":"InsufficientLPLiquidity","type":"error"},
  {"inputs":[],"name":"InsufficientPositions","type":"error"},
  {"inputs":[],"name":"InvalidUsername","type":"error"},
  {"inputs":[],"name":"MaxPositions","type":"error"},
  {"inputs":[],"name":"MustRegisterFirst","type":"error"},
  {"inputs":[],"name":"NoRewards","type":"error"},
  {"inputs":[],"name":"NotOwner","type":"error"},
  {"inputs":[],"name":"NotRegistered","type":"error"},
  {"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},
  {"inputs":[],"name":"ReferrerNotQualified","type":"error"},
  {"inputs":[],"name":"ReferrerNotRegistered","type":"error"},
  {"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},
  {"inputs":[],"name":"TooFrequentCalculation","type":"error"},
  {"inputs":[],"name":"UsernameTaken","type":"error"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"newUsername","type":"string"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalUsernames","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"AdditionalUsernamePurchased","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"DailyRewardCompounded","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"DailyRewardWithdrawn","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Deposit","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"upline","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint8","name":"rank","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LeadershipReward","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"positionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint128","name":"liquidity","type":"uint128"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LiquidityAdded","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LiquidityRefunded","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"positionId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"LiquidityRemoved","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalReward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ManualRewardCalculated","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NetworkRewardCompounded","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"NetworkRewardWithdrawn","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"upline","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"OnboardingReward","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"rank","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"RankUpgrade","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"upline","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint8","name":"level","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ReferralReward","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"username","type":"string"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"string","name":"uplineUsername","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Registration","type":"event"},
  {"inputs":[],"name":"MANAGE_WALLET","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"SecureLPPosition","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compoundDailyReward","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compoundNetworkReward","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"directReferrals","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getContractInfo","outputs":[{"internalType":"uint256","name":"currentGlobalCheckpoint","type":"uint256"},{"internalType":"uint256","name":"nextCheckpoint","type":"uint256"},{"internalType":"uint256","name":"_totalRegisteredUsers","type":"uint256"},{"internalType":"uint256","name":"_totalActiveUsers","type":"uint256"},{"internalType":"uint256","name":"_totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"_currentDay","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getCurrentGlobalCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getDailyRewards","outputs":[{"internalType":"uint256","name":"availableReward","type":"uint256"},{"internalType":"uint256","name":"reserve","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getDirectReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"startTime","type":"uint256"}],"name":"getFullDaysSince","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getLastwithdrawTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getNetworkRewards","outputs":[{"internalType":"uint256","name":"availableReward","type":"uint256"},{"internalType":"uint256","name":"reserve","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getNextDailyCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPosition","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"lastCheckpoint","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"earned","type":"uint256"},{"internalType":"uint256","name":"expectedTotalEarn","type":"uint256"},{"internalType":"uint8","name":"source","type":"uint8"},{"internalType":"bool","name":"active","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getPositionCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPositionExtra","outputs":[{"internalType":"uint256","name":"nextProfitTime","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getQualifiedDirectsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint8","name":"rank","type":"uint8"}],"name":"getRankPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"string","name":"username","type":"string"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"bool","name":"registered","type":"bool"},{"internalType":"uint256","name":"_teamActiveDeposit","type":"uint256"},{"internalType":"uint256","name":"_totalDeposited","type":"uint256"},{"internalType":"uint256","name":"_totalDailyCompounded","type":"uint256"},{"internalType":"uint256","name":"_totalNetworkCompounded","type":"uint256"},{"internalType":"uint256","name":"_totalWithdrawn","type":"uint256"},{"internalType":"uint32","name":"directsCount","type":"uint32"},{"internalType":"uint32","name":"teamCount","type":"uint32"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"userAddr","type":"address"}],"name":"getUserInfoExtra","outputs":[{"internalType":"uint256","name":"_totalActiveDeposit","type":"uint256"},{"internalType":"uint8","name":"rank","type":"uint8"},{"internalType":"uint256","name":"activeDepositsCount","type":"uint256"},{"internalType":"uint256","name":"dailyReturnAmount","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"referrerUsername","type":"string"},{"internalType":"address","name":"userAddr","type":"address"}],"name":"isValidUplineUsername","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"username","type":"string"}],"name":"isValidUsername","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastManualCalculation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"lastProjectWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"manualCalculateRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"newUsername","type":"string"}],"name":"purchaseAdditionalUsername","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"username","type":"string"},{"internalType":"string","name":"referrerUsername","type":"string"}],"name":"register","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"totalActiveUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"totalRegisteredUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"usdtIsToken0","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userNetworkWithdrawByDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userToUsernames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userWithdraws","outputs":[{"internalType":"uint256","name":"dailyWithdraw","type":"uint256"},{"internalType":"uint256","name":"dailyCompound","type":"uint256"},{"internalType":"uint256","name":"referralWithdraw","type":"uint256"},{"internalType":"uint256","name":"onboardingWithdraw","type":"uint256"},{"internalType":"uint256","name":"leadershipWithdraw","type":"uint256"},{"internalType":"uint256","name":"networkCompound","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usernameCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"usernameExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"usernameToAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"referrer","type":"address"},{"internalType":"string","name":"username","type":"string"},{"internalType":"bool","name":"registered","type":"bool"},{"internalType":"uint256","name":"totalActiveDeposit","type":"uint256"},{"internalType":"uint256","name":"teamActiveDeposit","type":"uint256"},{"internalType":"uint256","name":"teamTotalDeposit","type":"uint256"},{"internalType":"uint256","name":"teamTotalCompound","type":"uint256"},{"internalType":"uint256","name":"totalDeposited","type":"uint256"},{"internalType":"uint256","name":"totalDailyCompounded","type":"uint256"},{"internalType":"uint256","name":"totalNetworkCompounded","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"usersExtra","outputs":[{"internalType":"uint256","name":"rewardsReferral","type":"uint256"},{"internalType":"uint256","name":"rewardsOnboarding","type":"uint256"},{"internalType":"uint256","name":"rewardsRank","type":"uint256"},{"internalType":"uint256","name":"reserveDaily","type":"uint256"},{"internalType":"uint256","name":"reserveNetwork","type":"uint256"},{"internalType":"uint32","name":"teamCount","type":"uint32"},{"internalType":"uint32","name":"directsCount","type":"uint32"},{"internalType":"uint8","name":"rank","type":"uint8"},{"internalType":"uint8","name":"directsCrownStar","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawDailyReward","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawNetworkReward","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

export const USDT_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
  "function transfer(address to, uint amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)"
];

// Contract Constants
export const CONSTANTS = {
  MINIMUM_DEPOSIT: 10, // 10 USDT
  MINIMUM_COMPOUND: 10, // 10 USDT
  MINIMUM_WITHDRAW: 5, // 5 USDT
  CYCLE_DURATION: 45, // 45 days
  DAILY_ROI_PCT: 2.22, // 2.22% daily
  MANAGE_FEE_PCT: 10, // 10%
  NETWORK_WITHDRAW_DAILY_LIMIT: 1000, // 1000 USDT
  ADDITIONAL_USERNAME_COST: 10, // 10 USDT
  MAX_POSITIONS: 400,
  MIN_POSITIONS_FOR_MANUAL: 100,
  REFERRAL_TOTAL_DEPOSIT_NEEDED: 10, // 10 USDT
};

// Rank Names
export const RANK_NAMES = [
  "Starter",
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Crown",
  "Crown Star",
  "Legend"
];

// Referral Percentages
export const REFERRAL_PCT = [5, 3, 2, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
