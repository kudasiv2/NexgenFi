// Contract Configuration
const CONTRACT_ADDRESS = '0x68faE5c4B07eA9c035fBB8ae7f0BfF97C5B82002';
const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const READ_ONLY_RPC = 'https://bsc-dataseed1.binance.org/';

const USDT_ABI = [
    {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}], "name": "approve", "outputs": [{"name": "", "type": "bool"}], "type": "function"}, 
    {"constant": true, "inputs": [{"name": "_owner", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"}], "type": "function"}, 
    {"constant": true, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}], "name": "allowance", "outputs": [{"name": "", "type": "uint256"}], "type": "function"}, 
    {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"}], "type": "function"}
];

const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CapitalReturnWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isRoi","type":"bool"}],"name":"Compounded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"upline","type":"address"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rankIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LeadershipBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OnboardingBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralExpiredCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"RewardWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RoiBonusWithdrawn","type":"event"},{"inputs":[],"name":"ADMIN_FEE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADMIN_WALLET","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CAPITAL_RETURN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CYCLE_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DEPOSIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_WITHDRAW","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_BONUS_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_BONUS_50","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_THRESHOLD_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_THRESHOLD_50","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"claimCapitalReturn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"claimRoiBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compoundRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compoundRoiBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"upline","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"downlines","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"getAvailableCapitalReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"getAvailableRoiBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBonusStats","outputs":[{"internalType":"uint256","name":"totalReferralPayout","type":"uint256"},{"internalType":"uint256","name":"totalOnboardingPayout","type":"uint256"},{"internalType":"uint256","name":"totalLeadershipPayout","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDownlines","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGlobalStats","outputs":[{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"investorsCount","type":"uint256"},{"internalType":"uint256","name":"totalInvestment","type":"uint256"},{"internalType":"uint256","name":"totalPayout","type":"uint256"},{"internalType":"uint256","name":"totalPositionsCreated","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentAvailableReturns","outputs":[{"internalType":"uint256","name":"availableRoiBonus","type":"uint256"},{"internalType":"uint256","name":"availableCapitalReturn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentBasicInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentClaimedInfo","outputs":[{"internalType":"uint256","name":"capitalReturnClaimed","type":"uint256"},{"internalType":"uint256","name":"roiBonusClaimed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentPlanInfo","outputs":[{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"uint256","name":"lastRoiWithdrawTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getInvestmentsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getPlanIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalPaidOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAvailableReturns","outputs":[{"internalType":"uint256","name":"totalCapitalReturn","type":"uint256"},{"internalType":"uint256","name":"totalRoiBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBonusStats","outputs":[{"internalType":"uint256","name":"totalReferralBonus","type":"uint256"},{"internalType":"uint256","name":"totalOnboardingBonus","type":"uint256"},{"internalType":"uint256","name":"availableRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserPositionsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserRank","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTeamStats","outputs":[{"internalType":"uint256","name":"teamCount","type":"uint256"},{"internalType":"uint256","name":"teamDeposits","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserUpline","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"investments","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"capitalReturnClaimed","type":"uint256"},{"internalType":"uint256","name":"roiBonusClaimed","type":"uint256"},{"internalType":"uint256","name":"lastRoiWithdrawTime","type":"uint256"},{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"leadershipBonusEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"planThresholds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ranks","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"requiredTeam","type":"uint256"},{"internalType":"uint256","name":"requiredDeposit","type":"uint256"},{"internalType":"uint256","name":"bonusPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralBonusEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralBonuses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiBonusPercentages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiWithdrawIntervals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvestors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLeadershipPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalOnboardingPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPositions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalReferralExpired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferralPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userQualifiedDownlines","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"totalDeposits","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"totalReferralBonus","type":"uint256"},{"internalType":"uint256","name":"totalOnboardingBonus","type":"uint256"},{"internalType":"uint256","name":"onboardingBonusClaimed","type":"uint256"},{"internalType":"uint256","name":"lastDepositTime","type":"uint256"},{"internalType":"uint256","name":"positionsCount","type":"uint256"},{"internalType":"bool","name":"hasDeposited","type":"bool"},{"internalType":"uint256","name":"teamDeposits","type":"uint256"},{"internalType":"uint256","name":"teamCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawReferralExpired","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Global Variables
let web3;
let contract;
let usdtContract;
let userAccount;
let referralAddress = null;
let userInvestments = [];
let userTeamData = [];
let selectedPlan = null;
let roiTimerInterval = null;
let capitalTimerInterval = null;

// DOM Elements
const preloader = document.querySelector('.preloader');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const connectWalletBtn = document.getElementById('connectWallet');
const notification = document.getElementById('notification');
const investmentSuccessPopup = document.getElementById('investmentSuccessPopup');

// Sections
const sections = {
    home: document.getElementById('home'),
    dashboard: document.getElementById('dashboard'),
    invest: document.getElementById('invest'),
    referral: document.getElementById('referral'),
    leadership: document.getElementById('leadership'),
    team: document.getElementById('team'),
    faq: document.getElementById('faq')
};

// Investment Plans Data
const investmentPlans = [
    {
        id: 0,
        name: 'Beginner',
        min: 10,
        max: 499,
        capital: '4%',
        roi: '0.5%',
        interval: 'Every 24h',
        cycle: '25 days'
    },
    {
        id: 1,
        name: 'Basic',
        min: 500,
        max: 999,
        capital: '4%',
        roi: '0.75%',
        interval: 'Every 12h',
        cycle: '25 days'
    },
    {
        id: 2,
        name: 'Standard',
        min: 1000,
        max: 2499,
        capital: '4%',
        roi: '1%',
        interval: 'Every 8h',
        cycle: '25 days'
    },
    {
        id: 3,
        name: 'High',
        min: 2500,
        max: 4999,
        capital: '4%',
        roi: '1.25%',
        interval: 'Every 4h',
        cycle: '25 days'
    },
    {
        id: 4,
        name: 'Premium',
        min: 5000,
        max: Infinity,
        capital: '4%',
        roi: '1.5%',
        interval: 'Every 2h',
        cycle: '25 days'
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    checkPreloader();
    checkURLForReferral();
    setupFAQ();
    generateInvestmentPlans();
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
        showNotification('Wallet connection failed', 'error');
    }
}

function setupEventListeners() {
    // Navigation
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
    
    // Wallet
    connectWalletBtn.addEventListener('click', connectWallet);
    
    // Investment
    document.getElementById('backToPlans').addEventListener('click', showPlans);
    document.getElementById('confirmInvestment').addEventListener('click', confirmInvestment);
    document.getElementById('newInvestment').addEventListener('click', () => {
        investmentSuccessPopup.classList.remove('active');
        showPlans();
    });
    document.getElementById('investmentAmount').addEventListener('input', validateInvestmentAmount);
    
    // Dashboard Actions
    document.getElementById('claimROI').addEventListener('click', claimAllROI);
    document.getElementById('claimCapital').addEventListener('click', claimAllCapital);
    document.getElementById('compoundROI').addEventListener('click', compoundAllROI);
    document.getElementById('claimNetwork').addEventListener('click', claimNetworkRewards);
    document.getElementById('compoundNetwork').addEventListener('click', compoundNetworkRewards);
    
    // Referral
    document.getElementById('copyLink').addEventListener('click', copyReferralLink);
    
    // Ethereum Events
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
    // Hide all sections
    Object.values(sections).forEach(section => {
        if (section) section.style.display = 'none';
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active'));
    
    // Show selected section
    if (sections[sectionName]) {
        sections[sectionName].style.display = 'flex';
        if (sectionName !== 'home') {
            sections[sectionName].style.flexDirection = 'column';
        }
        window.scrollTo(0, 0);
        
        // Add active class to nav link
        const navLink = document.querySelector(`.nav__link[data-section="${sectionName}"]`);
        if (navLink) navLink.classList.add('active');
        
        // Load data for specific sections
        if (sectionName === 'dashboard' && userAccount) {
            loadUserData();
        } else if (sectionName === 'team' && userAccount) {
            loadTeamData();
        }
    }
}

function updateWalletUI() {
    if (userAccount) {
        const shortAddress = `${userAccount.substring(0, 6)}...${userAccount.substring(userAccount.length - 4)}`;
        connectWalletBtn.innerHTML = `<i class="fas fa-wallet"></i> ${shortAddress}`;
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
    
    ['incomeTables', 'positionsSection', 'teamDataContainer', 'referralLinkSection'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function hideWalletAlerts() {
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert', 'leadershipWalletAlert', 'teamWalletAlert'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    document.getElementById('incomeTables').style.display = 'flex';
    document.getElementById('positionsSection').style.display = 'block';
    document.getElementById('referralLinkSection').style.display = 'block';
}

async function loadUserData() {
    if (!contract || !userAccount) return;
    
    try {
        // Get user basic information
        const totalDeposits = await contract.methods.getUserTotalDeposits(userAccount).call();
        const totalWithdrawn = await contract.methods.getUserTotalWithdrawn(userAccount).call();
        const availableReturns = await contract.methods.getUserAvailableReturns(userAccount).call();
        const bonusStats = await contract.methods.getUserBonusStats(userAccount).call();
        const teamStats = await contract.methods.getUserTeamStats(userAccount).call();
        const investmentsCount = await contract.methods.getInvestmentsCount(userAccount).call();
        
        const formatUSDT = (weiValue) => {
            return parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
        };
        
        // Update Investment Income
        document.getElementById('totalDeposit').textContent = `${formatUSDT(totalDeposits)} USDT`;
        document.getElementById('capitalEarning').textContent = `${formatUSDT(availableReturns.totalCapitalReturn)} USDT`;
        document.getElementById('roiEarning').textContent = `${formatUSDT(availableReturns.totalRoiBonus)} USDT`;
        
        // Update Network Income
        document.getElementById('referralEarning').textContent = `${formatUSDT(bonusStats.totalReferralBonus)} USDT`;
        document.getElementById('onboardingEarning').textContent = `${formatUSDT(bonusStats.totalOnboardingBonus)} USDT`;
        document.getElementById('leadershipEarning').textContent = `${formatUSDT(bonusStats.availableRewards)} USDT`;
        
        // Enable/disable buttons based on available amounts
        const roiAmount = parseFloat(formatUSDT(availableReturns.totalRoiBonus));
        const capitalAmount = parseFloat(formatUSDT(availableReturns.totalCapitalReturn));
        const networkAmount = parseFloat(formatUSDT(bonusStats.availableRewards));
        
        document.getElementById('claimROI').disabled = roiAmount <= 0;
        document.getElementById('claimCapital').disabled = capitalAmount <= 0;
        document.getElementById('compoundROI').disabled = roiAmount < 1;
        document.getElementById('claimNetwork').disabled = networkAmount <= 0;
        document.getElementById('compoundNetwork').disabled = networkAmount < 1;
        
        // Load investment positions
        await loadInvestmentPositions(investmentsCount);
        
        // Generate referral link
        generateReferralLink();
        
        // Start timers
        startROITimer();
        startCapitalTimer();
        
        // Show/hide positions message
        const hasPositions = parseInt(investmentsCount) > 0;
        document.getElementById('noPositionsMessage').style.display = hasPositions ? 'none' : 'block';
        
    } catch (error) {
        console.error('Error loading user data:', error);
        showNotification('Error loading user data', 'error');
    }
}

async function loadInvestmentPositions(investmentsCount) {
    if (!contract || !userAccount) return;
    
    try {
        const tableBody = document.getElementById('positionsTableBody');
        tableBody.innerHTML = '';
        userInvestments = [];
        
        const formatUSDT = (weiValue) => {
            return parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
        };
        
        for (let i = 0; i < parseInt(investmentsCount); i++) {
            try {
                const basicInfo = await contract.methods.getInvestmentBasicInfo(userAccount, i).call();
                const planInfo = await contract.methods.getInvestmentPlanInfo(userAccount, i).call();
                
                const investment = {
                    index: i,
                    amount: basicInfo.amount,
                    startTime: basicInfo.startTime,
                    endTime: basicInfo.endTime,
                    isActive: basicInfo.isActive,
                    planIndex: planInfo.planIndex,
                    lastRoiTime: planInfo.lastRoiWithdrawTime
                };
                
                userInvestments.push(investment);
                
                // Determine plan name
                const amountInUSDT = parseFloat(web3.utils.fromWei(investment.amount, 'ether'));
                let planName = 'Beginner';
                if (amountInUSDT >= 5000) planName = 'Premium';
                else if (amountInUSDT >= 2500) planName = 'High';
                else if (amountInUSDT >= 1000) planName = 'Standard';
                else if (amountInUSDT >= 500) planName = 'Basic';
                
                // Determine type
                const type = investment.planIndex === '0' ? 'Deposit' : 'Compound';
                
                // Determine status
                const currentTime = Math.floor(Date.now() / 1000);
                let status = 'Active';
                if (!investment.isActive) {
                    status = 'Completed';
                } else if (currentTime > parseInt(investment.endTime)) {
                    status = 'Matured';
                }
                
                // Create table row
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${i + 1}</td>
                    <td>${type}</td>
                    <td>${formatUSDT(investment.amount)} USDT</td>
                    <td>${new Date(parseInt(investment.startTime) * 1000).toLocaleDateString()}</td>
                    <td><span class="investment-status ${status.toLowerCase()}">${status}</span></td>
                    <td>${planName}</td>
                `;
                
                tableBody.appendChild(row);
            } catch (error) {
                console.error(`Error loading investment ${i}:`, error);
            }
        }
        
    } catch (error) {
        console.error('Error loading investment positions:', error);
    }
}

async function loadTeamData() {
    if (!contract || !userAccount) return;
    
    try {
        const tableBody = document.getElementById('teamTableBody');
        tableBody.innerHTML = '';
        userTeamData = [];
        
        // Get downlines (simplified - actual implementation depends on contract)
        const teamStats = await contract.methods.getUserTeamStats(userAccount).call();
        const downlines = await contract.methods.getDownlines(userAccount).call();
        
        // Update team summary
        document.getElementById('totalTeamMembers').textContent = teamStats.teamCount;
        document.getElementById('totalTeamDeposit').textContent = parseFloat(web3.utils.fromWei(teamStats.teamDeposits, 'ether')).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }) + ' USDT';
        
        if (downlines.length === 0) {
            document.getElementById('noTeamMessage').style.display = 'block';
            document.getElementById('teamDataContainer').style.display = 'block';
            return;
        }
        
        document.getElementById('noTeamMessage').style.display = 'none';
        
        // For each downline, get their information
        for (let i = 0; i < Math.min(downlines.length, 50); i++) {
            const downline = downlines[i];
            try {
                const downlineDeposits = await contract.methods.getUserTotalDeposits(downline).call();
                const downlineTeamStats = await contract.methods.getUserTeamStats(downline).call();
                
                // Simplified - in reality you would need to get actual level from contract
                const level = i < 5 ? i + 1 : '5+';
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${i + 1}</td>
                    <td>${downline.substring(0, 6)}...${downline.substring(downline.length - 4)}</td>
                    <td>${level}</td>
                    <td>${parseFloat(web3.utils.fromWei(downlineDeposits, 'ether')).toFixed(2)} USDT</td>
                    <td>${parseFloat(web3.utils.fromWei(downlineDeposits, 'ether')).toFixed(2)} USDT</td>
                    <td>${downlineTeamStats.teamCount}</td>
                    <td>${parseFloat(web3.utils.fromWei(downlineTeamStats.teamDeposits, 'ether')).toFixed(2)} USDT</td>
                `;
                
                tableBody.appendChild(row);
                userTeamData.push({
                    address: downline,
                    level: level,
                    totalDeposit: downlineDeposits,
                    teamCount: downlineTeamStats.teamCount,
                    teamDeposits: downlineTeamStats.teamDeposits
                });
            } catch (error) {
                console.error(`Error loading team member ${i}:`, error);
            }
        }
        
        document.getElementById('teamDataContainer').style.display = 'block';
        
    } catch (error) {
        console.error('Error loading team data:', error);
        document.getElementById('teamDataContainer').style.display = 'block';
    }
}

function startROITimer() {
    if (roiTimerInterval) clearInterval(roiTimerInterval);
    
    // Simplified timer - in reality you would need to get actual next ROI claim time from contract
    let timeRemaining = 8 * 3600; // Default 8 hours
    
    roiTimerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(roiTimerInterval);
            document.getElementById('roiTimer').style.display = 'none';
            document.getElementById('claimROI').disabled = false;
            return;
        }
        
        timeRemaining--;
        
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = timeRemaining % 60;
        
        document.getElementById('roiTimeRemaining').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        document.getElementById('roiTimer').style.display = 'block';
    }, 1000);
}

function startCapitalTimer() {
    if (capitalTimerInterval) clearInterval(capitalTimerInterval);
    
    // Find the earliest ending investment
    let earliestEndTime = Infinity;
    userInvestments.forEach(inv => {
        if (inv.isActive) {
            const endTime = parseInt(inv.endTime);
            if (endTime < earliestEndTime) {
                earliestEndTime = endTime;
            }
        }
    });
    
    if (earliestEndTime === Infinity) {
        document.getElementById('capitalTimer').style.display = 'none';
        return;
    }
    
    const currentTime = Math.floor(Date.now() / 1000);
    let timeRemaining = Math.max(0, earliestEndTime - currentTime);
    
    capitalTimerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(capitalTimerInterval);
            document.getElementById('capitalTimer').style.display = 'none';
            document.getElementById('claimCapital').disabled = false;
            return;
        }
        
        timeRemaining--;
        
        const days = Math.floor(timeRemaining / (24 * 3600));
        const hours = Math.floor((timeRemaining % (24 * 3600)) / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        
        document.getElementById('capitalTimeRemaining').textContent = 
            `${days}d ${hours}h ${minutes}m`;
        
        document.getElementById('capitalTimer').style.display = 'block';
    }, 1000);
}

function generateInvestmentPlans() {
    const plansGrid = document.getElementById('investmentPlansGrid');
    if (!plansGrid) return;
    
    plansGrid.innerHTML = investmentPlans.map(plan => `
        <div class="plan-card" data-plan-id="${plan.id}">
            <div class="plan-name">${plan.name}</div>
            <div class="plan-range">${plan.min.toLocaleString()} - ${plan.max === Infinity ? '∞' : plan.max.toLocaleString()} USDT</div>
            <div class="plan-details">
                <div class="plan-detail">
                    <span>Capital Earning:</span>
                    <span>${plan.capital}</span>
                </div>
                <div class="plan-detail">
                    <span>ROI Earning:</span>
                    <span>${plan.roi}</span>
                </div>
                <div class="plan-detail">
                    <span>Withdraw Interval:</span>
                    <span>${plan.interval}</span>
                </div>
            </div>
            <div class="plan-cycle">Cycle: ${plan.cycle}</div>
            <button class="btn btn--primary">Select Plan</button>
        </div>
    `).join('');
    
    // Add event listeners to plan cards
    document.querySelectorAll('.plan-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) return;
            const planId = parseInt(card.getAttribute('data-plan-id'));
            selectPlan(planId);
        });
    });
}

function selectPlan(planId) {
    if (!userAccount) {
        showNotification('Please connect your wallet first!', 'error');
        return;
    }
    
    selectedPlan = investmentPlans[planId];
    if (!selectedPlan) return;
    
    document.getElementById('investmentPlansGrid').style.display = 'none';
    document.getElementById('investmentForm').style.display = 'block';
    
    // Update plan summary
    const maxText = selectedPlan.max === Infinity ? 'No maximum' : `${selectedPlan.max.toLocaleString()} USDT`;
    document.getElementById('selectedPlanSummary').innerHTML = `
        <div style="color:white; font-weight:600; font-size:1.1rem;">${selectedPlan.name}</div>
        <div style="color:var(--text-muted); margin:10px 0;">Range: ${selectedPlan.min.toLocaleString()} - ${maxText}</div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:15px;">
            <div style="background:rgba(0,200,83,0.1); padding:10px; border-radius:8px;">
                <div style="color:var(--text-muted); font-size:0.85rem;">Capital</div>
                <div style="color:var(--primary-accent); font-weight:600;">${selectedPlan.capital}</div>
            </div>
            <div style="background:rgba(0,200,83,0.1); padding:10px; border-radius:8px;">
                <div style="color:var(--text-muted); font-size:0.85rem;">ROI</div>
                <div style="color:var(--primary-accent); font-weight:600;">${selectedPlan.roi}</div>
            </div>
            <div style="background:rgba(0,200,83,0.1); padding:10px; border-radius:8px;">
                <div style="color:var(--text-muted); font-size:0.85rem;">Withdraw</div>
                <div style="color:var(--primary-accent); font-weight:600;">${selectedPlan.interval}</div>
            </div>
            <div style="background:rgba(0,200,83,0.1); padding:10px; border-radius:8px;">
                <div style="color:var(--text-muted); font-size:0.85rem;">Cycle</div>
                <div style="color:var(--primary-accent); font-weight:600;">${selectedPlan.cycle}</div>
            </div>
        </div>
    `;
    
    // Update amount range text
    document.getElementById('amountRange').textContent = 
        `Enter amount between ${selectedPlan.min.toLocaleString()} and ${selectedPlan.max === Infinity ? 'unlimited' : selectedPlan.max.toLocaleString()} USDT`;
    
    // Reset amount input
    document.getElementById('investmentAmount').value = '';
    document.getElementById('investmentAmount').min = selectedPlan.min;
    document.getElementById('investmentAmount').max = selectedPlan.max === Infinity ? '' : selectedPlan.max;
}

function validateInvestmentAmount() {
    const amountInput = document.getElementById('investmentAmount');
    const amount = parseFloat(amountInput.value) || 0;
    
    if (amount > 0 && selectedPlan) {
        if (amount < selectedPlan.min || (selectedPlan.max !== Infinity && amount > selectedPlan.max)) {
            amountInput.style.borderColor = '#ef4444';
            showNotification(`Amount must be between ${selectedPlan.min} and ${selectedPlan.max === Infinity ? 'unlimited' : selectedPlan.max} USDT for ${selectedPlan.name} plan`, 'error');
        } else {
            amountInput.style.borderColor = 'var(--primary-accent)';
        }
    } else {
        amountInput.style.borderColor = 'rgba(255,255,255,0.1)';
    }
}

function showPlans() {
    document.getElementById('investmentPlansGrid').style.display = 'grid';
    document.getElementById('investmentForm').style.display = 'none';
    selectedPlan = null;
}

async function confirmInvestment() {
    if (!contract || !userAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    if (!selectedPlan) {
        showNotification('Please select a plan first', 'error');
        return;
    }
    
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    
    // Validate amount
    if (amount < selectedPlan.min) {
        showNotification(`Minimum amount for ${selectedPlan.name} plan is ${selectedPlan.min} USDT`, 'error');
        return;
    }
    
    if (selectedPlan.max !== Infinity && amount > selectedPlan.max) {
        showNotification(`Maximum amount for ${selectedPlan.name} plan is ${selectedPlan.max} USDT`, 'error');
        return;
    }
    
    if (amount < 10) {
        showNotification('Minimum deposit is 10 USDT', 'error');
        return;
    }
    
    // Check max positions
    if (userInvestments.length >= 100) {
        showNotification('Maximum 100 investment positions reached!', 'error');
        return;
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
            showNotification('Approving USDT...', 'info');
            await usdtContract.methods.approve(
                CONTRACT_ADDRESS, 
                '115792089237316195423570985008687907853269984665640564039457584007913129639935'
            ).send({ from: userAccount });
            showNotification('USDT approved successfully!', 'success');
        }
        
        // Make deposit
        showNotification('Making deposit...', 'info');
        await contract.methods.deposit(amountWei, uplineAddress).send({ from: userAccount });
        
        showNotification('Deposit successful! Your investment is now active.', 'success');
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

async function claimAllROI() {
    if (!contract || !userAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const btn = document.getElementById('claimROI');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        showNotification('Claiming all ROI bonuses...', 'info');
        
        // Claim from each position that has available ROI
        for (let i = 0; i < userInvestments.length; i++) {
            try {
                await contract.methods.claimRoiBonus(i).send({ from: userAccount });
            } catch (error) {
                // Continue with next position if one fails
                console.error(`Error claiming ROI for position ${i}:`, error);
            }
        }
        
        showNotification('ROI bonuses claimed successfully!', 'success');
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
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const btn = document.getElementById('claimCapital');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        showNotification('Claiming capital returns...', 'info');
        
        // Claim capital from each matured position
        for (let i = 0; i < userInvestments.length; i++) {
            const inv = userInvestments[i];
            if (!inv.isActive || parseInt(inv.endTime) <= Math.floor(Date.now()/1000)) {
                try {
                    await contract.methods.claimCapitalReturn(i).send({ from: userAccount });
                } catch (error) {
                    console.error(`Error claiming capital for position ${i}:`, error);
                }
            }
        }
        
        showNotification('Capital returns claimed successfully!', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim capital error:', error);
        showNotification('Failed to claim capital: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function compoundAllROI() {
    if (!contract || !userAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const btn = document.getElementById('compoundROI');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Compounding...';
    btn.disabled = true;
    
    try {
        showNotification('Compounding ROI bonuses...', 'info');
        
        // Get total available ROI
        const availableReturns = await contract.methods.getUserAvailableReturns(userAccount).call();
        const totalROI = availableReturns.totalRoiBonus;
        
        if (parseFloat(web3.utils.fromWei(totalROI, 'ether')) < 1) {
            showNotification('Minimum 1 USDT required for compounding', 'error');
            btn.innerHTML = originalText;
            btn.disabled = false;
            return;
        }
        
        // Compound rewards
        await contract.methods.compoundRewards(totalROI).send({ from: userAccount });
        
        showNotification('ROI compounded successfully! New position created.', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Compound ROI error:', error);
        showNotification('Failed to compound ROI: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function claimNetworkRewards() {
    if (!contract || !userAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const btn = document.getElementById('claimNetwork');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        showNotification('Claiming network rewards...', 'info');
        await contract.methods.claimRewards().send({ from: userAccount });
        showNotification('Network rewards claimed successfully!', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim network rewards error:', error);
        showNotification('Failed to claim network rewards: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function compoundNetworkRewards() {
    if (!contract || !userAccount) {
        showNotification('Please connect wallet first', 'error');
        return;
    }
    
    const btn = document.getElementById('compoundNetwork');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Compounding...';
    btn.disabled = true;
    
    try {
        showNotification('Compounding network rewards...', 'info');
        
        // Get total available rewards
        const bonusStats = await contract.methods.getUserBonusStats(userAccount).call();
        const totalRewards = bonusStats.availableRewards;
        
        if (parseFloat(web3.utils.fromWei(totalRewards, 'ether')) < 1) {
            showNotification('Minimum 1 USDT required for compounding', 'error');
            btn.innerHTML = originalText;
            btn.disabled = false;
            return;
        }
        
        // Compound rewards
        await contract.methods.compoundRewards(totalRewards).send({ from: userAccount });
        
        showNotification('Network rewards compounded successfully! New position created.', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Compound network rewards error:', error);
        showNotification('Failed to compound network rewards: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
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
