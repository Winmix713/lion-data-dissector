
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ColorCard from './ColorCard';

const ColorsTab: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Color Palette</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <ColorCard name="Primary Background" color="bg-gradient-to-b from-gray-900/95 via-gray-900/98 to-black" value="from-gray-900/95 via-gray-900/98 to-black" />
        <ColorCard name="Accent Blue" color="bg-blue-500" value="#3b82f6 (blue-500)" />
        <ColorCard name="Accent Red" color="bg-red-500" value="#ef4444 (red-500)" />
        <ColorCard name="Accent Green" color="bg-emerald-500" value="#10b981 (emerald-500)" />
      </div>
      
      <h3 className="text-lg font-semibold mb-3">Secondary Colors</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ColorCard name="Text Primary" color="bg-white" value="#ffffff (white)" />
        <ColorCard name="Text Secondary" color="bg-gray-400" value="#9ca3af (gray-400)" />
        <ColorCard name="Border Light" color="bg-white/10" value="rgba(255,255,255,0.1)" />
        <ColorCard name="Card Background" color="bg-black/20" value="rgba(0,0,0,0.2)" />
      </div>
    </>
  );
};

export default ColorsTab;
