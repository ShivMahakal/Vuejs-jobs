<script setup>
import { ref } from 'vue';
import Card from './Card.vue';


const browseArrays = ref([
    {
        id: 1,
        title: 'For Developers',
        subtitle: 'Browse our Vue jobs and start your career today',
        url: '/jobs',
        buttonTitle:"Browse Jobs",
        bg:"bg-gray-100"
    },
    {
        id: 2,
        title: 'For Employers',
        subtitle: 'List your job to find the perfect developer for the role',
        url: '/job/add',
        buttonTitle:"Add Job",
        bg:"bg-green-100"


    }
])


</script>

<template>
     <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card v-for="browseArray in browseArrays" :key="browseArray" :bg="browseArray.bg">
                <h2 class="text-2xl font-bold">{{browseArray?.title}}</h2>
            <p class="mt-2 mb-4">
                {{browseArray?.subtitle}}
            </p>
            <RouterLink
            v-bind:to="browseArray?.url"
             class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
            {{browseArray?.buttonTitle}}
            </RouterLink>
            </Card>
        </div>
        </div>
    </section>
</template>