<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import Dropdown from '@/components/Dropdown.vue';
import Button from '@/components/Button.vue';
import Table from '@/components/Table.vue';
import AuthService from '@/services/auth.service.js';
import TokenService from '@/services/token.service.js';
import makeName from '@/utils/random.js';
const store = useStore();

const loading = ref(false);
const option = ref('');
const posts = ref(store.state.crm.posts);

const dropdownOptions = [
  { value: '', label: 'Не выбрано' },
  { value: 'leads', label: 'Сделка' },
  { value: 'contacts', label: 'Контакт' },
  { value: 'companies', label: 'Компания' },
];

const dropdownChange = (value) => {
  option.value = value;
};

const postCrm = async () => {
  loading.value = true;
  if (!TokenService.getDomain()) {
    await AuthService.login();
  }
  await store.dispatch('crm/postCrm', { option: option.value, body: [{ name: makeName(16) }] });
  loading.value = false;
}

watch(() => store.state.crm.posts, (newVal) => {
  posts.value = newVal;
});
</script>

<template>
  <div class="flex items-center justify-center gap-5 p-5">
    <Dropdown @change="dropdownChange" :text="'Выберите сущность:'" :options="dropdownOptions" />
    <Button @click="postCrm" :text="'Создать'" :loading="loading" :disabled="!option" :class="{ '!bg-gray-200 !text-black cursor-not-allowed' : !option }" />
  </div>
  <div class="flex items-center justify-center">
    <Table :posts="posts" />
  </div>
</template>