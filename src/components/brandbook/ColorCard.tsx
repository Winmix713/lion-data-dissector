
import React from 'react';

interface ColorCardProps {
  name: string;
  color: string;
  value: string;
}

const ColorCard: React.FC<ColorCardProps> = ({ name, color, value }) => (
  <div className="flex flex-col overflow-hidden rounded-lg border border-white/10">
    <div className={`h-16 ${color}`}></div>
    <div className="p-3 bg-black/40">
      <div className="font-medium">{name}</div>
      <div className="text-xs text-gray-400">{value}</div>
    </div>
  </div>
);

export default ColorCard;
