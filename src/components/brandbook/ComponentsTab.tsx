
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Eye } from 'lucide-react';

const ComponentsTab: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Components</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Cards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black/20 border-white/10 rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Match Card</div>
                    <Badge className="bg-blue-500">Regular</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">Team A</div>
                    <div className="text-sm">Team B</div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-lg font-bold">2</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-lg font-bold">1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/20 border-white/10 rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b border-white/5 bg-gradient-to-r from-red-500/10 to-red-600/5">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Live Match Card</div>
                    <Badge className="bg-red-500 animate-pulse">LIVE</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">Team A</div>
                    <div className="text-sm">Team B</div>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-lg font-bold">0</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-lg font-bold">0</span>
                    <Clock className="h-3 w-3 text-red-500 animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Primary Button</Button>
            <Button variant="outline" className="bg-black/20 border-white/10">Secondary Button</Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5">
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Badges</h3>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-red-500">LIVE</Badge>
            <Badge className="bg-blue-500">Upcoming</Badge>
            <Badge className="bg-emerald-500">Completed</Badge>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentsTab;
