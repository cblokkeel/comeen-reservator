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
      const teams: Team[] = await $fetch('/api/teams');
      this.teams = [...teams];
    },
    async filterTeams(search: string) {
      const filteredTeams = this.teams.filter((team) => {
        return team.name.toLowerCase().includes(search.toLowerCase());
      });
      console.log(filteredTeams);
      this.filteredTeams = [...filteredTeams];
    },
    pickTeam(team: Team) {
      console.log(team);
      this.selectedTeam = team;
      this.filteredTeams = [];
    },
    clearTeam() {
      this.selectedTeam = null;
    },
  },
});
