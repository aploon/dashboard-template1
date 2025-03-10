import React from 'react';

export function OverviewView() {
  return (
    <div className="p-6">
      <div className="max-w-4xl">
        <div className="flex items-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold">Arnaud</h1>
            <p className="text-gray-600">@aploon</p>
            <p className="mt-2 text-gray-700">code, code, code, just code</p>
          </div>
        </div>
        
        <div className="prose max-w-none">
          <h2 className="text-lg font-semibold mb-4">Popular repositories</h2>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((repo) => (
              <div key={repo} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-blue-600">repository-{repo}</h3>
                  <span className="text-xs text-gray-500">Public</span>
                </div>
                <p className="text-sm text-gray-600">
                  Description of repository {repo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}