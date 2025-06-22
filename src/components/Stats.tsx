import React from 'react';
import { DollarSign, TrendingUp, Users, Clock } from 'lucide-react';

const statsData = [
  {
    label: 'Total Revenue',
    value: '\$200',
    icon: DollarSign,
    change: '+200',
  },
  {
    label: 'Active Clients',
    value: '2',
    icon: Users,
    change: '+1',
  },
  // {
  //   label: 'Growth Rate',
  //   value: '156%',
  //   icon: TrendingUp,
  //   change: '+24.5%',
  // },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="glass-card group"
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="w-6 h-6 text-blue-400" />
              <span className="text-blue-400 text-sm font-mono">{stat.change}</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
