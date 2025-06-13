<template>
  <label
    class="gap-xs px-sm py-xxs flex items-center justify-center rounded-full bg-(--_chip-bg-color) text-(--_chip-text-color) ring-(--_color-500)/25 select-none hover:bg-(--_chip-bg-hover) has-focus-visible:ring-4 has-enabled:cursor-pointer has-enabled:hover:ring-4 has-enabled:has-active:bg-(--_chip-bg-active) has-enabled:has-active:text-(--_chip-text-active)"
    :class="attrs.class"
  >
    <input
      v-bind="{ ...attrs, class: null }"
      ref="chip"
      v-model="model"
      class="sr-only"
    />
    <span>
      <slot></slot>
    </span>

    <Icon
      v-if="model === attrs.value"
      name="fa6-solid:circle-check"
      class="text-white"
    />
  </label>
</template>

<script setup>
// eslint-disable-next-line vue/require-prop-types
const model = defineModel();

const chip = useTemplateRef("chip");

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

defineExpose({
  customElement: () => chip,
});
</script>

<style scoped>
label:has(> input[type="checkbox"]),
label:has(> input[type="radio"]) {
  --_color-50: var(--color-50, var(--color-blue-50));
  --_color-100: var(--color-100, var(--color-blue-100));
  --_color-200: var(--color-200, var(--color-blue-200));
  --_color-400: var(--color-400, var(--color-blue-400));
  --_color-500: var(--color-500, var(--color-blue-500));

  --_chip-bg-color: var(--chip-bg-color, var(--_color-100));
  --_chip-bg-active: var(--chip-bg-active, var(--_color-200));
  --_chip-bg-hover: var(--chip-bg-hover, var(--_color-50));

  --_chip-text-color: var(--chip-text-color, var(--_color-500));
  --_chip-text-active: var(--chip-text-active, var(--_color-400));
}

label:has(> input[type="checkbox"]:checked),
label:has(> input[type="radio"]:checked) {
  --chip-bg-color: var(--_color-500);
  --chip-bg-hover: var(--_color-500);
  --chip-bg-active: var(--_color-400);

  --chip-text-color: var(--color-white);
  --chip-text-active: var(--color-white);
}

label:has(> input[type="checkbox"]:disabled),
label:has(> input[type="radio"]:disabled) {
  --chip-bg-color: var(--color-gray-100);
  --chip-text-color: var(--color-white);
}
</style>
