'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import DashboardTab from './DashboardTab';
import ExploreAIToolsTab from './ExploreAIToolsTab';
import PolicySenseTab from './PolicySenseTab';
import RiskRadarTab from './RiskRadarTab';

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'demo' && credentials.password === 'password') {
      onLogin();
    } else {
      setError('Invalid credentials. Try demo/password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          CoreTrust <span className="text-sm text-gray-500">by Tecto AI</span>
        </h1>
        <p className="text-gray-500">Agency over AI Transparency</p>
      </div>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 p-3 rounded-lg flex items-center gap-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Log In
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              Demo credentials: demo/password
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const CoreTrustDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">CoreTrust <span className="text-sm text-gray-500">by Tecto AI</span></h1>
            <p className="text-gray-500">Agency over AI Transparency</p>
          </div>
          <div className="flex items-center gap-4">
            <TabsList>
              <TabsTrigger value="overview">Dashboard</TabsTrigger>
              <TabsTrigger value="agents">Explore AI Tools</TabsTrigger>
              <TabsTrigger value="policy">PolicySense</TabsTrigger>
              <TabsTrigger value="riskradar">Risk Radar</TabsTrigger>
            </TabsList>
            <button
              onClick={onLogout}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

        <TabsContent value="overview">
          <DashboardTab />
        </TabsContent>

        <TabsContent value="agents">
          <ExploreAIToolsTab />
        </TabsContent>

        <TabsContent value="policy">
          <PolicySenseTab />
        </TabsContent>

        <TabsContent value="riskradar">
          <RiskRadarTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return <CoreTrustDashboard onLogout={() => setIsLoggedIn(false)} />;
};

export default App;