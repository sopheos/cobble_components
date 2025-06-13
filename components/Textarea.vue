<template>
  <div class="gap-xxs flex max-w-[768px] flex-col" :data-error="error">
    <label
      v-if="label"
      class="font-semibold text-(--_textarea-label-color)"
      :for="uniqId"
      >{{ label }}</label
    >
    <textarea
      v-bind="attrs"
      :id="uniqId"
      ref="textarea"
      v-model="model"
      class="rounded-xxs border-sm p-xs border-(--_textarea-border-color) bg-(--_textarea-bg-color) text-(--_textarea-text-color) outline-hidden placeholder:text-(--_textarea-placeholder-color) focus-visible:border-(--_textarea-border-focus) focus-visible:ring-4 focus-visible:ring-(--_textarea-border-focus)/25"
    ></textarea>
    <small v-if="error || hint" class="text-(color:--_textarea-hint-color)">
      <Icon
        v-if="error"
        role="alert"
        :aria-label="error"
        name="fa6-solid:circle-xmark"
        class="mr-xxs align-middle"
      />
      {{ error ?? hint }}
    </small>
  </div>
</template>

<script setup>
const model = defineModel({
  type: String,
});

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

const textarea = useTemplateRef("textarea");

defineExpose({
  customElement: () => textarea,
});
</script>

<style scoped>
div:has(> textarea) {
  --_textarea-placeholder-color: var(
    --textarea-placeholder-color,
    var(--color-gray-400)
  );
  --_textarea-hint-color: var(--textarea-hint-color, var(--color-gray-800));
  --_textarea-border-color: var(--textarea-border-color, var(--color-gray-800));
  --_textarea-border-focus: var(--textarea-border-focus, var(--color-blue-500));
  --_textarea-label-color: var(--textarea-label-color, var(--color-gray-950));
  --_textarea-bg-color: var(--textarea-bg-color, var(--color-white));
  --_textarea-text-color: var(--textarea-text-color, var(--color-gray-950));

  &[data-error] {
    --textarea-placeholder-color: var(--text-color-error);
    --textarea-hint-color: var(--text-color-error);
    --textarea-border-color: var(--text-color-error);
    --textarea-border-focus: var(--text-color-error);
    --textarea-label-color: var(--text-color-error);
    --textarea-text-color: var(--text-color-error);
  }
}

div:has(> textarea:disabled) {
  --textarea-border-color: var(--color-gray-300);
  --textarea-bg-color: var(--color-gray-50);
  --textarea-text-color: var(--color-gray-400);
  --textarea-label-color: var(--color-gray-500);
  --textarea-hint-color: var(--color-gray-500);
}
</style>
