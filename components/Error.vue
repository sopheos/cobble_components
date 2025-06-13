<template>
  <small
    role="alert"
    :aria-label="label"
    class="gap-xxs text-error flex items-center"
  >
    <Icon name="fa6-solid:circle-xmark" class="mr-xxs align-middle" />
    {{ label }}
  </small>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: null,
  },
});
</script>
