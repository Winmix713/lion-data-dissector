
import { Team as PremierLeagueTeam } from '../data/premier-league-teams';
import { Team as MatchTeam } from './match';

export type UnifiedTeam = {
  id: string | number;
  name: string;
  logo?: string;        // from match.ts
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
    // It's a PremierLeagueTeam
    return {
      ...team,
      logo: team.logoUrl
    };
  } else {
    // It's a MatchTeam
    return {
      ...team,
      logoUrl: team.logo
    };
  }
};
