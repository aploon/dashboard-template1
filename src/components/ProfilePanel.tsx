import React from 'react';
import { User, Package, Building2, Star, Users, Heart, Settings, Globe, Book, Headphones, Users2, LogOut } from 'lucide-react';

interface ProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfilePanel({ isOpen, onClose }: ProfilePanelProps) {
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
      <div className={`fixed inset-y-0 right-0 w-64 bg-white border-l border-gray-200 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out z-50`}>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-medium">aploon</div>
              <div className="text-sm text-gray-500">Arnaud</div>
            </div>
          </div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <User className="w-4 h-4 mr-3" />
              Your profile
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Package className="w-4 h-4 mr-3" />
              Your repositories
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Building2 className="w-4 h-4 mr-3" />
              Your projects
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Star className="w-4 h-4 mr-3" />
              Your stars
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Users className="w-4 h-4 mr-3" />
              Your organizations
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Building2 className="w-4 h-4 mr-3" />
              Your enterprises
            </a>
            <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <Heart className="w-4 h-4 mr-3" />
              Your sponsors
            </a>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                <Globe className="w-4 h-4 mr-3" />
                GitHub Website
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                <Book className="w-4 h-4 mr-3" />
                GitHub Docs
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                <Headphones className="w-4 h-4 mr-3" />
                GitHub Support
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                <Users2 className="w-4 h-4 mr-3" />
                GitHub Community
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                <LogOut className="w-4 h-4 mr-3" />
                Sign out
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}