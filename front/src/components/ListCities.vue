<script setup>

import { onMounted, ref } from 'vue';
import { store } from '@/store';
import { cityService } from '@/service/city.service';

const cities = ref([]);
const isLoading = ref(false);
const isErrored = ref(false);

onMounted(() => {
  fetchCitiesData()
});

const fetchCitiesData = async () => {
  isLoading.value = true;
  try{
    const data = await cityService().getAllCity()
    console.log(data);
    cities.value = data;
  }catch (e) {
    console.log(e);
    isErrored.value = true;
  }finally {
    isLoading.value = false;
  }

}

const selectCity = (city) => {
  store.cityInsee = city.insee;
}

</script>

<template>
 <div v-if='isLoading'>
   <span>Loading...</span>
 </div>
  <div v-else-if='isErrored'>
    <span>Erreur lors du chargement des données</span>
  </div>
  <div v-else class='flex-1 h-screen overflow-scroll mx-4'>
    <table class="w-full divide-y divide-gray-300">
      <thead>
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Code Insee</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">City</th>
        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Population</th>
      </tr>
      </thead>
      <tbody class="bg-white">

      <tr v-for="city in cities" :key="city.insee" class='odd:bg-gray-100 cursor-pointer' @click='selectCity(city)'>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{{ city.insee }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ city.name }}</td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ city.population }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>