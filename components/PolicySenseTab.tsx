'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const policyData = [
  {
    id: 1,
    name: "EU AI Act",
    region: "European Union",
    status: "Enacted",
    progress: 100,
    recentChanges: [
      {
        date: "2024-01-15",
        change: "Final text approved by European Parliament"
      },
      {
        date: "2024-01-10",
        change: "Mandatory requirements for high-risk AI systems finalized"
      }
    ],
    leader: {
      name: "Thierry Breton",
      role: "EU Commissioner for Internal Market",
      organization: "European Commission"
    },
    nextMilestone: "Implementation phase beginning Q2 2024",
    impact: "High"
  },
  {
    id: 2,
    name: "AI Risk Management Framework",
    region: "United States",
    status: "In Effect",
    progress: 100,
    recentChanges: [
      {
        date: "2024-01-20",
        change: "Updated guidelines for AI system evaluation"
      }
    ],
    leader: {
      name: "Laurie E. Locascio",
      role: "Director",
      organization: "NIST"
    },
    nextMilestone: "Framework update expected Q3 2024",
    impact: "Medium"
  },
  {
    id: 3,
    name: "AI Safety Summit Agreements",
    region: "International",
    status: "In Progress",
    progress: 75,
    recentChanges: [
      {
        date: "2024-02-01",
        change: "New signatories added to the agreement"
      }
    ],
    leader: {
      name: "Michelle Donelan",
      role: "Secretary of State",
      organization: "UK Department for Science, Innovation and Technology"
    },
    nextMilestone: "Next summit scheduled for June 2024",
    impact: "High"
  },
  {
    id: 4,
    name: "AI Guidelines for Autonomous Systems",
    region: "China",
    status: "In Development",
    progress: 60,
    recentChanges: [
      {
        date: "2024-01-25",
        change: "Draft regulations released for public comment"
      }
    ],
    leader: {
      name: "Wu Zhaohui",
      role: "Minister",
      organization: "Ministry of Science and Technology"
    },
    nextMilestone: "Final draft expected Q2 2024",
    impact: "High"
  },
  {
    id: 5,
    name: "AI Governance Framework",
    region: "Singapore",
    status: "In Effect",
    progress: 100,
    recentChanges: [
      {
        date: "2024-01-05",
        change: "Updated guidelines for AI deployment in finance sector"
      }
    ],
    leader: {
      name: "Josephine Teo",
      role: "Minister",
      organization: "Ministry of Communications and Information"
    },
    nextMilestone: "Sector-specific guidelines ongoing",
    impact: "Medium"
  }
];

const PolicySenseTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Global AI Policy Monitor</h2>
        <div className="flex gap-2">
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Enacted</span>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">In Progress</span>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">In Development</span>
        </div>
      </div>

      <div className="space-y-4">
        {policyData.map((policy) => (
          <Card key={policy.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {policy.name}
                    <span className={`text-sm px-2 py-1 rounded ${
                      policy.status === 'Enacted' ? 'bg-green-100 text-green-800' :
                      policy.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {policy.status}
                    </span>
                  </CardTitle>
                  <p className="text-sm text-gray-500">{policy.region}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Progress:</span>
                  <div className="w-32 h-2 bg-gray-200 rounded">
                    <div 
                      className="h-full bg-blue-500 rounded" 
                      style={{ width: `${policy.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{policy.progress}%</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Recent Changes</h3>
                  <div className="space-y-2">
                    {policy.recentChanges.map((change, index) => (
                      <div key={index} className="text-sm">
                        <span className="text-gray-500">{change.date}:</span> {change.change}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Policy Leadership</h3>
                    <div className="text-sm">
                      <p className="font-medium">{policy.leader.name}</p>
                      <p className="text-gray-500">{policy.leader.role}</p>
                      <p className="text-gray-500">{policy.leader.organization}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Next Milestone</h3>
                    <p className="text-sm">{policy.nextMilestone}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Impact Level:</span>
                  <span className={`px-2 py-1 rounded text-sm ${
                    policy.impact === 'High' ? 'bg-red-100 text-red-800' :
                    policy.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {policy.impact}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PolicySenseTab;