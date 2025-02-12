'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Eye, Scale, Shield, Lock, Bot, Star, Users, AlertTriangle, FileText } from 'lucide-react';

type RiskLevel = 'low' | 'medium' | 'high';
type ModelType = 'gpt4' | 'claude2' | 'llama2';
type AlertSeverity = 'high' | 'medium' | 'low';

interface ModelMetrics {
  transparency: number;
  bias: number;
  robustness: number;
  resilience: number;
  compliance: number;
}

interface ComplianceFramework {
  name: string;
  status: 'Compliant' | 'In Progress';
  score: number;
}

interface RiskAlert {
  severity: AlertSeverity;
  message: string;
  impact: string;
  action: string;
}

interface RiskFactor {
  factor: string;
  score: number;
}

interface MarketplaceAgent {
  name: string;
  category: string;
  rating: number;
  users: string;
  riskLevel: RiskLevel;
  riskFactors: RiskFactor[];
  description: string;
  weeklyTrend: string;
}

const modelMetrics: Record<ModelType, ModelMetrics> = {
  gpt4: {
    transparency: 85,
    bias: 12,
    robustness: 90,
    resilience: 88,
    compliance: 92
  },
  claude2: {
    transparency: 82,
    bias: 15,
    robustness: 87,
    resilience: 85,
    compliance: 90
  },
  llama2: {
    transparency: 78,
    bias: 18,
    robustness: 85,
    resilience: 82,
    compliance: 88
  }
};

const complianceFrameworks: ComplianceFramework[] = [
  { name: 'NIST AI RMF', status: 'Compliant', score: 92 },
  { name: 'EU AI Act', status: 'In Progress', score: 85 },
  { name: 'AI Safety Institute', status: 'Compliant', score: 88 }
];

const riskAlerts: RiskAlert[] = [
  {
    severity: 'high',
    message: 'Potential bias detected in model responses for demographic groups',
    impact: 'Fairness and Ethics',
    action: 'Review and retrain'
  },
  {
    severity: 'medium',
    message: 'Model robustness decreased by 5% in latest evaluation',
    impact: 'Performance',
    action: 'Investigate root cause'
  }
];

const marketplaceAgents: MarketplaceAgent[] = [
  {
    name: "ResearchGPT",
    category: "Research Assistant",
    rating: 4.8,
    users: "250K+",
    riskLevel: "low",
    riskFactors: [
      { factor: "Data Privacy", score: 90 },
      { factor: "Output Reliability", score: 85 },
      { factor: "Bias Control", score: 88 }
    ],
    description: "Specialized in academic research and literature review",
    weeklyTrend: "+15%"
  },
  {
    name: "CodeCopilot Pro",
    category: "Development Assistant",
    rating: 4.6,
    users: "500K+",
    riskLevel: "medium",
    riskFactors: [
      { factor: "Security", score: 75 },
      { factor: "Code Quality", score: 82 },
      { factor: "License Compliance", score: 70 }
    ],
    description: "AI-powered code generation and review",
    weeklyTrend: "+28%"
  },
  {
    name: "DataSage",
    category: "Data Analysis",
    rating: 4.7,
    users: "180K+",
    riskLevel: "medium",
    riskFactors: [
      { factor: "Data Protection", score: 85 },
      { factor: "Analysis Accuracy", score: 88 },
      { factor: "Resource Usage", score: 72 }
    ],
    description: "Advanced data analysis and visualization assistant",
    weeklyTrend: "+22%"
  }
];

const getRiskLevelColor = (level: RiskLevel): string => {
  const colors: Record<RiskLevel, string> = {
    low: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    high: "bg-red-100 text-red-800"
  };
  return colors[level];
};

const DashboardTab = () => {
  const [selectedModel] = useState<ModelType>('gpt4');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Eye className="h-8 w-8 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">Transparency Score</p>
                  <h3 className="text-2xl font-bold">{modelMetrics[selectedModel].transparency}%</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Scale className="h-8 w-8 text-yellow-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">Bias Level</p>
                  <h3 className="text-2xl font-bold">{modelMetrics[selectedModel].bias}%</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-green-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">Robustness Score</p>
                  <h3 className="text-2xl font-bold">{modelMetrics[selectedModel].robustness}%</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Lock className="h-8 w-8 text-purple-500 mr-2" />
                <div>
                  <p className="text-sm font-medium">Resilience Score</p>
                  <h3 className="text-2xl font-bold">{modelMetrics[selectedModel].resilience}%</h3>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Compliance Framework Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                  <span className="font-medium">{framework.name}</span>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 rounded text-sm ${
                      framework.status === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {framework.status}
                    </span>
                    <span className="ml-4 font-bold">{framework.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskAlerts.map((alert, index) => (
                <Alert key={index} variant={alert.severity === 'high' ? 'destructive' : 'warning'}>
                  <AlertTitle className="flex items-center">
                    {alert.severity === 'high' ? 'High Risk Alert' : 'Medium Risk Alert'}
                  </AlertTitle>
                  <AlertDescription>
                    <p className="mt-1">{alert.message}</p>
                    <div className="mt-2 flex justify-between text-sm">
                      <span>Impact: {alert.impact}</span>
                      <span>Action: {alert.action}</span>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bot className="h-5 w-5 mr-2" />
            AI Tools Deployed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {marketplaceAgents.map((agent, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <Bot className="h-8 w-8 text-blue-500" />
                      <div>
                        <h3 className="text-xl font-bold">{agent.name}</h3>
                        <p className="text-gray-500">{agent.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-1 font-medium">{agent.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400" />
                        <span className="ml-1">{agent.users}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-sm ${getRiskLevelColor(agent.riskLevel)}`}>
                        {agent.riskLevel.toUpperCase()} RISK
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600">{agent.description}</p>

                  <div className="grid grid-cols-3 gap-4">
                    {agent.riskFactors.map((factor, idx) => (
                      <div key={idx} className="p-3 bg-white rounded">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{factor.factor}</span>
                          <span className={`text-sm font-bold ${
                            factor.score >= 80 ? 'text-green-600' : 
                            factor.score >= 70 ? 'text-yellow-600' : 
                            'text-red-600'
                          }`}>
                            {factor.score}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Weekly Trend: <span className="text-green-600">{agent.weeklyTrend}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardTab;