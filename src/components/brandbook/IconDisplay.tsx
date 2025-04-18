
import React from 'react';

interface IconDisplayProps {
  icon: React.ReactNode;
  name: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({ icon, name }) => (
  <div className="p-4 flex flex-col items-center justify-center gap-2 bg-black/20 rounded-lg border border-white/10">
    {icon}
    <span className="text-xs text-gray-400">{name}</span>
  </div>
);

export default IconDisplay;
