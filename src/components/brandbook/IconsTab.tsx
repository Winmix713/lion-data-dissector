
import React from 'react';
import {
  Calendar,
  Clock,
  Search,
  Filter,
  Eye,
  ChevronDown,
  Bell,
  Trophy,
  Brain,
} from 'lucide-react';
import IconDisplay from './IconDisplay';

const IconsTab: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Icons</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <IconDisplay icon={<Calendar className="h-5 w-5" />} name="Calendar" />
        <IconDisplay icon={<Clock className="h-5 w-5" />} name="Clock" />
        <IconDisplay icon={<Search className="h-5 w-5" />} name="Search" />
        <IconDisplay icon={<Filter className="h-5 w-5" />} name="Filter" />
        <IconDisplay icon={<Eye className="h-5 w-5" />} name="Eye" />
        <IconDisplay icon={<ChevronDown className="h-5 w-5" />} name="ChevronDown" />
        <IconDisplay icon={<Bell className="h-5 w-5" />} name="Bell" />
        <IconDisplay icon={<Trophy className="h-5 w-5" />} name="Trophy" />
        <IconDisplay icon={<Brain className="h-5 w-5" />} name="Brain" />
      </div>
    </>
  );
};

export default IconsTab;
