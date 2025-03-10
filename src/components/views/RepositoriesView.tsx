import React from 'react';
import { Star } from 'lucide-react';

export function RepositoriesView() {
  const repositories = [
    {
      name: 'op2a',
      description: 'A modern web application',
      language: 'TypeScript',
      stars: 42,
      updatedAt: '2 days ago'
    },
    {
      name: 'api-op2a',
      description: 'Backend API for op2a',
      language: 'PHP',
      stars: 28,
      updatedAt: '3 days ago'
    },
    {
      name: 'coderxcoder',
      description: 'Developer tools and utilities',
      language: 'JavaScript',
      stars: 156,
      updatedAt: '1 week ago'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-96 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Type</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Language</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">Sort</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            New
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <div key={repo.name} className="p-4 border rounded-lg">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">{repo.name}</h3>
                <p className="mt-1 text-gray-600">{repo.description}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{repo.language}</span>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star size={16} className="mr-1" />
                    {repo.stars}
                  </div>
                  <span className="text-sm text-gray-600">Updated {repo.updatedAt}</span>
                </div>
              </div>
              <button className="flex items-center px-3 py-1 border rounded-lg hover:bg-gray-50">
                <Star size={16} className="mr-1" />
                Star
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}