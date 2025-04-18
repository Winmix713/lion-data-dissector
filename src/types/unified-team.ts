
import { Team as PremierLeagueTeam } from '../data/premier-league-teams';
import { Team as MatchTeam } from './match';

export type UnifiedTeam = {
  id: string | number;
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
      id: team.id,
      name: team.name,
      logo: team.logoUrl,
      logoUrl: team.logoUrl,
      league: team.league
    };
  } else {
    // It's a MatchTeam
    return {
      id: team.id,
      name: team.name,
      logo: team.logo,
      logoUrl: team.logo,
      form: team.form,
      position: team.position,
      stats: team.stats
    };
  }
};
