<template>
  <div
    class="flex flex-col justify-center items-center absolute top-4 right-4 text-lg text-white"
    v-if="teamStore.selectedTeam !== null"
  >
    Votre équipe : {{ teamStore.selectedTeam.name }}
    <span class="underline cursor-pointer" @click="handleUpdateTeam"
      >Modifier</span
    >
  </div>
</template>

<script setup lang="ts">
import { useTeamStore } from '~~/stores/teamStore';

const router = useRouter();

const teamStore = useTeamStore();

const handleUpdateTeam = () => {
  teamStore.clearTeam();
  router.push('/');
};
</script>
