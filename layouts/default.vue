<template>
  <div>
    <TheHeader :team="teamStore.selectedTeam?.name" />
    <FuckComeen />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useTeamStore } from '~~/stores/teamStore';

const teamStore = useTeamStore();
</script>
