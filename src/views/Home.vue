<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
    <Hero title="Test Title" description="Looking to become a Vue developer?"/>
  <HomeCards/>
  <JobListings :limit="3" :show-button="true"/>
</template>