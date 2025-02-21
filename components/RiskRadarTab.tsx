import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertTriangle, History, Shield, Scale, CheckCircle, Bot } from 'lucide-react';

const RiskRadar = () => {
  // Sample data for selected and deployed AI tools
  const [deployedTools] = useState({
    selectedTools: [
      {
        id: 1,
        name: 'ResearchGPT',
        category: 'Research Assistant',
        vendor: 'AI Research Labs',
        deploymentDate: '2024-02',
        casePrecedents: [
          {
            title: 'Data Privacy Implementation',
            company: 'Academia Research',
            date: '2024-01',
            description: 'Enhanced privacy controls for research data handling',
            impact: 'Strengthened data protection for 250K+ users',
            resolution: 'Implemented advanced encryption and access controls'
          }
        ],
        identifiedRisks: [
          'Data Privacy Management',
          'Output Reliability Assurance',
          'Bias Control Implementation',
          'Academic Integrity Verification'
        ],
        mitigationStatus: 'Resolved',
        riskLevel: 'Low'
      },
      {
        id: 2,
        name: 'CodeCopilot Pro',
        category: 'Development Assistant',
        vendor: 'Code Solutions Inc',
        deploymentDate: '2024-01',
        casePrecedents: [
          {
            title: 'Security Vulnerability Detection',
            company: 'TechCorp',
            date: '2024-02',
            description: 'Identified potential security risks in generated code',
            impact: 'Affected code quality for enterprise clients',
            resolution: 'Enhanced security scanning and validation protocols'
          }
        ],
        identifiedRisks: [
          'Security Risk Assessment',
          'Code Quality Assurance',
          'License Compliance Verification',
          'Resource Optimization'
        ],
        mitigationStatus: 'In Progress',
        riskLevel: 'Medium'
      },
      {
        id: 3,
        name: 'DataSage',
        category: 'Data Analysis',
        vendor: 'Data Analytics Corp',
        deploymentDate: '2024-02',
        casePrecedents: [
          {
            title: 'Analysis Accuracy Improvement',
            company: 'DataCorp',
            date: '2024-01',
            description: 'Enhanced data analysis accuracy and validation',
            impact: 'Improved analysis reliability for 180K+ users',
            resolution: 'Implemented advanced validation algorithms'
          }
        ],
        identifiedRisks: [
          'Data Protection Standards',
          'Analysis Accuracy Verification',
          'Resource Usage Optimization',
          'Scalability Management'
        ],
        mitigationStatus: 'Monitored',
        riskLevel: 'Medium'
      }
    ]
  });

  const getRiskLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getMitigationStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in progress':
        return <History className="w-4 h-4 text-yellow-600" />;
      case 'monitored':
        return <Shield className="w-4 h-4 text-blue-600" />;
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-6xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <Bot className="w-6 h-6 text-blue-600" />
          RiskRadar™ - Deployed AI Tools Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {deployedTools.selectedTools.map((tool) => (
            <div key={tool.id} className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">{tool.name}</h2>
                    <p className="text-gray-600">{tool.category} • {tool.vendor}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getMitigationStatusIcon(tool.mitigationStatus)}
                      <span className="text-sm">{tool.mitigationStatus}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${getRiskLevelColor(tool.riskLevel)}`}>
                      {tool.riskLevel} Risk
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
                    <History className="w-5 h-5 text-blue-600" />
                    Case Precedents
                  </h3>
                  <div className="space-y-3">
                    {tool.casePrecedents.map((precedent, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex justify-between mb-2">
                          <h4 className="font-medium">{precedent.title}</h4>
                          <span className="text-sm text-gray-500">{precedent.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{precedent.company}</p>
                        <p className="text-sm text-gray-600 mb-1">{precedent.description}</p>
                        <p className="text-sm text-red-600 mb-1">Impact: {precedent.impact}</p>
                        <p className="text-sm text-green-600">Resolution: {precedent.resolution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Identified Risks
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.identifiedRisks.map((risk, idx) => (
                      <div key={idx} className="bg-red-50 rounded-lg p-2">
                        <p className="text-sm text-gray-800">{risk}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskRadar;