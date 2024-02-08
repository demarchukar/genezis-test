<script setup>
  const props = defineProps(['text', 'loading']);
</script>

<template>
  <button class="text-white bg-blue-400 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-1 focus:outline-none">
    <div v-if="loading" class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.250em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    <span v-else>{{ props.text }}</span>
  </button>
</template>