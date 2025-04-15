
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Team } from '../../data/premier-league-teams';
import { League, HeadToHead } from '../../types/match';

// Support for both prop types: new and legacy
type MatchCardProps = {
  index: number;
  match: { home: Team | null; away: Team | null };
  availableTeams: Team[];
  onTeamSelect: (matchIndex: number, side: 'home' | 'away', teamId: string) => void;
} | {
  id: number;
  time: string;
  homeTeam: Team | null;
  awayTeam: Team | null;
  isSelectable?: boolean;
  league?: League;
  headToHead?: HeadToHead[];
};

const MatchCard: React.FC<MatchCardProps> = (props) => {
  // Check which prop type we're dealing with
  if ('index' in props) {
    // Original SelectableMatch type props
    const { index, match, availableTeams, onTeamSelect } = props;
    
    return (
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-5 animate-fade-in" style={{animationDelay: `${0.1 * index}s`}}>
        {/* Home Team Select */}
        <div className="mb-3">
          <Select 
            value={match.home?.id || ""} 
            onValueChange={(value) => onTeamSelect(index, 'home', value)}
          >
            <SelectTrigger className="w-full bg-black/60 border-white/10 text-white">
              <SelectValue placeholder="Válassz hazai csapatot" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-white border-white/10 max-h-[300px]">
              {availableTeams
                .filter(team => team.id !== match.away?.id)
                .map(team => (
                  <SelectItem key={team.id} value={team.id}>
                    <div className="flex items-center gap-2">
                      {team.logoUrl && (
                        <img 
                          src={team.logoUrl} 
                          alt={`${team.name} logo`} 
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <span>{team.name}</span>
                    </div>
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Away Team Select */}
        <div className="mb-3">
          <Select 
            value={match.away?.id || ""} 
            onValueChange={(value) => onTeamSelect(index, 'away', value)}
          >
            <SelectTrigger className="w-full bg-black/60 border-white/10 text-white">
              <SelectValue placeholder="Válassz vendég csapatot" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 text-white border-white/10 max-h-[300px]">
              {availableTeams
                .filter(team => team.id !== match.home?.id)
                .map(team => (
                  <SelectItem key={team.id} value={team.id}>
                    <div className="flex items-center gap-2">
                      {team.logoUrl && (
                        <img 
                          src={team.logoUrl} 
                          alt={`${team.name} logo`} 
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <span>{team.name}</span>
                    </div>
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Team logos preview */}
        {match.home && match.away && (
          <div className="flex items-center justify-center gap-4 mt-4 mb-2">
            <div className="flex flex-col items-center">
              <img 
                src={match.home.logoUrl} 
                alt={`${match.home.name} logo`} 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs text-gray-300 mt-1 text-center">{match.home.name}</span>
            </div>
            <span className="text-gray-400 font-bold">VS</span>
            <div className="flex flex-col items-center">
              <img 
                src={match.away.logoUrl} 
                alt={`${match.away.name} logo`} 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xs text-gray-300 mt-1 text-center">{match.away.name}</span>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    // New MatchProps type
    const { id, time, homeTeam, awayTeam, league } = props;
    
    return (
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-5">
        {/* Match Info Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            {league && (
              <img src={league.logo} alt={league.name} className="w-5 h-5 object-contain" />
            )}
            <span className="text-blue-400 text-sm">{league?.name || 'League'}</span>
          </div>
          <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
            {time}
          </span>
        </div>
        
        {/* Teams Display */}
        {homeTeam && awayTeam ? (
          <div className="flex items-center justify-between my-6">
            <div className="flex flex-col items-center flex-1 text-center">
              <img src={homeTeam.logo} alt={homeTeam.name} className="w-16 h-16 object-contain mb-2" />
              <span className="text-white font-semibold">{homeTeam.name}</span>
              <span className="text-gray-400 text-xs mt-1">#{homeTeam.position}</span>
            </div>
            
            <div className="flex flex-col items-center px-4">
              <span className="text-gray-400 font-bold text-lg mb-1">VS</span>
              <span className="text-sm text-gray-500">Ma</span>
            </div>
            
            <div className="flex flex-col items-center flex-1 text-center">
              <img src={awayTeam.logo} alt={awayTeam.name} className="w-16 h-16 object-contain mb-2" />
              <span className="text-white font-semibold">{awayTeam.name}</span>
              <span className="text-gray-400 text-xs mt-1">#{awayTeam.position}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center py-10">
            <span className="text-gray-400">Csapatok bejelentése hamarosan</span>
          </div>
        )}
        
        {/* Form Indicators */}
        {homeTeam && awayTeam && (
          <div className="flex justify-between mt-4 pt-4 border-t border-gray-800">
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-400 mr-1">Forma:</span>
              {homeTeam.form?.split('').map((result, idx) => (
                <span key={idx} className={`w-4 h-4 flex items-center justify-center text-[10px] rounded-full font-bold 
                  ${result === 'G' ? 'bg-green-500 text-white' : 
                    result === 'D' ? 'bg-yellow-500 text-black' : 
                    'bg-red-500 text-white'}`}>
                  {result === 'G' ? 'W' : result === 'D' ? 'D' : 'L'}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-1">
              {awayTeam.form?.split('').map((result, idx) => (
                <span key={idx} className={`w-4 h-4 flex items-center justify-center text-[10px] rounded-full font-bold 
                  ${result === 'G' ? 'bg-green-500 text-white' : 
                    result === 'D' ? 'bg-yellow-500 text-black' : 
                    'bg-red-500 text-white'}`}>
                  {result === 'G' ? 'W' : result === 'D' ? 'D' : 'L'}
                </span>
              ))}
              <span className="text-xs text-gray-400 ml-1">Forma:</span>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default MatchCard;
