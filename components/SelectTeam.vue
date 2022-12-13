<template>
  <div class="w-full mt-12">
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        class="bg-gray-900 border-2 border-gray-700 rounded-lg w-full p-5 text-xl text-white"
        v-model="searchTeamInput"
        @keyup="handleKeyUp"
        placeholder="Votre équipe"
      />
      <div v-if="searchTeamInput !== ''">
        <div
          v-for="(team, index) in store.filteredTeams"
          :key="team._id"
          :class="
            index === activeIndex
              ? 'border-gray-500 bg-gray-500'
              : 'bg-gray-600 border-gray-700'
          "
          class="border-2 rounded-lg w-full p-5 text-xl text-white cursor-pointer"
          @click="handlePickTeam(team)"
        >
          {{ team.name }}
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Team } from '~~/lib/types';
import { useTeamStore } from '~~/stores/teamStore';

const store = useTeamStore();
const router = useRouter();

const searchTeamInput = ref('');
const activeIndex = ref(0);

const handleFilterTeams = () => {
  store.filterTeams(searchTeamInput.value);
};

const handleSubmit = () => {
  if (store.filteredTeams.length !== 0) {
    store.pickTeam(store.filteredTeams[activeIndex.value]);
    clearInputs();
    router.push('/reservation');
  }
};

const handlePickTeam = (team: Team) => {
  store.pickTeam(team);
  clearInputs();
  router.push('/reservation');
};

const handleKeyUp = (e: KeyboardEvent) => {
  if (
    e.code === 'ArrowDown' &&
    activeIndex.value < store.filteredTeams.length - 1
  ) {
    activeIndex.value++;
  }

  if (e.code === 'ArrowUp' && activeIndex.value > 0) {
    activeIndex.value--;
  }
};

const clearInputs = () => {
  searchTeamInput.value = '';
  activeIndex.value = 0;
};

watch(searchTeamInput, handleFilterTeams);

onMounted(() => {
  store.loadTeams();
});
</script>
