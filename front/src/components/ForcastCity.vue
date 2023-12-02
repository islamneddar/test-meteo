<script setup>
import { ref, watchEffect } from 'vue';
import { store } from '@/store';
import { cityService } from '@/service/city.service';

const citiesForecast = ref([]);
const isLoading = ref(false);


const fetchForecastData = async (cityInsee) => {
  isLoading.value = true;
  try{
    const data = await cityService().getForecastForId(cityInsee);
    console.log(data);
    citiesForecast.value = data;
  }catch (e) {
    console.log(e);
  }finally {
    isLoading.value = false;
  }

}

watchEffect(() => {
  const cityInsee = store.cityInsee;
  if (cityInsee) {
    fetchForecastData(cityInsee);
  }
});

</script>

<template>
<div class='flex-1'>
  <span v-if="isLoading">Loading...</span>
  <div v-else-if="!citiesForecast.length">
    <span class='text-xl'>Selectionnez une ville pour avoit toutes les prevision en cliqaunt sur une ligne de la table city</span>
  </div>
  <div v-else class='grid grid-cols-2 gap-4'>
    <div v-for="forecast in citiesForecast" :key="forecast.day" class='border-1 border-black border p-3'>
        <div class='pb-2'>
          <p>{{forecast.icon}}</p>
        </div>
        <div class='mb-5'>
          <p class='mb-2'>Probabilité de pluie</p>
          <p class='font-black text-xl'>{{forecast.probRain}}%</p>
        </div>
        <div class='w-full flex '>
          <div class='w-1/2'>
            <p class='titleMinMax'>Min</p>
            <p class='temp'>{{forecast.tmin}}°C</p>
          </div>
          <div class='w-1/2'>
            <p class='titleMinMax'>Max</p>
            <p class='temp'>{{forecast.tmax}}°C</p>
          </div>
        </div>
    </div>
  </div>
  <div v-show='citiesForecast'></div>
</div>
</template>

<style scoped>
.titleMinMax{
  font-size: 0.8rem;
  font-weight: 600;
}

.temp{
  font-size: 1.2rem;
  font-weight: 600;
}
</style>