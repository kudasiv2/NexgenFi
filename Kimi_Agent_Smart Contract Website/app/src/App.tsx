import { Web3Provider } from '@/contexts/Web3Context';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Dashboard } from '@/sections/Dashboard';
import { Invest } from '@/sections/Invest';
import { Rewards } from '@/sections/Rewards';
import { Team } from '@/sections/Team';
import { Positions } from '@/sections/Positions';
import { Footer } from '@/sections/Footer';
import './App.css';

function App() {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navigation />
        <main>
          <Hero />
          <Dashboard />
          <Invest />
          <Rewards />
          <Team />
          <Positions />
        </main>
        <Footer />
      </div>
    </Web3Provider>
  );
}

export default App;
