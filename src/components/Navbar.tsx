import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Clock, Menu, Plus, Search } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
  onProfileClick: () => void;
}

export function Navbar({ onMenuClick, onProfileClick }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={onMenuClick}
            >
              <Menu />
            </Button>
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Logo"
              className="w-8 h-8 ml-4"
            />
            <div className="ml-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Type / to search"
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Plus/>New
            </Button>
            <Button variant="ghost" size={"icon"}>
              <Clock />
            </Button>
            <Button variant="ghost" size={"icon"}>
              <Bell />
            </Button>
            <button 
              onClick={onProfileClick}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}