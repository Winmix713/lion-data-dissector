
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import HeroBackground from '../Hero/HeroBackground';

const DownloadsTab: React.FC = () => {
  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Downloads</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Logo Assets</h3>
            <div className="mb-6">
              <img 
                src="/logo/winmix-logo-large.svg" 
                alt="Winmix Logo" 
                className="w-full max-w-[300px] mx-auto mb-4 bg-gray-900 p-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Button 
                variant="outline" 
                className="bg-black/20 border-white/10 w-full"
                onClick={() => downloadFile('/logo/winmix-logo-large.svg', 'winmix-logo-large.svg')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Logo SVG
              </Button>
              <Button 
                variant="outline" 
                className="bg-black/20 border-white/10 w-full"
                onClick={() => downloadFile('/logo/winmix-logo-large.png', 'winmix-logo-large.png')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Logo PNG
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/20 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Hero Background</h3>
            <div className="mb-6 relative h-[200px] rounded-lg overflow-hidden bg-gray-900">
              <div className="absolute inset-0">
                <HeroBackground />
              </div>
            </div>
            <Button 
              variant="outline" 
              className="bg-black/20 border-white/10 w-full"
              onClick={() => downloadFile('/hero-background.png', 'hero-background.png')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Hero Background
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DownloadsTab;
