<script setup>
// import jobData from "@/jobs.json"
import { onMounted, reactive, ref } from "vue";
import JobListing from "./JobListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue"

// const jobs = ref(jobData)
// const jobs = ref([])
const state = reactive({
    jobs: [],
    isLoading: true,
})

defineProps({
    limit:Number,
    showButton:{
        type:Boolean,
        default:false,
    }
})

//  function to fetch the detail when the component is mounted
const getJobsListing = async () => {
    try {
        const response = await axios.get("/api/jobs")
        state.jobs = response?.data
    } catch (error) {
        console.error(error, "Error fetching jobs")
    }finally{
        state.isLoading = false
    }
}


onMounted(getJobsListing)

</script>
<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="lg:container m-auto">
            <h2 class="text-xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>

                <!-- show loading spinner while loading is true -->
                 <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                    <PulseLoader/>
                 </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length) " :key="job.id" :job="job" />
            </div>
        </div>

    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
    </section>

</template>