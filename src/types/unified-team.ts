
import { Team as PremierLeagueTeam } from '../data/premier-league-teams';
import { Team as MatchTeam } from './match';

export type UnifiedTeam = {
  id: number; // Changed from string | number to just number to match Team type
  name: string;
  logo: string;        // Required property from match.ts
  logoUrl?: string;     // from premier-league-teams.ts
  position?: number;
  form?: string;
  league?: string;
  stats?: {
    played: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
  };
};

export const normalizeTeam = (team: PremierLeagueTeam | MatchTeam): UnifiedTeam => {
  if ('logoUrl' in team) {
    // It's a PremierLeagueTeam with string id, convert to number
    return {
      ...team,
      id: typeof team.id === 'string' ? parseInt(team.id, 10) || 0 : team.id, // Convert string id to number
      logo: team.logoUrl // Ensure logo is set from logoUrl
    };
  } else {
    // It's a MatchTeam
    return {
      ...team,
      logoUrl: team.logo
    };
  }
};
