
import { Team as PremierLeagueTeam } from '../data/premier-league-teams';
import { Team as MatchTeam } from './match';

export type UnifiedTeam = {
  id: number;
  name: string;
  logo: string;
  logoUrl?: string;
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
      id: parseInt(team.id, 10) || 0,
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
