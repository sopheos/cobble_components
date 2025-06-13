<template>
  <div class="gap-xxs max-w-form flex flex-col" :data-error="error">
    <label
      v-if="label"
      class="font-semibold text-(--_pass-label-color)"
      :for="uniqId"
      >{{ label }}</label
    >
    <div
      class="rounded-xxs border-sm p-xs flex border-(--_pass-border-color) bg-(--_pass-bg-color) text-gray-950 has-[input:focus]:border-(--_pass-border-focus) has-[input:focus]:ring-4 has-[input:focus]:ring-(--_pass-border-focus)/25"
    >
      <input
        :id="uniqId"
        v-bind="attrs"
        ref="password"
        v-model="model"
        autocomplete="new-password"
        :type="type ? 'password' : 'text'"
        class="pr-xxs grow border-none p-0 placeholder:text-(--_pass-placeholder-color) focus-visible:ring-0 focus-visible:outline-hidden"
      />
      <button type="button" class="flex items-center" @click="type = !type">
        <Icon
          class="h-full text-(--_pass-text-color)"
          :name="type ? 'fa6-solid:eye-slash' : 'fa6-solid:eye'"
        />
      </button>
    </div>
    <small v-if="error || hint" class="text-(color:--_pass-hint-color)">
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

const password = useTemplateRef("password");

const attrs = useAttrs();

const type = ref(true);

defineExpose({
  customElement: () => password,
});
</script>

<style scoped>
div:has(> div > input) {
  --_pass-placeholder-color: var(
    --pass-placeholder-color,
    var(--color-gray-400)
  );
  --_pass-hint-color: var(--pass-hint-color, var(--color-gray-800));
  --_pass-border-color: var(--pass-border-color, var(--color-gray-800));
  --_pass-border-focus: var(--pass-border-focus, var(--color-blue-500));

  --_pass-label-color: var(--pass-label-color, var(--color-gray-950));
  --_pass-bg-color: var(--pass-bg-color, var(--color-white));
  --_pass-text-color: var(--pass-text-color, var(--color-gray-950));

  &[data-error] {
    --pass-placeholder-color: var(--text-color-error);
    --pass-hint-color: var(--text-color-error);
    --pass-border-color: var(--text-color-error);
    --pass-border-focus: var(--text-color-error);
    --pass-label-color: var(--text-color-error);
    --pass-text-color: var(--text-color-error);
  }
}

div:has(> div > input:disabled) {
  --pass-border-color: var(--color-gray-400);
  --pass-bg-color: var(--color-gray-100);
  --pass-text-color: var(--color-gray-400);
}
</style>
