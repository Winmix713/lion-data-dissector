
import React from 'react';
import { Badge } from "@/components/ui/badge";

const AnimationTab: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Animation & Effects</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Loading States</h3>
          <div className="flex flex-wrap gap-4">
            <div className="p-4 bg-black/20 rounded-lg border border-white/5">
              <div className="w-32 h-4 bg-white/5 rounded animate-pulse mb-2"></div>
              <div className="w-24 h-4 bg-white/5 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Transitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-black/20 rounded-lg border border-white/5 hover:bg-white/5 transition-colors duration-300">
              <p className="text-sm">Hover Color (300ms)</p>
            </div>
            
            <div className="p-4 bg-black/20 rounded-lg border border-white/5 hover:scale-105 transition-transform duration-300">
              <p className="text-sm">Hover Scale (300ms)</p>
            </div>
            
            <div className="group p-4 bg-black/20 rounded-lg border border-white/5">
              <p className="text-sm">Item <span className="text-blue-400 group-hover:translate-x-1 inline-block transition-transform duration-300">→</span></p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Live Indicators</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Badge className="bg-red-500 animate-pulse">LIVE</Badge>
              <span className="text-sm">Pulsing Badge</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-ping"></div>
              <span className="text-sm">Ping Animation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimationTab;
