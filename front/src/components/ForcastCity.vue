<script setup>
import { ref, watchEffect } from 'vue';
import { store } from '@/store';

const citiesForecast = ref([]);

watchEffect(() => {
  console.log('cityInsee changed to ', store.cityInsee);
  const cityInsee = store.cityInsee;
  if (cityInsee) {
    fetchForcastData(cityInsee);
  }
});

const fetchForcastData = async (cityInsee) => {
  const response = await fetch(`http://localhost:3000/v1/cities/${cityInsee}/forecast/`);
  const data = await response.json();
  console.log(data);
  citiesForecast.value = data;
}

</script>

<template>
<div class='flex-1 flex-wrap'>
  <p>forcast city</p>
</div>
</template>

<style scoped>

</style>