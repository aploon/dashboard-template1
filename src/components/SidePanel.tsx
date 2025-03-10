import React from 'react';
import { X, Home, MessageCircle, GitPullRequest, Building2, Boxes, Compass, ShoppingBag } from 'lucide-react';

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SidePanel({ isOpen, onClose }: SidePanelProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity z-40"
          onClick={onClose}
        />
      )}
      
      {/* Panel */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out z-50`}>
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Logo"
              className="w-8 h-8"
            />
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Home className="w-4 h-4 mr-3" />
              Home
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <MessageCircle className="w-4 h-4 mr-3" />
              Issues
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <GitPullRequest className="w-4 h-4 mr-3" />
              Pull requests
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Building2 className="w-4 h-4 mr-3" />
              Projects
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Boxes className="w-4 h-4 mr-3" />
              Codespaces
            </a>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Explore</h3>
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <Compass className="w-4 h-4 mr-3" />
                  Explore
                </a>
                <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                  <ShoppingBag className="w-4 h-4 mr-3" />
                  Marketplace
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}