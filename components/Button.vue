<template>
  <button
    type="button"
    class="inline-block h-(--_button-size) min-w-(--_button-size) items-center rounded-(--_button-radius) border-(length:--_button-border-size) border-(color:--_button-border) bg-(--_button-bg) text-center text-(length:--_button-font-size) font-(--_button-font-weight) text-(color:--_button-text) enabled:cursor-pointer enabled:hover:border-(--_button-border-hover) enabled:hover:bg-(--_button-bg-hover) enabled:hover:text-(--_button-text-hover) enabled:active:bg-(--_button-bg-active) enabled:active:text-(--_button-text-active) data-[role=link]:underline"
  >
    <span
      class="flex h-full items-center justify-center gap-(--_button-gap)"
      :class="{
        'pr-(--_button-min-p)': !!slots.append && !slots.icon,
        'pl-(--_button-min-p)': !!slots.prepend && !slots.icon,
        'pr-(--_button-p)': !slots.append && !slots.icon,
        'pl-(--_button-p)': !slots.prepend && !slots.icon,
      }"
    >
      <slot v-if="slots.icon" name="icon"></slot>
      <template v-else>
        <slot v-if="!!slots.prepend" name="prepend"></slot>
        <slot></slot>
        <slot v-if="!!slots.append" name="append"></slot>
      </template>
    </span>
  </button>
</template>

<script setup>
const slots = useSlots();
</script>

<style scoped>
button {
  --_color-50: var(--color-50, var(--color-blue-50));
  --_color-100: var(--color-100, var(--color-blue-100));
  --_color-400: var(--color-400, var(--color-blue-400));
  --_color-500: var(--color-500, var(--color-blue-500));
  --_color-800: var(--color-800, var(--color-blue-800));

  --_button-radius: var(--button-radius, var(--radius-full));

  --_button-font-size: var(--button-font-size, var(--text));

  --_button-font-weight: var(--button-weight, var(--font-weight-medium));

  --_button-border-size: var(--button-border-size, 0);
  --_button-gap: var(--button-gap, 0.5rem);
  --_button-min-p: var(--button-min-p, 0.75rem);
  --_button-p: var(--button-p, 1.25rem);
  --_button-size: var(--button-size, 2rem);
  --_button-text-hover: var(--button-text-hover, var(--color-white));
  --_button-text-active: var(--button-text-active, var(--color-white));

  --_button-text: var(--button-text, var(--color-white));

  --_button-bg-active: var(--button-bg-active, var(--_color-400));
  --_button-bg-hover: var(--button-bg-hover, var(--_color-800));
  --_button-bg: var(--button-bg, var(--_color-500));
  --_button-border-hover: var(--button-border-hover, var(--_color-800));
  --_button-border: var(--button-border, var(--_color-500));
}

button:not([data-role]) {
  &[data-size="large"] {
    --button-p: 1.5rem;
    --button-min-p: 1rem;
    --button-gap: 0.5rem;
    --button-size: 2.5rem;
    --button-font-size: var(--text-large);
  }

  &[data-size="small"] {
    --button-p: 1rem;
    --button-min-p: 0.5rem;
    --button-gap: 0.25rem;
    --button-size: 1.75rem;
    --button-font-size: var(--text-small);
  }

  &[data-style="outlined"] {
    --button-bg: var(--color-white);
    --button-border-size: var(--border-width-md);

    --button-text: var(--_color-500);
    --button-text-active: var(--_color-500);
    --button-text-hover: var(--_color-800);
    --button-bg-hover: var(--_color-100);
    --button-bg-active: var(--_color-50);
  }

  &[data-style="text"] {
    --button-bg: var(--color-transparent);
    --button-text: var(--_color-500);
    --button-text-active: var(--_color-500);
    --button-text-hover: var(--_color-800);
    --button-bg-hover: var(--_color-100);
    --button-bg-active: var(--_color-50);
  }

  &:disabled {
    --button-text: var(--color-gray-400);
    --button-bg: var(--color-gray-100);

    &[data-style="outlined"],
    &[data-style="text"] {
      --button-bg: var(--color-transparent);
      --button-text: var(--color-gray-300);
      --button-border: var(--color-gray-100);
    }
  }
}

button[data-role="link"],
button[data-role="link-no-underline"] {
  --button-weight: var(--font-weight-normal);
  --button-radius: 0;
  --button-bg: var(--color-transparent);
  --button-text: var(--_color-500);
  --button-text-active: var(--_color-400);
  --button-bg-active: var(--color-transparent);

  --button-text-hover: var(--_color-800);
  --button-bg-hover: var(--color-transparent);
  --button-size: auto;

  --button-p: 0;
  --button-min-p: 0;
  --button-font-size: var(--text);

  &:disabled {
    --button-text: var(--color-gray-400);
  }
}

button[data-color="orange"] {
  --color-50: var(--color-orange-50);
  --color-100: var(--color-orange-100);
  --color-400: var(--color-orange-400);
  --color-500: var(--color-orange-500);
  --color-800: var(--color-orange-800);

  --button-text: var(--color-gray-950);
}

button[data-color="red"] {
  --color-50: var(--color-red-50);
  --color-100: var(--color-red-100);
  --color-400: var(--color-red-400);
  --color-500: var(--color-red-500);
  --color-800: var(--color-red-800);
}

button[data-color="black"] {
  --color-50: var(--color-gray-50);
  --color-100: var(--color-gray-100);
  --color-400: var(--color-gray-400);
  --color-500: var(--color-gray-950);
  --color-800: var(--color-gray-800);
}

button[data-color="white"] {
  --color-50: var(--color-gray-50);
  --color-100: var(--color-gray-100);
  --color-400: var(--color-gray-400);
  --color-500: var(--color-white);
  --color-800: var(--color-gray-800);
}
</style>
