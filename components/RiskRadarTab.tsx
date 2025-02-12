'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Input } from "@/components/ui/input";
import {
  AlertTriangle,
  Scale,
  Shield,
  Award,
  BookOpen,
  BarChart2,
  FileText,
  Gavel,
  Search,
  TrendingUp,
  History,
  CheckCircle
} from 'lucide-react';

interface RiskFactor {
  category: string;
  score: number;
  trend: 'increasing' | 'stable' | 'decreasing';
  precedents: number;
  description: string;
  impact: string;
  recommendations: string[];
  recentCases: {
    title: string;
    date: string;
    outcome: string;
    relevance: number;
  }[];
}

const riskFactors: RiskFactor[] = [
  {
    category: "Data Privacy",
    score: 78,
    trend: "increasing",
    precedents: 12,
    description: "Rising concerns over personal data handling and consent mechanisms",
    impact: "Potential regulatory fines and reputation damage",
    recommendations: [
      "Implement enhanced data anonymization protocols",
      "Strengthen user consent management",
      "Regular privacy impact assessments",
      "Update data retention policies"
    ],
    recentCases: [
      {
        title: "In re AI Corp Data Breach",
        date: "2024-01-15",
        outcome: "$5M settlement",
        relevance: 85
      },
      {
        title: "State v. TechAI Solutions",
        date: "2023-12-10",
        outcome: "Consent decree",
        relevance: 75
      }
    ]
  },
  {
    category: "Model Bias",
    score: 65,
    trend: "stable",
    precedents: 8,
    description: "Algorithmic bias affecting protected classes",
    impact: "Discrimination claims and regulatory scrutiny",
    recommendations: [
      "Implement comprehensive bias testing",
      "Diversify training data sources",
      "Regular fairness audits",
      "Document bias mitigation efforts"
    ],
    recentCases: [
      {
        title: "Smith v. AI Hiring Systems",
        date: "2024-02-01",
        outcome: "Pending",
        relevance: 90
      }
    ]
  },
  {
    category: "AI Safety",
    score: 72,
    trend: "increasing",
    precedents: 5,
    description: "Concerns over AI system reliability and safety measures",
    impact: "Safety incidents and liability exposure",
    recommendations: [
      "Implement robust testing protocols",
      "Enhance monitoring systems",
      "Establish clear safety guidelines",
      "Regular safety audits"
    ],
    recentCases: [
      {
        title: "AutoAI Safety Investigation",
        date: "2024-01-20",
        outcome: "New safety protocols mandated",
        relevance: 80
      }
    ]
  }
];

const RiskRadarTab = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-yellow-600";
    return "text-green-600";
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'increasing':
        return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'decreasing':
        return <TrendingUp className="h-4 w-4 text-green-500 transform rotate-180" />;
      default:
        return <TrendingUp className="h-4 w-4 text-yellow-500 transform rotate-90" />;
    }
  };

  const filteredRisks = riskFactors.filter(risk =>
    risk.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    risk.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Risk Radar™</h2>
          <p className="text-gray-500">Predictive risk assessment based on case precedents</p>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search risks..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Overall Risk Score</p>
                <p className="text-2xl font-bold">72/100</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Gavel className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-sm text-gray-500">Active Cases</p>
                <p className="text-2xl font-bold">25</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-500">Risk Coverage</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {filteredRisks.map((risk, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className={`h-5 w-5 ${getScoreColor(risk.score)}`} />
                  {risk.category}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500">{risk.precedents} precedents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(risk.trend)}
                    <span className="text-sm">{risk.trend}</span>
                  </div>
                  <div className={`text-lg font-bold ${getScoreColor(risk.score)}`}>
                    {risk.score}/100
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Risk Analysis
                    </h3>
                    <p className="mt-1 text-gray-600">{risk.description}</p>
                    <p className="mt-2 text-sm font-medium">Impact: {risk.impact}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Recommended Actions
                    </h3>
                    <ul className="mt-1 space-y-1">
                      {risk.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
                    <History className="h-4 w-4" />
                    Recent Case Precedents
                  </h3>
                  <div className="space-y-3">
                    {risk.recentCases.map((caseItem, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-sm">{caseItem.title}</h4>
                            <p className="text-sm text-gray-500">{caseItem.date}</p>
                          </div>
                          <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {caseItem.outcome}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-sm text-gray-500">Relevance:</span>
                          <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: `${caseItem.relevance}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{caseItem.relevance}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RiskRadarTab;