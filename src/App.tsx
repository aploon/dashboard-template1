import React, { useState } from 'react';
import { SidePanel } from './components/SidePanel';
import { ProfilePanel } from './components/ProfilePanel';
import { Navbar } from './components/Navbar';
import { SecondaryNav } from './components/SecondaryNav';
import { OverviewView } from './components/views/OverviewView';
import { RepositoriesView } from './components/views/RepositoriesView';
import { MailOpen, Plus } from "lucide-react"
import { Button } from '@/components/ui/button';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('overview');

  const renderContent = () => {
    switch (currentTab) {
      case 'overview':
        return <OverviewView />;
      case 'repositories':
        return <RepositoriesView />;
      default:
        return (
          <div className="p-6 text-center text-gray-500²">
            Content for {currentTab} tab is coming soon... <br />
            <Button variant="outline">Click me</Button>
            <Button>
      <MailOpen /> Login with Email
    </Button>
    <Button variant="outline">
              <Plus/>
              <span>New</span>
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SidePanel isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <ProfilePanel isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      <Navbar 
        onMenuClick={() => setIsMenuOpen(true)}
        onProfileClick={() => setIsProfileOpen(!isProfileOpen)}
      />
      <SecondaryNav currentTab={currentTab} onTabChange={setCurrentTab} />

      {/* Main Content */}
      <main className="container mx-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;