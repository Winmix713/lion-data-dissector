
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import ColorsTab from './brandbook/ColorsTab';
import TypographyTab from './brandbook/TypographyTab';
import ComponentsTab from './brandbook/ComponentsTab';
import IconsTab from './brandbook/IconsTab';
import AnimationTab from './brandbook/AnimationTab';
import DownloadsTab from './brandbook/DownloadsTab';

const Brandbook = () => {
  const [selectedTab, setSelectedTab] = useState("colors");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900/95 via-gray-900/98 to-black text-white">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center">
            <span className="font-bold text-lg">B</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Matches Page Brandbook</h1>
            <p className="text-gray-400">Design system and UI components</p>
          </div>
        </div>

        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="bg-black/20 border border-white/10">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="icons">Icons</TabsTrigger>
            <TabsTrigger value="animation">Animation</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="mt-6">
            <ColorsTab />
          </TabsContent>

          <TabsContent value="typography" className="mt-6">
            <TypographyTab />
          </TabsContent>

          <TabsContent value="components" className="mt-6">
            <ComponentsTab />
          </TabsContent>

          <TabsContent value="icons" className="mt-6">
            <IconsTab />
          </TabsContent>

          <TabsContent value="animation" className="mt-6">
            <AnimationTab />
          </TabsContent>

          <TabsContent value="downloads" className="mt-6">
            <DownloadsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Brandbook;
