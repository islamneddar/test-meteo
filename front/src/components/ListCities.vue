<script setup>

import { onMounted, ref, watch } from 'vue';
import { store } from '@/store';
import { cityService } from '@/service/city.service';

const cities = ref([]);
const isLoading = ref(false);
const isErrored = ref(false);
const maxTakePerPage = 10;
const page = ref(1);

onMounted(() => {
  fetchCitiesData()
});

watch(page, (newValue, oldValue) => {
  console.log(newValue, oldValue)
  fetchCitiesData()
})


// functions
const fetchCitiesData = async () => {
  isLoading.value = true;
  try{
    const data = await cityService().getAllCityByPagination({take: maxTakePerPage, page: page.value});
    cities.value = [...cities.value, ...data];
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
        <th scope="col" class="sm:pl-3">Code Insee</th>
        <th scope="col" >City</th>
        <th scope="col" >Population</th>
      </tr>
      </thead>
      <tbody class="bg-white">

      <tr v-for="city in cities" :key="city.insee" class='odd:bg-gray-100 cursor-pointer' @click='selectCity(city)'>
        <td class="sm:pl-3">{{ city.insee }}</td>
        <td >{{ city.name }}</td>
        <td >{{ city.population }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
th {
  padding: 0.875rem 0.75rem 0.875rem 1rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a202c;
}

td{
  white-space: nowrap;
  padding: 1rem 0.75rem;
  font-size: 0.875rem;
}

tr td:first-child {
  color: #1a202c;
}

tr td:not(:first-child) {
  color: #718096;
}
</style>