
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TypographyTab: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Typography</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">Font Family</h3>
          <Card className="bg-black/20 border-white/10">
            <CardContent className="p-6">
              <p className="text-sm text-gray-400 mb-2">System font stack with sans-serif fallbacks</p>
              <p className="font-normal">Regular (400) - The quick brown fox jumps over the lazy dog.</p>
              <p className="font-medium">Medium (500) - The quick brown fox jumps over the lazy dog.</p>
              <p className="font-bold">Bold (700) - The quick brown fox jumps over the lazy dog.</p>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Text Sizes</h3>
          <Card className="bg-black/20 border-white/10">
            <CardContent className="p-6 space-y-4">
              <div>
                <Badge className="mb-1 bg-blue-500/20 text-blue-400 border border-blue-500/30">text-xl</Badge>
                <p className="text-xl">Headers (Matches header)</p>
              </div>
              <div>
                <Badge className="mb-1 bg-blue-500/20 text-blue-400 border border-blue-500/30">text-base</Badge>
                <p className="text-base">Subheaders</p>
              </div>
              <div>
                <Badge className="mb-1 bg-blue-500/20 text-blue-400 border border-blue-500/30">text-sm</Badge>
                <p className="text-sm">Body Text</p>
              </div>
              <div>
                <Badge className="mb-1 bg-blue-500/20 text-blue-400 border border-blue-500/30">text-xs</Badge>
                <p className="text-xs">Small Text/Labels</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TypographyTab;
