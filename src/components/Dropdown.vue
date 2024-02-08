<script setup>
import { ref } from 'vue';

const selectedOption = ref('');
const emit = defineEmits(['change']);
const props = defineProps(['text', 'options']);

const change = () => {
  emit('change', selectedOption.value);
};
</script>

<template>
  <div class="flex gap-2 whitespace-nowrap items-center">
    <label for="selectType" class="font-medium text-gray-900">{{ props.text }}</label>
    <select id="selectType" v-model="selectedOption" @change="change" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full px-3 py-1">
      <option v-for="option in props.options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>
