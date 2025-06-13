<template>
  <div class="gap-xxs max-w-form flex flex-col" :data-error="error">
    <label
      v-if="label"
      class="font-semibold text-(--_otp-label-color)"
      :for="uniqId"
      >{{ label }}</label
    >
    <div class="flex justify-between">
      <input
        v-for="(_, i) in size"
        :id="i === 0 ? uniqId : null"
        ref="items"
        :key="`value-${i}`"
        :disabled
        required
        inputmode="numeric"
        autocomplete="off"
        :value="!model[i] || model[i] === ' ' ? '' : model[i]"
        type="text"
        maxlength="1"
        class="rounded-xxs border-sm p-xs w-10 border-(--_otp-border-color) bg-(--_otp-bg-color) text-center text-(--_otp-text-color) outline-hidden select-all placeholder:text-(--_otp-placeholder-color) focus-visible:border-(--_otp-border-focus) focus-visible:ring-4 focus-visible:ring-(--_otp-border-focus)/25"
        @input="updateModel(i, $event)"
        @focus="handleFocus"
        @keydown="handleReturn(i, $event)"
        @paste="handlePaste($event)"
      />
    </div>
    <small v-if="error || hint" class="text-(color:--_otp-hint-color)">
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

const itemRefs = useTemplateRef("items");

const emits = defineEmits(["input", "focus"]);

const props = defineProps({
  size: {
    type: Number,
    default: 6,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
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

function handleFocus(input) {
  input.target.select();
  emits("focus");
}

function handleReturn(i, input) {
  if (input.key === "Backspace" && !input.target.value) {
    input.preventDefault();
    itemRefs.value[i - 1]?.focus();
  }
}

function updateModel(i, input) {
  const currentValue = [...model.value];
  currentValue[i] = input.target.value.length ? input.target.value : " ";
  model.value = currentValue.join("");

  if (input.target.value) {
    itemRefs.value[i + 1]?.focus();
  }
  emits("input");
}

function handlePaste(e) {
  e.preventDefault();
  const text = e.clipboardData.getData("text");
  model.value = text.slice(0, props.size);
  emits("input");
}

defineExpose({
  customElement: () => itemRefs.value[0] ?? null,
});
</script>

<style scoped>
div:has(> div > input) {
  --_otp-placeholder-color: var(--otp-placeholder-color, var(--color-gray-400));
  --_otp-hint-color: var(--otp-hint-color, var(--color-gray-800));
  --_otp-border-color: var(--otp-border-color, var(--color-gray-800));
  --_otp-border-focus: var(--otp-border-focus, var(--color-blue-500));

  --_otp-label-color: var(--otp-label-color, var(--color-gray-950));
  --_otp-bg-color: var(--otp-bg-color, var(--color-white));
  --_otp-text-color: var(--otp-text-color, var(--color-gray-950));

  &[data-error] {
    --otp-placeholder-color: var(--text-color-error);
    --otp-hint-color: var(--text-color-error);
    --otp-border-color: var(--text-color-error);
    --otp-border-focus: var(--text-color-error);
    --otp-label-color: var(--text-color-error);
    --otp-text-color: var(--text-color-error);
  }
}

div:has(> div > input:disabled) {
  --otp-border-color: var(--color-gray-400);
  --otp-bg-color: var(--color-gray-100);
  --otp-text-color: var(--color-gray-400);
}
</style>
