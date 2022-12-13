<template>
  <div class="wrapper flex flex-col justify-center items-center">
    <h1 class="text-4xl font-bold text-white mb-10">Réserver un bureau</h1>
    <div class="flex flex-col justify-center items-center w-">
      <div class="flex justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <label for="start-date" class="text-white text-xl mb-2"
            >Date de début</label
          >
          <input
            type="date"
            id="start-date"
            name="start-date"
            v-model="startDate"
            class="date-picker"
          />
        </div>

        <div class="flex flex-col justify-center items-center">
          <label for="end-date" class="text-white text-xl mb-2"
            >Date de fin</label
          >
          <input
            type="date"
            id="end-date"
            name="end-date"
            v-model="endDate"
            class="date-picker ml-4"
          />
        </div>
      </div>
      <button
        class="w-full bg-gray-500 text-white text-lg mt-4 py-2 px-4 rounded-lg"
      >
        Réserver
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const startDate = ref(new Date());
const endDate = ref(new Date());
</script>
