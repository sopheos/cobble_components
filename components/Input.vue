<template>
  <div class="gap-xxs max-w-form flex flex-col" :data-error="error || isError">
    <label
      v-if="label"
      class="font-semibold text-(--_input-label-color)"
      :for="uniqId"
      >{{ label }}</label
    >
    <input
      v-bind="attrs"
      :id="uniqId"
      ref="input"
      v-model="model"
      class="rounded-xxs border-sm p-xs border-(--_input-border-color) bg-(--_input-bg-color) text-(--_input-text-color) outline-hidden placeholder:text-(--_input-placeholder-color) focus-visible:border-(--_input-border-focus) focus-visible:ring-4 focus-visible:ring-(--_input-border-focus)/25"
    />
    <small v-if="error || hint" class="text-(color:--_input-hint-color)">
      <Icon
        v-if="error"
        role="alert"
        :aria-label="label"
        name="fa6-solid:circle-xmark"
        class="mr-xxs align-middle"
      />
      {{ error ?? hint }}
    </small>
  </div>
</template>

<script setup>
// eslint-disable-next-line vue/require-prop-types
const model = defineModel();

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  isError: {
    type: Boolean,
    default: null,
  },
  error: {
    type: String,
    default: null,
  },
  hint: {
    type: String,
    default: null,
  },
});

const uniqId = computed(() => props.id ?? useId());

const attrs = useAttrs();

const input = useTemplateRef("input");

defineExpose({
  customElement: () => input,
});
</script>

<style scoped>
div:has(> input) {
  --_input-placeholder-color: var(
    --input-placeholder-color,
    var(--color-gray-400)
  );
  --_input-hint-color: var(--input-hint-color, var(--color-gray-800));
  --_input-border-color: var(--input-border-color, var(--color-gray-800));
  --_input-border-focus: var(--input-border-focus, var(--color-blue-500));

  --_input-label-color: var(--input-label-color, var(--color-gray-950));
  --_input-bg-color: var(--input-bg-color, var(--color-white));
  --_input-text-color: var(--input-text-color, var(--color-gray-950));

  &[data-error] {
    --input-placeholder-color: var(--text-color-error);
    --input-hint-color: var(--text-color-error);
    --input-border-color: var(--text-color-error);
    --input-border-focus: var(--text-color-error);
    --input-label-color: var(--text-color-error);
    --input-text-color: var(--text-color-error);
  }
}

div:has(> input:disabled) {
  --input-border-color: var(--color-gray-300);
  --input-bg-color: var(--color-gray-50);
  --input-text-color: var(--color-gray-400);
  --input-label-color: var(--color-gray-500);
  --input-hint-color: var(--color-gray-500);
}
</style>
