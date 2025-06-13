<template>
  <div>
    <input
      :id="uniqId"
      ref="radio"
      v-bind="attrs"
      v-model="model"
      type="radio"
      class="border-md border-(--_radio-color) text-(--_radio-color) ring-blue-500/25 ring-offset-0 checked:border-(--_radio-color) checked:bg-white hover:border-(--_radio-color) hover:bg-white checked:hover:border-(--_radio-color) checked:hover:bg-white focus-visible:ring-4 checked:focus-visible:border-(--_radio-color) checked:focus-visible:bg-white enabled:cursor-pointer enabled:hover:ring-4 enabled:active:border-(--_radio-color-active) enabled:active:text-(--_radio-color-active) enabled:active:checked:border-(--_radio-color-active) enabled:active:checked:text-(--_radio-color-active)"
    />
    <label
      v-if="label"
      class="ml-xs align-middle text-(--_radio-label-color) select-none"
      :for="uniqId"
      >{{ label }}</label
    >
  </div>
</template>

<script setup>
const model = defineModel({
  type: String,
});

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const radio = useTemplateRef("radio");

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
  customElement: () => radio,
});
</script>

<style scoped>
div:has(> input[type="radio"]) {
  --_radio-color: var(--radio-color, var(--color-blue-500));
  --_radio-color-active: var(--radio-color-active, var(--color-blue-400));

  --_radio-label-color: var(--radio-label-color, var(--color-gray-950));

  input:checked {
    /* blue-500 */
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%231F6DD3' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='4'/%3e%3c/svg%3e");

    &:active {
      /* blue-300 */
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23468AE3' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='4'/%3e%3c/svg%3e");
    }

    &:disabled {
      /* gray-300 */
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23ABB1B9' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='4'/%3e%3c/svg%3e");
    }
  }
}

div:has(> input[type="radio"]:disabled) {
  --radio-color: var(--color-gray-100);
  --radio-label-color: var(--color-gray-400);
}
</style>
