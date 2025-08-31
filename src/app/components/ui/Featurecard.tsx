"use client";

import { ReactNode, useState } from "react";
import { Circle, BarChart3 } from "lucide-react";

interface FeatureItem {
  id: string;
  label: string;
  description: string;
  active?: boolean;
  icon?: ReactNode;
}

interface FeaturecardProps {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export default function Featurecard({ title, subtitle, items }: FeaturecardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className=" h-96 bg-gray-900/20 backdrop-blur-xl rounded-4xl p-8 relative border border-white/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle orangish inward border effect */}
      <div className="absolute inset-3 rounded-2xl pointer-events-none"
           style={{
             boxShadow: 'inset 0 0 20px rgba(249, 116, 22, 0.33), inset 0 0 40px rgba(249, 115, 22, 0.1)'
           }}>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col transition-all duration-300 ease-out ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}>
        {/* Header */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-white text-3xl font-medium">{title}</h1>
          <p className="text-gray-400 text-base leading-relaxed px-4">
            {subtitle}
          </p>
        </div>
        
        {/* Task Items */}
    
      </div>
    </div>
  );
}