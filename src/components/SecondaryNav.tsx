import React from 'react';
import { Package, GitFork, Star } from 'lucide-react';

interface TabProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function SecondaryNav({ currentTab, onTabChange }: TabProps) {
  const tabs = [
    { id: 'overview', label: 'Overview', count: null },
    { id: 'repositories', label: 'Repositories', icon: Package, count: 101 },
    { id: 'projects', label: 'Projects', icon: GitFork, count: null },
    { id: 'packages', label: 'Packages', icon: Package, count: null },
    { id: 'stars', label: 'Stars', icon: Star, count: 37 }
  ];

  return (
    <div className="border-b border-gray-200">
      <div className="px-4 mx-auto">
        <nav className="flex -mb-px">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center px-4 py-4 text-sm font-medium border-b-2 ${
                  currentTab === tab.id
                    ? 'text-gray-900 border-red-500'
                    : 'text-gray-600 border-transparent hover:border-gray-300'
                }`}
              >
                {Icon && <Icon className="w-4 h-4 mr-2" />}
                {tab.label}
                {tab.count !== null && (
                  <span className="ml-2 text-xs font-semibold text-gray-500">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}