import { User } from '~~/lib/types';
import { Team } from './../lib/types/index.d';
import { defineStore } from 'pinia';

interface TeamStoreState {
  selectedTeam: Team | null;
  teams: Team[];
  filteredTeams: Team[];
}

export const useTeamStore = defineStore('team', {
  state: (): TeamStoreState => ({
    selectedTeam: null,
    teams: [],
    filteredTeams: [],
  }),
  actions: {
    async loadTeams() {
      // @ts-ignore
      const teams: Team[] = await $fetch('/api/teams');
      this.teams = [...teams];
    },
    async filterTeams(search: string) {
      const filteredTeams = this.teams.filter((team) => {
        return team.name.toLowerCase().includes(search.toLowerCase());
      });
      this.filteredTeams = [...filteredTeams];
    },
    pickTeam(team: Team) {
      this.selectedTeam = team;
      this.filteredTeams = [];
    },
    clearTeam() {
      this.selectedTeam = null;
    },
    async getMembers(): Promise<User[]> {
      if (this.selectedTeam) {
        const members = await $fetch(
          `/api/teams/members/${this.selectedTeam.name}`,
        );
        return members;
      }

      return [];
    },
  },
});
