<template>
  <div class="flex items-center">
    <input
      :id="uniqId"
      v-bind="attrs"
      ref="checkbox"
      v-model="model"
      type="checkbox"
      class="border-md rounded-[2px] border-(--_check-color) text-(--_check-color) ring-(--_check-color)/25 ring-offset-0 focus-visible:ring-4 enabled:cursor-pointer enabled:hover:ring-4 enabled:active:border-(--_check-color-active) enabled:active:text-(--_check-color-active) disabled:border-gray-100 disabled:text-gray-100"
    />
    <label
      v-if="label"
      class="ml-xs font-semibold text-gray-950 select-none disabled:text-gray-400"
      :for="uniqId"
      >{{ label }}</label
    >
  </div>
</template>

<script setup>
const model = defineModel({
  type: Boolean,
});

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const checkbox = useTemplateRef("checkbox");

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
});

const uniqId = computed(() => props.id ?? useId());

defineExpose({
  customElement: () => checkbox,
});
</script>

<style scoped>
div:has(> input[type="checkbox"]) {
  --_check-color: var(--check-color, var(--color-blue-500));
  --_check-color-active: var(--check-color-active, var(--color-blue-400));

  input:indeterminate {
    background-size: 100% 75%;
    background-position: right center;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='0.88em' height='1em' viewBox='0 0 448 512'%3E%3Cpath fill='%23ffffff' d='M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32'/%3E%3C/svg%3E");
  }
}
</style>
