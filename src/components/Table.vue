<script setup>
const props = defineProps(['posts']);

const getOption = (post) => {
  const entity = Object.keys(post._embedded)[0];
  switch (entity) {
    case 'leads':
      return 'Сделка';
    case 'companies':
      return 'Компания';
    case 'contacts':
      return 'Контакт';
    default:
      return entity;
  }
};

const getId = (post) => {
  const entity = Object.keys(post._embedded)[0];
  return post._embedded[entity][0].id;
};
</script>

<template>
  <table class="table max-w-2xl">
    <thead>
      <tr>
        <th>№</th>
        <th>Сущность</th>
        <th>ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(post, index) in posts" :key="post.id">
        <td>{{ index + 1 }}</td>
        <td>{{ getOption(post) }}</td>
        <td>{{ getId(post) }}</td>
      </tr>
    </tbody>
  </table>
</template>