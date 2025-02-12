'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import DashboardTab from './DashboardTab';
import ExploreAIToolsTab from './ExploreAIToolsTab';
import PolicySenseTab from './PolicySenseTab';
import RiskRadarTab from './RiskRadarTab';

const CoreTrustDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">CoreTrust <span className="text-sm text-gray-500">by Tecto AI</span></h1>
            <p className="text-gray-500">Agency over AI Transparency</p>
          </div>
          <TabsList>
            <TabsTrigger value="overview">Dashboard</TabsTrigger>
            <TabsTrigger value="agents">Explore AI Tools</TabsTrigger>
            <TabsTrigger value="policy">PolicySense</TabsTrigger>
            <TabsTrigger value="riskradar">Risk Radar</TabsTrigger>
          </TabsList>
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

export default CoreTrustDashboard;