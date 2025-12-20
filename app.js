// Updated contract address and ABI for new contract
const CONTRACT_ADDRESS = '0x20c273b981659CEE5C432679784Fd3C5EEFF061a';
const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const READ_ONLY_RPC = 'https://bsc-dataseed1.binance.org/';

const USDT_ABI = [
    {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}], "name": "approve", "outputs": [{"name": "", "type": "bool"}], "type": "function"}, 
    {"constant": true, "inputs": [{"name": "_owner", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"}], "type": "function"}, 
    {"constant": true, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}], "name": "allowance", "outputs": [{"name": "", "type": "uint256"}], "type": "function"}, 
    {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"}], "type": "function"}
];

const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CapitalReturnWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isRoi","type":"bool"}],"name":"Compounded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"upline","type":"address"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rankIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LeadershipBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OnboardingBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"promoter","type":"address"},{"indexed":false,"internalType":"uint256","name":"depositAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"planIndex","type":"uint256"}],"name":"PromoterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralExpiredWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"RewardWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RoiBonusWithdrawn","type":"event"},{"inputs":[],"name":"ADMIN_FEE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADMIN_WALLET","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CAPITAL_RETURN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CYCLE_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DEPOSIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_WITHDRAW","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_BONUS_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_BONUS_50","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_THRESHOLD_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_THRESHOLD_50","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"claimCapitalReturn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"claimRoiBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compoundRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compoundRoiBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"upline","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAdminFeePercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getBonusStats","outputs":[{"internalType":"uint256","name":"totalReferralPayout","type":"uint256"},{"internalType":"uint256","name":"totalOnboardingPayout","type":"uint256"},{"internalType":"uint256","name":"totalLeadershipPayout","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCapitalReturnPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCycleDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDownlines","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGlobalStats","outputs":[{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"investorsCount","type":"uint256"},{"internalType":"uint256","name":"totalInvestment","type":"uint256"},{"internalType":"uint256","name":"totalPayout","type":"uint256"},{"internalType":"uint256","name":"totalPositionsCreated","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentDetails","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"availableRoi","type":"uint256"},{"internalType":"uint256","name":"availableCapital","type":"uint256"},{"internalType":"uint256","name":"nextWithdrawTime","type":"uint256"},{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getInvestmentsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getOnboardingBonusDetails","outputs":[{"internalType":"uint256","name":"threshold50","type":"uint256"},{"internalType":"uint256","name":"threshold100","type":"uint256"},{"internalType":"uint256","name":"bonus50","type":"uint256"},{"internalType":"uint256","name":"bonus100","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getPlanDetails","outputs":[{"internalType":"uint256[5]","name":"thresholds","type":"uint256[5]"},{"internalType":"uint256[5]","name":"roiPercentages","type":"uint256[5]"},{"internalType":"uint256[5]","name":"withdrawIntervals","type":"uint256[5]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRankDetails","outputs":[{"internalType":"string[7]","name":"names","type":"string[7]"},{"internalType":"uint256[7]","name":"requiredTeams","type":"uint256[7]"},{"internalType":"uint256[7]","name":"requiredDeposits","type":"uint256[7]"},{"internalType":"uint256[7]","name":"bonusPercents","type":"uint256[7]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReferralBonuses","outputs":[{"internalType":"uint256[20]","name":"","type":"uint256[20]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalPaidOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"totalDeposits","type":"uint256"},{"internalType":"uint256","name":"userTotalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"positionsCount","type":"uint256"},{"internalType":"bool","name":"isPromoter","type":"bool"},{"internalType":"uint256","name":"teamCount","type":"uint256"},{"internalType":"uint256","name":"teamDeposits","type":"uint256"},{"internalType":"string","name":"rank","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserRank","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserReturns","outputs":[{"internalType":"uint256","name":"totalCapitalReturn","type":"uint256"},{"internalType":"uint256","name":"totalRoiBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserRewards","outputs":[{"internalType":"uint256","name":"totalReferralBonus","type":"uint256"},{"internalType":"uint256","name":"totalOnboardingBonus","type":"uint256"},{"internalType":"uint256","name":"leadershipBonus","type":"uint256"},{"internalType":"uint256","name":"availableRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isUserActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"planThresholds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ranks","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"requiredTeam","type":"uint256"},{"internalType":"uint256","name":"requiredDeposit","type":"uint256"},{"internalType":"uint256","name":"bonusPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralBonuses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiBonusPercentages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiWithdrawIntervals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"promoter","type":"address"},{"internalType":"uint256","name":"depositAmount","type":"uint256"},{"internalType":"uint256","name":"planIndex","type":"uint256"}],"name":"setWalletPromoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalExpiredReferrals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvestors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLeadershipPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalOnboardingPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPositions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferralPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawReferralExpired","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let web3;
let contract;
let usdtContract;
let userAccount;
let referralAddress = null;
let userInvestments = [];
let selectedPlan = null;
let roiTimerInterval = null;
let capitalTimerInterval = null;
let userTeamData = [];

const preloader = document.querySelector('.preloader');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const connectWalletBtn = document.getElementById('connectWallet');
const notification = document.getElementById('notification');
const investmentSuccessPopup = document.getElementById('investmentSuccessPopup');

const sections = {
    home: document.getElementById('home'),
    dashboard: document.getElementById('dashboard'),
    invest: document.getElementById('invest'),
    referral: document.getElementById('referral'),
    leadership: document.getElementById('leadership'),
    team: document.getElementById('team'),
    faq: document.getElementById('faq')
};

// Investment Plans Definition
const PLANS = {
    beginner: {
        name: 'Beginner',
        min: 10,
        max: 499,
        capital: 4,
        roi: 0.5,
        withdrawInterval: 24, // hours
        cycle: 25 // days
    },
    basic: {
        name: 'Basic',
        min: 500,
        max: 999,
        capital: 4,
        roi: 0.75,
        withdrawInterval: 12,
        cycle: 25
    },
    standard: {
        name: 'Standard',
        min: 1000,
        max: 2499,
        capital: 4,
        roi: 1,
        withdrawInterval: 8,
        cycle: 25
    },
    high: {
        name: 'High',
        min: 2500,
        max: 4999,
        capital: 4,
        roi: 1.25,
        withdrawInterval: 4,
        cycle: 25
    },
    premium: {
        name: 'Premium',
        min: 5000,
        max: null, // No maximum
        capital: 4,
        roi: 1.5,
        withdrawInterval: 2,
        cycle: 25
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    checkPreloader();
    checkURLForReferral();
    setupFAQ();
    generateReferralLevelsCompact();
    generateLeadershipLevelsCompact();
});

function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => otherItem.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

function checkURLForReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    const refAddress = urlParams.get('ref');
    if (refAddress && Web3.utils.isAddress(refAddress)) {
        referralAddress = refAddress;
        document.getElementById('referrerAddress').value = refAddress;
        showNotification('Referral address detected!', 'success');
    }
}

async function initializeApp() {
    try {
        web3 = new Web3(new Web3.providers.HttpProvider(READ_ONLY_RPC));
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        await loadGlobalStats();
    } catch (error) {
        console.error('Error initializing app:', error);
    }
    
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) await connectWallet();
        } catch (err) {
            console.error('Error checking wallet connection:', err);
        }
    }
}

async function loadGlobalStats() {
    if (!contract) return;
    try {
        const stats = await contract.methods.getGlobalStats().call();
        const formatUSDT = (weiValue) => {
            const value = parseFloat(web3.utils.fromWei(weiValue, 'ether'));
            return value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        };
        
        document.getElementById('statContractBalance').textContent = `${formatUSDT(stats.contractBalance)} USDT`;
        document.getElementById('statTotalUsers').textContent = parseInt(stats.investorsCount).toLocaleString('en-US');
        document.getElementById('statTotalInvest').textContent = `${formatUSDT(stats.totalInvestment)} USDT`;
        document.getElementById('statTotalPaid').textContent = `${formatUSDT(stats.totalPayout)} USDT`;
    } catch (error) {
        console.error('Error loading global stats:', error);
    }
}

async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        return showNotification('Please install MetaMask or Trust Wallet!', 'error');
    }
    
    try {
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);

        // Check and switch to BSC network
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        if (chainId !== '0x38') {
            try {
                await window.ethereum.request({ 
                    method: 'wallet_switchEthereumChain', 
                    params: [{ chainId: '0x38' }] 
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({ 
                        method: 'wallet_addEthereumChain', 
                        params: [{ 
                            chainId: '0x38', 
                            chainName: 'Binance Smart Chain', 
                            nativeCurrency: { 
                                name: 'BNB', 
                                symbol: 'BNB', 
                                decimals: 18 
                            }, 
                            rpcUrls: ['https://bsc-dataseed.binance.org/'], 
                            blockExplorerUrls: ['https://bscscan.com/'] 
                        }] 
                    });
                } else {
                    throw switchError;
                }
            }
        }
        
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
            userAccount = accounts[0];
            updateWalletUI();
            await loadUserData();
            showNotification('Wallet connected successfully!', 'success');
        }
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showNotification('Wallet failed to connect!', 'error');
    }
}

function setupEventListeners() {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.nav__link, button[data-section]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = e.target.closest('[data-section]');
            if (targetElement) {
                showSection(targetElement.getAttribute('data-section'));
                navMenu.classList.remove('active');
            }
        });
    });
    
    connectWalletBtn.addEventListener('click', connectWallet);
    
    // Plan selection
    document.querySelectorAll('.select-plan').forEach(btn => {
        btn.addEventListener('click', function() {
            selectedPlan = this.getAttribute('data-plan');
            showInvestmentForm();
        });
    });
    
    document.getElementById('backToPlans').addEventListener('click', showPlans);
    document.getElementById('confirmInvestment').addEventListener('click', confirmInvestment);
    
    // FIXED: Close popup when clicking outside
    investmentSuccessPopup.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
    
    // Dashboard buttons
    document.getElementById('claimROI').addEventListener('click', claimAllROI);
    document.getElementById('claimCapital').addEventListener('click', claimAllCapital);
    document.getElementById('compoundInvestment').addEventListener('click', compoundInvestmentROI);
    document.getElementById('claimNetwork').addEventListener('click', claimNetworkEarnings);
    document.getElementById('compoundNetwork').addEventListener('click', compoundNetworkEarnings);
    
    document.getElementById('copyLink').addEventListener('click', copyReferralLink);
    document.getElementById('investmentAmount').addEventListener('input', validateAmount);
    
    // Team data filter
    document.getElementById('levelFilter').addEventListener('change', filterTeamData);
    
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts) => {
            userAccount = accounts.length > 0 ? accounts[0] : null;
            updateWalletUI();
            if (userAccount) {
                loadUserData();
            } else {
                showWalletAlerts();
                generateReferralLevelsCompact();
                generateLeadershipLevelsCompact();
            }
        });
        
        window.ethereum.on('chainChanged', () => {
            window.location.reload();
        });
    }
}

function showSection(sectionName) {
    Object.values(sections).forEach(section => {
        if (section) section.style.display = 'none';
    });
    
    document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active'));
    
    if (sections[sectionName]) {
        sections[sectionName].style.display = 'flex';
        if (sectionName !== 'home') {
            sections[sectionName].style.flexDirection = 'column';
        }
        window.scrollTo(0, 0);
        
        const navLink = document.querySelector(`.nav__link[data-section="${sectionName}"]`);
        if (navLink) navLink.classList.add('active');
        
        // Refresh data when switching to certain sections
        if (sectionName === 'dashboard' && userAccount) {
            loadUserData();
        } else if (sectionName === 'team' && userAccount) {
            loadTeamData();
        }
    }
}

function updateWalletUI() {
    if (userAccount) {
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> ${userAccount.substring(0, 6)}...${userAccount.substring(userAccount.length - 4)}`;
        hideWalletAlerts();
    } else {
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> Connect Wallet`;
        showWalletAlerts();
    }
}

function showWalletAlerts() {
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert', 'leadershipWalletAlert', 'teamWalletAlert'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'flex';
    });
    
    ['investmentIncomeSection', 'networkIncomeSection', 'myPositionsSection', 'noInvestmentsMessage', 'referralStats', 'referralLinkSection', 'leadershipStats', 'teamTableContainer'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    document.getElementById('timerSection').style.display = 'none';
}

function hideWalletAlerts() {
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert', 'leadershipWalletAlert', 'teamWalletAlert'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    document.getElementById('referralLinkSection').style.display = 'block';
}

async function loadUserData() {
    if (!contract || !userAccount) return;
    
    try {
        // Get user information from new contract functions
        const userInfo = await contract.methods.getUserInfo(userAccount).call();
        const userReturns = await contract.methods.getUserReturns(userAccount).call();
        const userRewards = await contract.methods.getUserRewards(userAccount).call();
        
        const formatUSDT = (weiValue) => {
            return parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
        };
        
        // Update Investment Income
        document.getElementById('totalDepositDashboard').textContent = `${formatUSDT(userInfo.totalDeposits)} USDT`;
        document.getElementById('capitalEarning').textContent = `${formatUSDT(userReturns.totalCapitalReturn)} USDT`;
        document.getElementById('roiEarning').textContent = `${formatUSDT(userReturns.totalRoiBonus)} USDT`;
        
        // Update Network Income
        document.getElementById('referralEarning').textContent = `${formatUSDT(userRewards.totalReferralBonus)} USDT`;
        document.getElementById('onboardingEarning').textContent = `${formatUSDT(userRewards.totalOnboardingBonus)} USDT`;
        document.getElementById('leadershipEarning').textContent = `${formatUSDT(userRewards.leadershipBonus)} USDT`;
        
        // Update referral stats
        document.getElementById('totalDownlines').textContent = userInfo.teamCount;
        
        // Update leadership stats
        document.getElementById('currentRank').textContent = userInfo.rank || 'No Rank';
        document.getElementById('teamMembers').textContent = userInfo.teamCount;
        document.getElementById('teamDeposits').textContent = `${formatUSDT(userInfo.teamDeposits)} USDT`;
        
        // FIXED: Hapus update referral address
        
        // Load positions and update timers
        const investmentsCount = parseInt(userInfo.positionsCount);
        await loadPositions(investmentsCount);
        
        // Show/hide sections based on data
        const hasInvestments = investmentsCount > 0;
        
        document.getElementById('noInvestmentsMessage').style.display = hasInvestments ? 'none' : 'block';
        document.getElementById('investmentIncomeSection').style.display = 'block';
        document.getElementById('networkIncomeSection').style.display = 'block';
        document.getElementById('myPositionsSection').style.display = hasInvestments ? 'block' : 'none';
        document.getElementById('referralStats').style.display = 'grid';
        document.getElementById('leadershipStats').style.display = 'grid';
        
        // Generate referral link
        generateReferralLink();
        
        // Update qualified levels display
        await updateQualifiedLevels(userInfo.totalDeposits, userInfo.teamCount);
        
        // Start timers
        startTimers();
        
    } catch (error) {
        console.error('Error loading user data:', error);
        showNotification('Error loading user data', 'error');
    }
}

async function loadPositions(investmentsCount) {
    if (!contract || !userAccount) return;
    
    try {
        const positionsTableBody = document.getElementById('positionsTableBody');
        const mobilePositionsView = document.getElementById('mobilePositionsView');
        
        if (!positionsTableBody || !mobilePositionsView) return;
        
        positionsTableBody.innerHTML = '';
        mobilePositionsView.innerHTML = '';
        userInvestments = [];
        
        const formatUSDT = (weiValue) => {
            return parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
        };
        
        for (let i = 0; i < investmentsCount; i++) {
            try {
                const investment = await contract.methods.getInvestmentDetails(userAccount, i).call();
                
                const inv = {
                    index: i,
                    amount: investment.amount,
                    startTime: investment.startTime,
                    endTime: investment.endTime,
                    isActive: investment.isActive,
                    availableCapital: investment.availableCapital,
                    availableRoi: investment.availableRoi,
                    planIndex: investment.planIndex,
                    nextRoiTime: investment.nextWithdrawTime
                };
                
                userInvestments.push(inv);
                
                // Determine plan name based on planIndex
                let planName = 'Unknown';
                const planNames = ['Beginner', 'Basic', 'Standard', 'High', 'Premium'];
                if (investment.planIndex < planNames.length) {
                    planName = planNames[investment.planIndex];
                }
                
                // Format dates
                const startDate = new Date(parseInt(investment.startTime) * 1000).toLocaleDateString();
                const endDate = new Date(parseInt(investment.endTime) * 1000).toLocaleDateString();
                const amountFormatted = `${formatUSDT(investment.amount)} USDT`;
                const status = investment.isActive ? 'Active' : 'Completed';
                const statusClass = investment.isActive ? 'status-active' : 'status-completed';
                const statusIcon = investment.isActive ? 'fa-circle-notch fa-spin' : 'fa-check-circle';
                
                // Create position row for desktop
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${i + 1}</td>
                    <td>${investment.isActive ? 'Deposit' : 'Completed'}</td>
                    <td>${amountFormatted}</td>
                    <td>${planName}</td>
                    <td>${startDate}</td>
                    <td>${endDate}</td>
                    <td><span class="status-badge ${statusClass}">
                        <i class="fas ${statusIcon}"></i>
                        ${status}
                    </span></td>
                `;
                positionsTableBody.appendChild(row);
                
                // Create mobile position card
                const mobileCard = document.createElement('div');
                mobileCard.className = 'mobile-position-card';
                mobileCard.innerHTML = `
                    <div class="mobile-position-row">
                        <div class="mobile-position-label">Position</div>
                        <div class="mobile-position-value">${i + 1}</div>
                    </div>
                    <div class="mobile-position-row">
                        <div class="mobile-position-label">Type</div>
                        <div class="mobile-position-value">${investment.isActive ? 'Deposit' : 'Completed'}</div>
                    </div>
                    <div class="mobile-position-row">
                        <div class="mobile-position-label">Amount</div>
                        <div class="mobile-position-value">${amountFormatted}</div>
                    </div>
                    <div class="mobile-position-row">
                        <div class="mobile-position-label">Plan</div>
                        <div class="mobile-position-value">${planName}</div>
                    </div>
                    <div class="mobile-position-row">
                        <div class="mobile-position-label">Start Date</div>
                        <div class="mobile-position-value">${startDate}</div>
                    </div>
                    <div class="mobile-position-row">
                        <div class="mobile-position-label">End Date</div>
                        <div class="mobile-position-value">${endDate}</div>
                    </div>
                    <div class="mobile-position-row">
                        <div class="mobile-position-label">Status</div>
                        <div class="mobile-position-value">
                            <span class="status-badge ${statusClass}">
                                <i class="fas ${statusIcon}"></i>
                                ${status}
                            </span>
                        </div>
                    </div>
                `;
                mobilePositionsView.appendChild(mobileCard);
                
            } catch (error) {
                console.error(`Error loading position ${i}:`, error);
            }
        }
        
    } catch (error) {
        console.error('Error loading positions:', error);
    }
}

async function updateQualifiedLevels(totalDeposits, teamCount) {
    // Calculate qualified levels based on requirements
    let qualifiedLevels = 0;
    const userDeposit = parseFloat(web3.utils.fromWei(totalDeposits, 'ether'));
    
    // Levels 1-5: Active deposit of 10 USDT
    if (userDeposit >= 10) {
        qualifiedLevels = 5;
    }
    
    // Levels 6-10: Minimum 2 qualified downlines (100 USDT deposit each)
    if (parseInt(teamCount) >= 2) {
        qualifiedLevels = Math.max(qualifiedLevels, 10);
    }
    
    // Levels 11-15: Minimum 3 qualified downlines
    if (parseInt(teamCount) >= 3) {
        qualifiedLevels = Math.max(qualifiedLevels, 15);
    }
    
    // Levels 16-20: Minimum 5 qualified downlines
    if (parseInt(teamCount) >= 5) {
        qualifiedLevels = Math.max(qualifiedLevels, 20);
    }
    
    document.getElementById('qualifiedLevels').textContent = qualifiedLevels;
}

function validateAmount() {
    const amountInput = document.getElementById('investmentAmount');
    const amount = parseFloat(amountInput.value) || 0;
    const amountRange = document.getElementById('amountRange');
    
    if (!selectedPlan) return;
    
    const plan = PLANS[selectedPlan];
    const min = plan.min;
    const max = plan.max;
    
    if (amount < min) {
        amountRange.innerHTML = `Minimum amount for ${plan.name} plan is ${min} USDT`;
        amountRange.style.color = '#ef4444';
    } else if (max !== null && amount > max) {
        amountRange.innerHTML = `Maximum amount for ${plan.name} plan is ${max} USDT`;
        amountRange.style.color = '#ef4444';
    } else {
        amountRange.innerHTML = `Amount within ${plan.name} plan range (${min}${max ? ' - ' + max : '+'} USDT)`;
        amountRange.style.color = 'var(--text-muted)';
    }
}

function showInvestmentForm() {
    if (!userAccount) {
        return showNotification('Please connect your wallet first!', 'error');
    }
    
    // Check max positions (100 per user)
    if (userInvestments.length >= 100) {
        return showNotification('Maximum 100 investment positions reached!', 'error');
    }
    
    if (!selectedPlan) {
        return showNotification('Please select a plan first!', 'error');
    }
    
    const plan = PLANS[selectedPlan];
    
    // Update form with selected plan details
    document.getElementById('selectedPlanTitle').textContent = `${plan.name} Plan`;
    
    const planDetails = document.getElementById('selectedPlanDetails');
    planDetails.innerHTML = `
        <h4>${plan.name} Plan Details</h4>
        <ul>
            <li><i class="fas fa-check"></i> Range: ${plan.min}${plan.max ? ' - ' + plan.max : '+'} USDT</li>
            <li><i class="fas fa-check"></i> Capital Earning: ${plan.capital}% daily</li>
            <li><i class="fas fa-check"></i> ROI Earning: ${plan.roi}% daily</li>
            <li><i class="fas fa-check"></i> Withdraw Interval: Every ${plan.withdrawInterval}h</li>
            <li><i class="fas fa-check"></i> Cycle: ${plan.cycle} days</li>
        </ul>
    `;
    
    // Update amount input
    const amountInput = document.getElementById('investmentAmount');
    amountInput.min = plan.min;
    if (plan.max) {
        amountInput.max = plan.max;
    } else {
        amountInput.removeAttribute('max');
    }
    amountInput.value = plan.min;
    
    // Update validation message
    validateAmount();
    
    // Show/hide form sections
    document.getElementById('investmentPlans').style.display = 'none';
    document.getElementById('investmentForm').style.display = 'block';
}

function showPlans() {
    selectedPlan = null;
    document.getElementById('investmentPlans').style.display = 'grid';
    document.getElementById('investmentForm').style.display = 'none';
}

async function confirmInvestment() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first!', 'error');
    }
    
    if (!selectedPlan) {
        return showNotification('Please select a plan first!', 'error');
    }
    
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    const plan = PLANS[selectedPlan];
    
    // Validate amount against plan
    if (amount < plan.min) {
        return showNotification(`Minimum amount for ${plan.name} plan is ${plan.min} USDT`, 'error');
    }
    if (plan.max !== null && amount > plan.max) {
        return showNotification(`Maximum amount for ${plan.name} plan is ${plan.max} USDT`, 'error');
    }
    
    let uplineAddress = document.getElementById('referrerAddress').value.trim() || referralAddress || '0x0000000000000000000000000000000000000000';
    
    const confirmBtn = document.getElementById('confirmInvestment');
    const originalText = confirmBtn.innerHTML;
    confirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    confirmBtn.disabled = true;

    try {
        const amountWei = web3.utils.toWei(amount.toString(), 'ether');
        
        // Check and approve USDT allowance
        const allowance = await usdtContract.methods.allowance(userAccount, CONTRACT_ADDRESS).call();
        if (new BigNumber(allowance).isLessThan(new BigNumber(amountWei))) {
            showNotification('Approving...', 'info');
            await usdtContract.methods.approve(
                CONTRACT_ADDRESS, 
                '115792089237316195423570985008687907853269984665640564039457584007913129639935'
            ).send({ from: userAccount });
            showNotification('USDT approved successfully!', 'success');
        }
        
        // Make deposit
        showNotification('Deposit...', 'info');
        await contract.methods.deposit(amountWei, uplineAddress).send({ from: userAccount });
        
        showNotification('Deposit successful!', 'success');
        investmentSuccessPopup.classList.add('active');
        
        // Refresh data
        await loadUserData();
        await loadGlobalStats();
        
    } catch (error) {
        console.error('Deposit error:', error);
        showNotification('Deposit failed: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        confirmBtn.innerHTML = originalText;
        confirmBtn.disabled = false;
    }
}

function startTimers() {
    // Clear existing intervals
    if (roiTimerInterval) clearInterval(roiTimerInterval);
    if (capitalTimerInterval) clearInterval(capitalTimerInterval);
    
    // Find the investment with the earliest next ROI withdrawal time
    let nextROITime = null;
    let nextCapitalTime = null;
    
    userInvestments.forEach(inv => {
        if (inv.isActive && inv.nextRoiTime) {
            const nextROI = parseInt(inv.nextRoiTime);
            const currentTime = Math.floor(Date.now() / 1000);
            
            if (nextROI > currentTime) {
                if (!nextROITime || nextROI < nextROITime) {
                    nextROITime = nextROI;
                }
            }
            
            // Calculate capital claim time
            if (parseInt(inv.endTime) > currentTime) {
                if (!nextCapitalTime || parseInt(inv.endTime) < nextCapitalTime) {
                    nextCapitalTime = parseInt(inv.endTime);
                }
            }
        }
    });
    
    // Show timer section if there are active timers
    if (nextROITime || nextCapitalTime) {
        document.getElementById('timerSection').style.display = 'block';
    } else {
        document.getElementById('timerSection').style.display = 'none';
    }
    
    // Start ROI timer
    if (nextROITime) {
        updateROITimer(nextROITime);
        roiTimerInterval = setInterval(() => {
            updateROITimer(nextROITime);
        }, 1000);
    } else {
        document.getElementById('roiTimerDisplay').textContent = 'Ready to Claim';
        document.getElementById('claimROI').disabled = false;
    }
    
    // Start Capital timer
    if (nextCapitalTime) {
        updateCapitalTimer(nextCapitalTime);
        capitalTimerInterval = setInterval(() => {
            updateCapitalTimer(nextCapitalTime);
        }, 1000);
    } else {
        document.getElementById('capitalTimerDisplay').textContent = 'Ready to Claim';
        document.getElementById('claimCapital').disabled = false;
    }
}

function updateROITimer(endTime) {
    const timerElement = document.getElementById('roiTimerDisplay');
    const claimBtn = document.getElementById('claimROI');
    const currentTime = Math.floor(Date.now() / 1000);
    const timeLeft = endTime - currentTime;
    
    if (timeLeft > 0) {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        claimBtn.disabled = true;
    } else {
        timerElement.textContent = 'Ready to Claim';
        claimBtn.disabled = false;
    }
}

function updateCapitalTimer(endTime) {
    const timerElement = document.getElementById('capitalTimerDisplay');
    const claimBtn = document.getElementById('claimCapital');
    const currentTime = Math.floor(Date.now() / 1000);
    const timeLeft = endTime - currentTime;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / 86400);
        const hours = Math.floor((timeLeft % 86400) / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        // FIXED: Better display for mobile
        if (window.innerWidth <= 768) {
            timerElement.textContent = `${days}d ${hours}h ${minutes}m`;
        } else {
            timerElement.textContent = `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        claimBtn.disabled = true;
    } else {
        timerElement.textContent = 'Ready to Claim';
        claimBtn.disabled = false;
    }
}

async function claimAllROI() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first!', 'error');
    }
    
    // Check minimum amount
    let totalAvailableROI = 0;
    for (let i = 0; i < userInvestments.length; i++) {
        const inv = userInvestments[i];
        if (inv.isActive && parseFloat(web3.utils.fromWei(inv.availableRoi, 'ether')) > 0) {
            const currentTime = Math.floor(Date.now() / 1000);
            if (parseInt(inv.nextRoiTime) <= currentTime) {
                totalAvailableROI += parseFloat(web3.utils.fromWei(inv.availableRoi, 'ether'));
            }
        }
    }
    
    if (totalAvailableROI < 1) {
        return showNotification('Minimum 1 USDT!', 'error');
    }
    
    const btn = document.getElementById('claimROI');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        // Get available ROI for all positions
        let positionsToClaim = [];
        
        for (let i = 0; i < userInvestments.length; i++) {
            const inv = userInvestments[i];
            if (inv.isActive && parseFloat(web3.utils.fromWei(inv.availableRoi, 'ether')) > 0) {
                const currentTime = Math.floor(Date.now() / 1000);
                
                if (parseInt(inv.nextRoiTime) <= currentTime) {
                    positionsToClaim.push(i);
                }
            }
        }
        
        if (positionsToClaim.length === 0) {
            showNotification('No ROI available to claim yet!', 'info');
            btn.innerHTML = originalText;
            btn.disabled = false;
            return;
        }
        
        // Claim ROI for each position
        showNotification(`Claiming ROI from ${positionsToClaim.length} positions...`, 'info');
        
        for (const positionIndex of positionsToClaim) {
            await contract.methods.claimRoiBonus(positionIndex).send({ from: userAccount });
        }
        
        showNotification(`ROI claimed successfully!`, 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim ROI error:', error);
        showNotification('Failed to claim ROI: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function claimAllCapital() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first!', 'error');
    }
    
    // Check minimum amount
    let totalAvailableCapital = 0;
    for (let i = 0; i < userInvestments.length; i++) {
        const inv = userInvestments[i];
        const currentTime = Math.floor(Date.now() / 1000);
        
        if ((!inv.isActive || parseInt(inv.endTime) <= currentTime) && 
            parseFloat(web3.utils.fromWei(inv.availableCapital, 'ether')) > 0) {
            totalAvailableCapital += parseFloat(web3.utils.fromWei(inv.availableCapital, 'ether'));
        }
    }
    
    if (totalAvailableCapital < 1) {
        return showNotification('Minimum 1 USDT!', 'error');
    }
    
    const btn = document.getElementById('claimCapital');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        // Find positions with available capital
        const positionsToClaim = [];
        
        for (let i = 0; i < userInvestments.length; i++) {
            const inv = userInvestments[i];
            const currentTime = Math.floor(Date.now() / 1000);
            
            if ((!inv.isActive || parseInt(inv.endTime) <= currentTime) && 
                parseFloat(web3.utils.fromWei(inv.availableCapital, 'ether')) > 0) {
                positionsToClaim.push(i);
            }
        }
        
        if (positionsToClaim.length === 0) {
            showNotification('No capital available to claim yet!', 'info');
            btn.innerHTML = originalText;
            btn.disabled = false;
            return;
        }
        
        // Claim capital for each position
        showNotification(`Claiming capital from ${positionsToClaim.length} positions...`, 'info');
        
        for (const positionIndex of positionsToClaim) {
            await contract.methods.claimCapitalReturn(positionIndex).send({ from: userAccount });
        }
        
        showNotification(`Capital claimed successfully!`, 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim capital error:', error);
        showNotification('Failed to claim capital: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function compoundInvestmentROI() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first!', 'error');
    }
    
    // Find the first position with available ROI to compound
    let positionToCompound = -1;
    let amountToCompound = '0';
    let compoundAmount = 0;
    
    for (let i = 0; i < userInvestments.length; i++) {
        const inv = userInvestments[i];
        if (inv.isActive) {
            const amount = parseFloat(web3.utils.fromWei(inv.availableRoi, 'ether'));
            if (amount >= 1) {
                positionToCompound = i;
                amountToCompound = inv.availableRoi;
                compoundAmount = amount;
                break;
            }
        }
    }
    
    if (positionToCompound === -1) {
        return showNotification('Minimum 1 USDT!', 'error');
    }
    
    const btn = document.getElementById('compoundInvestment');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Compounding...';
    btn.disabled = true;
    
    try {
        showNotification(`Compounding ${compoundAmount.toFixed(2)} USDT ROI from position ${positionToCompound + 1}...`, 'info');
        await contract.methods.compoundRoiBonus(positionToCompound, amountToCompound).send({ from: userAccount });
        
        showNotification(`ROI compounded successfully!`, 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Compound ROI error:', error);
        showNotification('Failed to compound ROI: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function claimNetworkEarnings() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first!', 'error');
    }
    
    // Check minimum amount
    const userRewards = await contract.methods.getUserRewards(userAccount).call();
    const availableRewards = parseFloat(web3.utils.fromWei(userRewards.availableRewards, 'ether'));
    
    if (availableRewards < 1) {
        return showNotification('Minimum 1 USDT!', 'error');
    }
    
    const btn = document.getElementById('claimNetwork');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        showNotification('Claiming network earnings...', 'info');
        await contract.methods.claimRewards().send({ from: userAccount });
        showNotification('Network earnings claimed successfully!', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim network error:', error);
        showNotification('Failed to claim network earnings: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function compoundNetworkEarnings() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first!', 'error');
    }
    
    // Get available rewards
    const userRewards = await contract.methods.getUserRewards(userAccount).call();
    const totalRewards = new BigNumber(userRewards.availableRewards);
    const compoundAmount = parseFloat(web3.utils.fromWei(totalRewards.toString(), 'ether'));
    
    if (compoundAmount < 1) {
        return showNotification('Minimum 1 USDT!', 'error');
    }
    
    const btn = document.getElementById('compoundNetwork');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Compounding...';
    btn.disabled = true;
    
    try {
        showNotification(`Compounding ${compoundAmount.toFixed(2)} USDT network earnings...`, 'info');
        await contract.methods.compoundRewards(totalRewards.toString()).send({ from: userAccount });
        showNotification('Network earnings compounded successfully!', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Compound network error:', error);
        showNotification('Failed to compound network earnings: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function loadTeamData() {
    if (!contract || !userAccount) return;
    
    try {
        // Get downlines from contract - FIXED: Mengambil data real dari kontrak
        const downlines = await contract.methods.getDownlines(userAccount).call();
        userTeamData = [];
        
        const formatUSDT = (weiValue) => {
            return parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
        };
        
        // FIXED: Loop melalui semua downlines dan ambil data real
        for (let i = 0; i < downlines.length; i++) {
            const downlineAddress = downlines[i];
            
            try {
                // Get user info for downline dari kontrak
                const userInfo = await contract.methods.getUserInfo(downlineAddress).call();
                const isActive = await contract.methods.isUserActive(downlineAddress).call();
                
                const teamMember = {
                    address: downlineAddress,
                    level: i + 1, // Level adalah index + 1
                    totalDeposit: userInfo.totalDeposits,
                    activeDeposit: isActive ? userInfo.totalDeposits : '0',
                    teamCount: userInfo.teamCount,
                    teamDeposits: userInfo.teamDeposits
                };
                
                userTeamData.push(teamMember);
            } catch (error) {
                console.error(`Error loading downline ${downlineAddress}:`, error);
            }
        }
        
        // Display team data
        displayTeamData();
        
        document.getElementById('teamTableContainer').style.display = 'block';
        
    } catch (error) {
        console.error('Error loading team data:', error);
        showNotification('Error loading team data', 'error');
    }
}

function displayTeamData() {
    const teamTableBody = document.getElementById('teamTableBody');
    const mobileTeamView = document.getElementById('mobileTeamView');
    const levelFilter = document.getElementById('levelFilter').value;
    
    teamTableBody.innerHTML = '';
    mobileTeamView.innerHTML = '';
    
    const formatUSDT = (weiValue) => {
        return parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
    };
    
    if (userTeamData.length === 0) {
        teamTableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px;">
                    <div style="color: var(--text-muted);">
                        <i class="fas fa-users" style="font-size: 2rem; margin-bottom: 10px;"></i>
                        <p>No team members found</p>
                    </div>
                </td>
            </tr>
        `;
        mobileTeamView.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fas fa-users" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>No team members found</p>
            </div>
        `;
        return;
    }
    
    // Filter team data by level if filter is set
    const filteredData = levelFilter 
        ? userTeamData.filter(member => member.level.toString() === levelFilter)
        : userTeamData;
    
    if (filteredData.length === 0) {
        teamTableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 40px;">
                    <div style="color: var(--text-muted);">
                        <i class="fas fa-filter" style="font-size: 2rem; margin-bottom: 10px;"></i>
                        <p>No team members found for selected level</p>
                    </div>
                </td>
            </tr>
        `;
        mobileTeamView.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <i class="fas fa-filter" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>No team members found for selected level</p>
            </div>
        `;
        return;
    }
    
    // Display filtered team data for desktop
    filteredData.forEach(member => {
        const row = document.createElement('tr');
        // Format alamat pendek
        const shortAddress = `${member.address.substring(0, 3)}...${member.address.substring(member.address.length - 3)}`;
        row.innerHTML = `
            <td><span class="wallet-address">${shortAddress}</span></td>
            <td>${member.level}</td>
            <td>${formatUSDT(member.totalDeposit)} USDT</td>
            <td>${formatUSDT(member.activeDeposit)} USDT</td>
            <td>${member.teamCount}</td>
            <td>${formatUSDT(member.teamDeposits)} USDT</td>
        `;
        teamTableBody.appendChild(row);
    });
    
    // Display filtered team data for mobile
    filteredData.forEach(member => {
        const mobileCard = document.createElement('div');
        mobileCard.className = 'mobile-team-card';
        // Format alamat pendek
        const shortAddress = `${member.address.substring(0, 3)}...${member.address.substring(member.address.length - 3)}`;
        mobileCard.innerHTML = `
            <div class="mobile-team-row">
                <div class="mobile-team-label">Address</div>
                <div class="mobile-team-value wallet-address">${shortAddress}</div>
            </div>
            <div class="mobile-team-row">
                <div class="mobile-team-label">Level</div>
                <div class="mobile-team-value">${member.level}</div>
            </div>
            <div class="mobile-team-row">
                <div class="mobile-team-label">Total Deposit</div>
                <div class="mobile-team-value">${formatUSDT(member.totalDeposit)} USDT</div>
            </div>
            <div class="mobile-team-row">
                <div class="mobile-team-label">Active Deposit</div>
                <div class="mobile-team-value">${formatUSDT(member.activeDeposit)} USDT</div>
            </div>
            <div class="mobile-team-row">
                <div class="mobile-team-label">Team Size</div>
                <div class="mobile-team-value">${member.teamCount}</div>
            </div>
            <div class="mobile-team-row">
                <div class="mobile-team-label">Team Volume</div>
                <div class="mobile-team-value">${formatUSDT(member.teamDeposits)} USDT</div>
            </div>
        `;
        mobileTeamView.appendChild(mobileCard);
    });
}

function filterTeamData() {
    displayTeamData();
}

function generateReferralLink() {
    const linkInput = document.getElementById('referralLink');
    if (linkInput && userAccount) {
        linkInput.value = `${window.location.origin}${window.location.pathname}?ref=${userAccount}`;
    }
}

function copyReferralLink() {
    const linkInput = document.getElementById('referralLink');
    if (linkInput && linkInput.value) {
        navigator.clipboard.writeText(linkInput.value).then(() => {
            showNotification('Referral link copied to clipboard!', 'success');
        }).catch(err => {
            console.error('Failed to copy:', err);
            showNotification('Failed to copy link', 'error');
        });
    }
}

function generateReferralLevelsCompact() {
    const levelsContainer = document.getElementById('referralLevelsCompact');
    if (!levelsContainer) return;
    
    const levels = [
        { level: 1, bonus: '1.5%', requirement: '10 USDT Deposit' },
        { level: 2, bonus: '1.25%', requirement: '10 USDT Deposit' },
        { level: 3, bonus: '1%', requirement: '10 USDT Deposit' },
        { level: 4, bonus: '1%', requirement: '10 USDT Deposit' },
        { level: 5, bonus: '1%', requirement: '10 USDT Deposit' },
        { level: 6, bonus: '1%', requirement: '2 Qualified Downlines' },
        { level: 7, bonus: '1%', requirement: '2 Qualified Downlines' },
        { level: 8, bonus: '1%', requirement: '2 Qualified Downlines' },
        { level: 9, bonus: '1%', requirement: '2 Qualified Downlines' },
        { level: 10, bonus: '1%', requirement: '2 Qualified Downlines' },
        { level: 11, bonus: '0.5%', requirement: '3 Qualified Downlines' },
        { level: 12, bonus: '0.5%', requirement: '3 Qualified Downlines' },
        { level: 13, bonus: '0.5%', requirement: '3 Qualified Downlines' },
        { level: 14, bonus: '0.5%', requirement: '3 Qualified Downlines' },
        { level: 15, bonus: '0.5%', requirement: '3 Qualified Downlines' },
        { level: 16, bonus: '0.25%', requirement: '5 Qualified Downlines' },
        { level: 17, bonus: '0.25%', requirement: '5 Qualified Downlines' },
        { level: 18, bonus: '0.25%', requirement: '5 Qualified Downlines' },
        { level: 19, bonus: '0.25%', requirement: '5 Qualified Downlines' },
        { level: 20, bonus: '0.25%', requirement: '5 Qualified Downlines' }
    ];
    
    levelsContainer.innerHTML = levels.map(level => `
        <div class="referral-level-compact">
            <div class="level-number-compact">${level.level}</div>
            <div class="level-commission-compact">${level.bonus}</div>
            <div class="level-requirement-compact">${level.requirement}</div>
        </div>
    `).join('');
}

function generateLeadershipLevelsCompact() {
    const levelsContainer = document.getElementById('leadershipLevelsCompact');
    if (!levelsContainer) return;
    
    const ranks = [
        { level: 1, title: 'Inviter', bonus: '0.5%', team: '50', deposit: '2,500' },
        { level: 2, title: 'Promoter', bonus: '1%', team: '100', deposit: '5,000' },
        { level: 3, title: 'Leader', bonus: '1.5%', team: '200', deposit: '10,000' },
        { level: 4, title: 'Partner', bonus: '2%', team: '400', deposit: '15,000' },
        { level: 5, title: 'Star', bonus: '3%', team: '800', deposit: '25,000' },
        { level: 6, title: 'Royal Star', bonus: '4%', team: '1,500', deposit: '50,000' },
        { level: 7, title: 'Crown Star', bonus: '5%', team: '2,500', deposit: '100,000' }
    ];
    
    levelsContainer.innerHTML = ranks.map(rank => `
        <div class="leadership-level-compact">
            <div class="level-number-compact">${rank.level}</div>
            <div style="font-weight:600; color:white;">${rank.title}</div>
            <div class="level-commission-compact">${rank.bonus}</div>
            <div class="level-requirement-compact">${rank.team} members</div>
            <div class="level-requirement-compact" style="font-size:0.7rem;">${rank.deposit} USDT team</div>
        </div>
    `).join('');
}

function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    setTimeout(() => notification.classList.remove('show'), 5000);
}

function checkPreloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('fade-out');
            }
        }, 500);
    });
}
