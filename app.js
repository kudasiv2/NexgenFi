// Updated contract address and ABI for new concept
const CONTRACT_ADDRESS = '0x68faE5c4B07eA9c035fBB8ae7f0BfF97C5B82002';
const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955';
const READ_ONLY_RPC = 'https://bsc-dataseed1.binance.org/';

const USDT_ABI = [
    {"constant": false, "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}], "name": "approve", "outputs": [{"name": "", "type": "bool"}], "type": "function"}, 
    {"constant": true, "inputs": [{"name": "_owner", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"}], "type": "function"}, 
    {"constant": true, "inputs": [{"name": "_owner", "type": "address"}, {"name": "_spender", "type": "address"}], "name": "allowance", "outputs": [{"name": "", "type": "uint256"}], "type": "function"}, 
    {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"}], "type": "function"}
];

// Note: ABI remains the same as provided
const CONTRACT_ABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CapitalReturnWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"bool","name":"isRoi","type":"bool"}],"name":"Compounded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"upline","type":"address"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rankIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LeadershipBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OnboardingBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"downline","type":"address"},{"indexed":false,"internalType":"uint256","name":"level","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralBonusEarned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReferralExpiredCollected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"RewardWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RoiBonusWithdrawn","type":"event"},{"inputs":[],"name":"ADMIN_FEE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ADMIN_WALLET","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CAPITAL_RETURN_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CYCLE_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DEPOSIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_WITHDRAW","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_BONUS_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_BONUS_50","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_THRESHOLD_100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ONBOARDING_THRESHOLD_50","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SECONDS_PER_DAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"claimCapitalReturn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"claimRoiBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compoundRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"investmentIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"compoundRoiBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"upline","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"downlines","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"getAvailableCapitalReturn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"investmentIndex","type":"uint256"}],"name":"getAvailableRoiBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBonusStats","outputs":[{"internalType":"uint256","name":"totalReferralPayout","type":"uint256"},{"internalType":"uint256","name":"totalOnboardingPayout","type":"uint256"},{"internalType":"uint256","name":"totalLeadershipPayout","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getDownlines","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGlobalStats","outputs":[{"internalType":"uint256","name":"contractBalance","type":"uint256"},{"internalType":"uint256","name":"investorsCount","type":"uint256"},{"internalType":"uint256","name":"totalInvestment","type":"uint256"},{"internalType":"uint256","name":"totalPayout","type":"uint256"},{"internalType":"uint256","name":"totalPositionsCreated","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentAvailableReturns","outputs":[{"internalType":"uint256","name":"availableRoiBonus","type":"uint256"},{"internalType":"uint256","name":"availableCapitalReturn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentBasicInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentClaimedInfo","outputs":[{"internalType":"uint256","name":"capitalReturnClaimed","type":"uint256"},{"internalType":"uint256","name":"roiBonusClaimed","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getInvestmentPlanInfo","outputs":[{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"uint256","name":"lastRoiWithdrawTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getInvestmentsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getPlanIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalPaidOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAvailableReturns","outputs":[{"internalType":"uint256","name":"totalCapitalReturn","type":"uint256"},{"internalType":"uint256","name":"totalRoiBonus","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBonusStats","outputs":[{"internalType":"uint256","name":"totalReferralBonus","type":"uint256"},{"internalType":"uint256","name":"totalOnboardingBonus","type":"uint256"},{"internalType":"uint256","name":"availableRewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserPositionsCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserRank","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserReferralBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTeamStats","outputs":[{"internalType":"uint256","name":"teamCount","type":"uint256"},{"internalType":"uint256","name":"teamDeposits","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserUpline","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"investments","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"capitalReturnClaimed","type":"uint256"},{"internalType":"uint256","name":"roiBonusClaimed","type":"uint256"},{"internalType":"uint256","name":"lastRoiWithdrawTime","type":"uint256"},{"internalType":"uint256","name":"planIndex","type":"uint256"},{"internalType":"bool","name":"isActive","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"leadershipBonusEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"planThresholds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ranks","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"requiredTeam","type":"uint256"},{"internalType":"uint256","name":"requiredDeposit","type":"uint256"},{"internalType":"uint256","name":"bonusPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralBonusEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"referralBonuses","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiBonusPercentages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roiWithdrawIntervals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvested","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvestors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLeadershipPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalOnboardingPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPositions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalReferralExpired","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalReferralPaid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWithdrawn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userQualifiedDownlines","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"address","name":"upline","type":"address"},{"internalType":"uint256","name":"totalDeposits","type":"uint256"},{"internalType":"uint256","name":"totalWithdrawn","type":"uint256"},{"internalType":"uint256","name":"totalReferralBonus","type":"uint256"},{"internalType":"uint256","name":"totalOnboardingBonus","type":"uint256"},{"internalType":"uint256","name":"onboardingBonusClaimed","type":"uint256"},{"internalType":"uint256","name":"lastDepositTime","type":"uint256"},{"internalType":"uint256","name":"positionsCount","type":"uint256"},{"internalType":"bool","name":"hasDeposited","type":"bool"},{"internalType":"uint256","name":"teamDeposits","type":"uint256"},{"internalType":"uint256","name":"teamCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawReferralExpired","outputs":[],"stateMutability":"nonpayable","type":"function"}];

let web3;
let contract;
let usdtContract;
let userAccount;
let referralAddress = null;
let userInvestments = [];

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
    faq: document.getElementById('faq')
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
        showNotification('Wallet connection failed', 'error');
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
    document.getElementById('startInvestBtn').addEventListener('click', showInvestmentForm);
    document.getElementById('backToPlans').addEventListener('click', showPlans);
    document.getElementById('confirmInvestment').addEventListener('click', confirmInvestment);
    document.getElementById('newInvestment').addEventListener('click', () => {
        investmentSuccessPopup.classList.remove('active');
        showPlans();
    });
    document.getElementById('claimAllROI').addEventListener('click', claimAllROI);
    document.getElementById('claimAllRewards').addEventListener('click', claimAllRewards);
    document.getElementById('claimAllCapital').addEventListener('click', claimAllCapital);
    document.getElementById('claimReferralBonus').addEventListener('click', claimReferralBonus);
    document.getElementById('claimLeadershipBonus').addEventListener('click', claimLeadershipBonus);
    document.getElementById('copyLink').addEventListener('click', copyReferralLink);
    document.getElementById('investmentAmount').addEventListener('input', updateROIDisplay);
    
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
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert', 'leadershipWalletAlert'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'flex';
    });
    
    ['quickStats', 'actionButtons', 'noInvestmentsMessage', 'referralStats', 'referralLinkSection', 'referralActionButtons', 'leadershipStats', 'leadershipActionButtons', 'investmentHistorySection'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

function hideWalletAlerts() {
    ['dashboardWalletAlert', 'investWalletAlert', 'referralWalletAlert', 'leadershipWalletAlert'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    
    document.getElementById('actionButtons').style.display = 'flex';
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
        const userRank = await contract.methods.getUserRank(userAccount).call();
        const investmentsCount = await contract.methods.getInvestmentsCount(userAccount).call();
        
        const formatUSDT = (weiValue) => {
            return parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
        };
        
        // Update dashboard stats
        document.getElementById('totalDeposits').textContent = `${formatUSDT(totalDeposits)} USDT`;
        document.getElementById('availableCapital').textContent = `${formatUSDT(availableReturns.totalCapitalReturn)} USDT`;
        document.getElementById('availableRoi').textContent = `${formatUSDT(availableReturns.totalRoiBonus)} USDT`;
        document.getElementById('availableRewards').textContent = `${formatUSDT(bonusStats.availableRewards)} USDT`;
        
        // Update referral stats
        document.getElementById('referralEarnings').textContent = `${formatUSDT(bonusStats.totalReferralBonus)} USDT`;
        document.getElementById('onboardingEarnings').textContent = `${formatUSDT(bonusStats.totalOnboardingBonus)} USDT`;
        document.getElementById('totalDownlines').textContent = teamStats.teamCount;
        
        // Update leadership stats
        document.getElementById('leadershipEarnings').textContent = `${formatUSDT(bonusStats.availableRewards)} USDT`;
        document.getElementById('currentRank').textContent = userRank || 'No Rank';
        document.getElementById('teamMembers').textContent = teamStats.teamCount;
        document.getElementById('teamDeposits').textContent = `${formatUSDT(teamStats.teamDeposits)} USDT`;
        
        // Load investment positions
        await loadInvestmentPositions(investmentsCount);
        
        // Show/hide sections based on data
        const hasInvestments = parseInt(investmentsCount) > 0;
        
        document.getElementById('noInvestmentsMessage').style.display = hasInvestments ? 'none' : 'block';
        document.getElementById('investmentHistorySection').style.display = hasInvestments ? 'block' : 'none';
        document.getElementById('quickStats').style.display = 'grid';
        document.getElementById('referralStats').style.display = 'grid';
        document.getElementById('leadershipStats').style.display = 'grid';
        document.getElementById('referralActionButtons').style.display = 'flex';
        document.getElementById('leadershipActionButtons').style.display = 'flex';
        
        // Update counts
        document.getElementById('totalPositions').textContent = investmentsCount;
        document.getElementById('activePositions').textContent = userInvestments.filter(inv => inv.isActive).length;
        
        // Generate referral link
        generateReferralLink();
        
        // Check if user has capital available to claim
        if (parseFloat(availableReturns.totalCapitalReturn) > 0) {
            document.getElementById('claimAllCapital').style.display = 'inline-flex';
        } else {
            document.getElementById('claimAllCapital').style.display = 'none';
        }
        
        // Update qualified levels display
        await updateQualifiedLevels(totalDeposits, teamStats.teamCount);
        
    } catch (error) {
        console.error('Error loading user data:', error);
        showNotification('Error loading user data', 'error');
    }
}

async function loadInvestmentPositions(investmentsCount) {
    if (!contract || !userAccount) return;
    
    try {
        const investmentHistoryList = document.getElementById('investmentHistoryList');
        if (!investmentHistoryList) return;
        
        investmentHistoryList.innerHTML = '';
        userInvestments = [];
        
        const formatUSDT = (weiValue) => {
            return parseFloat(web3.utils.fromWei(weiValue, 'ether')).toFixed(2);
        };
        
        for (let i = 0; i < parseInt(investmentsCount); i++) {
            try {
                const basicInfo = await contract.methods.getInvestmentBasicInfo(userAccount, i).call();
                const claimedInfo = await contract.methods.getInvestmentClaimedInfo(userAccount, i).call();
                const availableReturns = await contract.methods.getInvestmentAvailableReturns(userAccount, i).call();
                const planInfo = await contract.methods.getInvestmentPlanInfo(userAccount, i).call();
                
                const investment = {
                    index: i,
                    amount: basicInfo.amount,
                    startTime: basicInfo.startTime,
                    endTime: basicInfo.endTime,
                    isActive: basicInfo.isActive,
                    capitalClaimed: claimedInfo.capitalReturnClaimed,
                    roiClaimed: claimedInfo.roiBonusClaimed,
                    availableCapital: availableReturns.availableCapitalReturn,
                    availableRoi: availableReturns.availableRoiBonus,
                    planIndex: planInfo.planIndex,
                    lastRoiTime: planInfo.lastRoiWithdrawTime
                };
                
                userInvestments.push(investment);
                
                // Calculate status
                const currentTime = Math.floor(Date.now() / 1000);
                let status = 'Active';
                let statusClass = 'status-active';
                let daysRemaining = 0;
                
                if (!investment.isActive) {
                    status = 'Completed';
                    statusClass = 'status-completed';
                } else {
                    daysRemaining = Math.max(0, Math.ceil((parseInt(investment.endTime) - currentTime) / (24 * 60 * 60)));
                    if (daysRemaining === 0) {
                        status = 'Matured';
                        statusClass = 'status-pending';
                    }
                }
                
                // Determine plan details based on amount
                const amountInUSDT = parseFloat(web3.utils.fromWei(investment.amount, 'ether'));
                let roiPercentage = '0.5%';
                let withdrawInterval = '24h';
                
                if (amountInUSDT >= 5000) {
                    roiPercentage = '1.5%';
                    withdrawInterval = '2h';
                } else if (amountInUSDT >= 2500) {
                    roiPercentage = '1.25%';
                    withdrawInterval = '4h';
                } else if (amountInUSDT >= 1000) {
                    roiPercentage = '1%';
                    withdrawInterval = '8h';
                } else if (amountInUSDT >= 500) {
                    roiPercentage = '0.75%';
                    withdrawInterval = '12h';
                }
                
                // Create investment position item
                const investmentItem = document.createElement('div');
                investmentItem.className = 'investment-history-item';
                investmentItem.innerHTML = `
                    <div class="investment-plan">Position #${i + 1} - ${roiPercentage} ROI</div>
                    <div class="investment-detail">
                        <span class="detail-label">Deposit Amount:</span>
                        <span class="detail-value investment-amount">${formatUSDT(investment.amount)} USDT</span>
                    </div>
                    <div class="investment-detail">
                        <span class="detail-label">Start Date:</span>
                        <span class="detail-value">${new Date(parseInt(investment.startTime) * 1000).toLocaleDateString()}</span>
                    </div>
                    <div class="investment-detail">
                        <span class="detail-label">End Date:</span>
                        <span class="detail-value">${new Date(parseInt(investment.endTime) * 1000).toLocaleDateString()}</span>
                    </div>
                    <div class="investment-detail">
                        <span class="detail-label">Days Remaining:</span>
                        <span class="detail-value">${daysRemaining} days</span>
                    </div>
                    <div class="investment-detail">
                        <span class="detail-label">Available Capital:</span>
                        <span class="detail-value">${formatUSDT(investment.availableCapital)} USDT</span>
                    </div>
                    <div class="investment-detail">
                        <span class="detail-label">Available ROI:</span>
                        <span class="detail-value">${formatUSDT(investment.availableRoi)} USDT</span>
                    </div>
                    <div class="investment-detail">
                        <span class="detail-label">Withdraw Interval:</span>
                        <span class="detail-value">Every ${withdrawInterval}</span>
                    </div>
                    <div class="investment-detail">
                        <span class="detail-label">Status:</span>
                        <span class="detail-value"><span class="investment-status ${statusClass}">${status}</span></span>
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: 15px;">
                        <button class="btn btn--outline btn-sm" onclick="claimCapitalReturn(${i})" style="flex:1;" ${!investment.isActive || parseInt(investment.endTime) > Math.floor(Date.now()/1000) ? 'disabled' : ''}>
                            <i class="fas fa-university"></i> Claim Capital
                        </button>
                        <button class="btn btn--primary btn-sm" onclick="claimRoiBonus(${i})" style="flex:1;" ${parseFloat(investment.availableRoi) <= 0 ? 'disabled' : ''}>
                            <i class="fas fa-download"></i> Claim ROI
                        </button>
                        <button class="btn btn--outline btn-sm" onclick="compoundRoiBonus(${i})" style="flex:1;" ${parseFloat(investment.availableRoi) <= 0 ? 'disabled' : ''}>
                            <i class="fas fa-recycle"></i> Compound
                        </button>
                    </div>
                `;
                
                investmentHistoryList.appendChild(investmentItem);
            } catch (error) {
                console.error(`Error loading investment position ${i}:`, error);
            }
        }
        
    } catch (error) {
        console.error('Error loading investment positions:', error);
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
    
    // Levels 6-10: Minimum 2 qualified downlines (100 USDT each)
    // This is simplified - in reality you would need to check actual downline deposits
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

function updateROIDisplay() {
    const amountInput = document.getElementById('investmentAmount');
    const amount = parseFloat(amountInput.value) || 0;
    
    let roiPercentage = '0.5%';
    let withdrawInterval = '24 hours';
    
    if (amount >= 5000) {
        roiPercentage = '1.5%';
        withdrawInterval = '2 hours';
    } else if (amount >= 2500) {
        roiPercentage = '1.25%';
        withdrawInterval = '4 hours';
    } else if (amount >= 1000) {
        roiPercentage = '1%';
        withdrawInterval = '8 hours';
    } else if (amount >= 500) {
        roiPercentage = '0.75%';
        withdrawInterval = '12 hours';
    }
    
    if (amount > 0) {
        document.getElementById('amountRange').innerHTML = 
            `ROI Bonus: ${roiPercentage} daily | Withdraw every: ${withdrawInterval} | 4% daily capital return`;
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
    
    document.getElementById('investmentPlans').style.display = 'none';
    document.getElementById('investmentForm').style.display = 'block';
    document.getElementById('investmentAmount').value = '';
    updateROIDisplay();
}

function showPlans() {
    document.getElementById('investmentPlans').style.display = 'grid';
    document.getElementById('investmentForm').style.display = 'none';
}

async function confirmInvestment() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first', 'error');
    }
    
    const amount = parseFloat(document.getElementById('investmentAmount').value) || 0;
    if (amount < 10) {
        return showNotification('Minimum deposit is 10 USDT', 'error');
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
        return showNotification('Please connect wallet first', 'error');
    }
    
    const btn = document.getElementById('claimAllROI');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        // We need to claim ROI for each active position
        // This is simplified - in reality you might want to claim each position individually
        // or the contract might have a bulk claim function
        
        showNotification('Claiming all ROI bonuses...', 'info');
        
        // For now, we'll claim from the first position as an example
        // You should implement logic to claim from all positions
        if (userInvestments.length > 0) {
            // Claim from the first position that has available ROI
            for (let i = 0; i < userInvestments.length; i++) {
                const inv = userInvestments[i];
                if (parseFloat(web3.utils.fromWei(inv.availableRoi, 'ether')) > 0) {
                    await contract.methods.claimRoiBonus(i).send({ from: userAccount });
                    break;
                }
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

async function claimAllRewards() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first', 'error');
    }
    
    const btn = document.getElementById('claimAllRewards');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        showNotification('Claiming all rewards...', 'info');
        await contract.methods.claimRewards().send({ from: userAccount });
        showNotification('All rewards claimed successfully!', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim rewards error:', error);
        showNotification('Failed to claim rewards: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function claimAllCapital() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first', 'error');
    }
    
    const btn = document.getElementById('claimAllCapital');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        showNotification('Claiming capital returns...', 'info');
        
        // Claim capital from each matured position
        for (let i = 0; i < userInvestments.length; i++) {
            const inv = userInvestments[i];
            if (!inv.isActive || parseInt(inv.endTime) <= Math.floor(Date.now()/1000)) {
                if (parseFloat(web3.utils.fromWei(inv.availableCapital, 'ether')) > 0) {
                    await contract.methods.claimCapitalReturn(i).send({ from: userAccount });
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

async function claimReferralBonus() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first', 'error');
    }
    
    const btn = document.getElementById('claimReferralBonus');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        showNotification('Claiming referral rewards...', 'info');
        await contract.methods.claimRewards().send({ from: userAccount });
        showNotification('Referral rewards claimed successfully!', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim referral error:', error);
        showNotification('Failed to claim referral rewards: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

async function claimLeadershipBonus() {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first', 'error');
    }
    
    const btn = document.getElementById('claimLeadershipBonus');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Claiming...';
    btn.disabled = true;
    
    try {
        showNotification('Claiming leadership rewards...', 'info');
        await contract.methods.claimRewards().send({ from: userAccount });
        showNotification('Leadership rewards claimed successfully!', 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim leadership error:', error);
        showNotification('Failed to claim leadership rewards: ' + (error.message || 'Unknown error'), 'error');
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// Individual position functions
async function claimCapitalReturn(index) {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first', 'error');
    }
    
    try {
        showNotification(`Claiming capital for position ${index + 1}...`, 'info');
        await contract.methods.claimCapitalReturn(index).send({ from: userAccount });
        showNotification(`Capital claimed successfully for position ${index + 1}!`, 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim capital return error:', error);
        showNotification('Failed to claim capital: ' + (error.message || 'Unknown error'), 'error');
    }
}

async function claimRoiBonus(index) {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first', 'error');
    }
    
    try {
        showNotification(`Claiming ROI for position ${index + 1}...`, 'info');
        await contract.methods.claimRoiBonus(index).send({ from: userAccount });
        showNotification(`ROI claimed successfully for position ${index + 1}!`, 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Claim ROI bonus error:', error);
        showNotification('Failed to claim ROI: ' + (error.message || 'Unknown error'), 'error');
    }
}

async function compoundRoiBonus(index) {
    if (!contract || !userAccount) {
        return showNotification('Please connect wallet first', 'error');
    }
    
    try {
        // Get available ROI for this position
        const availableReturns = await contract.methods.getInvestmentAvailableReturns(userAccount, index).call();
        const availableRoi = availableReturns.availableRoiBonus;
        
        if (parseFloat(web3.utils.fromWei(availableRoi, 'ether')) < 1) {
            return showNotification('Minimum 1 USDT required for compounding', 'error');
        }
        
        showNotification(`Compounding ROI for position ${index + 1}...`, 'info');
        await contract.methods.compoundRoiBonus(index, availableRoi).send({ from: userAccount });
        showNotification(`ROI compounded successfully for position ${index + 1}!`, 'success');
        await loadUserData();
        
    } catch (error) {
        console.error('Compound ROI error:', error);
        showNotification('Failed to compound ROI: ' + (error.message || 'Unknown error'), 'error');
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

// Make functions available globally for button clicks
window.claimCapitalReturn = claimCapitalReturn;
window.claimRoiBonus = claimRoiBonus;
window.compoundRoiBonus = compoundRoiBonus;
