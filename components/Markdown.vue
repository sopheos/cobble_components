<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="p-sm flex flex-col gap-3 [&_a]:text-blue-500 [&_a]:underline [&_a]:hover:text-blue-800 [&_a]:active:text-blue-400"
    v-html="data"
  ></div>
</template>

<script setup>
defineProps({
  data: {
    type: String,
    required: true,
  },
});
</script>
