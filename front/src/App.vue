<template>
  <div>{{ test }}</div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

import testGet from "./api/test";

const test = ref<string>('');

onMounted(async () => {
  test.value = await testGet()
})

</script>

<style scoped>
</style>
