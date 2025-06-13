<template>
  <button
    ref="switch"
    type="button"
    role="switch"
    class="border-md flex h-8 w-14 items-center rounded-full border-(--_switch-border) bg-(--_switch-bg) transition-[border-color,background-color,padding-left] enabled:cursor-pointer"
    :aria-pressed="model"
    :class="{
      'pl-6': model,
      'pl-xxs': !model && (!!slots.on || !!slots.off),
      'pl-xs': !model && !slots.on && !slots.off,
    }"
    @click="onClick"
  >
    <div
      class="flex h-full items-center text-(--_switch-fill) transition-all"
      :class="
        !!slots.on || !!slots.off ? 'text-2xl' : 'text-(length:--_switch-size)'
      "
    >
      <slot v-if="model" name="on">
        <Icon name="fa6-solid:circle" />
      </slot>
      <slot v-else name="off">
        <Icon name="fa6-solid:circle" />
      </slot>
    </div>
  </button>
</template>

<script setup>
const model = defineModel({
  type: Boolean,
});

const slots = useSlots();
const switchElement = useTemplateRef("switch");

function onClick() {
  model.value = !model.value;
}

defineExpose({
  customElement: () => switchElement,
});
</script>

<style scoped>
button[role="switch"] {
  --_color-500: var(--color-500, var(--color-blue-500));

  --_switch-bg: var(--switch-bg, var(--color-gray-200));
  --_switch-border: var(--switch-border, var(--color-gray-500));
  --_switch-size: var(--switch-size, var(--text));
  --_switch-fill: var(--switch-fill, var(--color-gray-500));

  &[aria-pressed="true"] {
    --switch-bg: var(--_color-500);
    --switch-border: var(--_color-500);
    --switch-size: 1.5rem;
    --switch-fill: var(--color-white);
  }

  &[data-color="orange"] {
    --color-500: var(--color-orange-500);
  }

  &:disabled {
    --switch-bg: var(--color-white);
    --switch-border: var(--color-gray-100);
    --switch-fill: var(--color-gray-100);

    &[aria-pressed="true"] {
      --switch-bg: var(--color-gray-100);
      --switch-border: var(--color-gray-100);
      --switch-fill: var(--color-white);
    }
  }
}
</style>
