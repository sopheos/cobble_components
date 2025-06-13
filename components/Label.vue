<template>
  <label
    class="inline-block h-(--_label-size) min-w-(--_label-size) items-center rounded-(--_label-radius) border-(length:--_label-border-size) border-(color:--_label-border) bg-(--_label-bg) text-center text-(length:--_label-font-size) font-(--_label-font-weight) text-(color:--_label-text) data-[role=link]:underline [&:not([data-status='disabled'])]:cursor-pointer [&:not([data-status='disabled'])]:hover:border-(--_label-border-hover) [&:not([data-status='disabled'])]:hover:bg-(--_label-bg-hover) [&:not([data-status='disabled'])]:hover:text-(--_label-text-hover) [&:not([data-status='disabled'])]:active:bg-(--_label-bg-active) [&:not([data-status='disabled'])]:active:text-(--_label-text-active)"
  >
    <span
      class="flex h-full items-center justify-center gap-(--_label-gap)"
      :class="{
        'pr-(--_label-min-p)': !!slots.append && !slots.icon,
        'pl-(--_label-min-p)': !!slots.prepend && !slots.icon,
        'pr-(--_label-p)': !slots.append && !slots.icon,
        'pl-(--_label-p)': !slots.prepend && !slots.icon,
      }"
    >
      <slot v-if="slots.icon" name="icon"></slot>
      <template v-else>
        <slot v-if="!!slots.prepend" name="prepend"></slot>
        <slot></slot>
        <slot v-if="!!slots.append" name="append"></slot>
      </template>
    </span>
  </label>
</template>

<script setup>
const slots = useSlots();
</script>

<style scoped>
label {
  --_color-50: var(--color-50, var(--color-blue-50));
  --_color-100: var(--color-100, var(--color-blue-100));
  --_color-400: var(--color-400, var(--color-blue-400));
  --_color-500: var(--color-500, var(--color-blue-500));
  --_color-800: var(--color-800, var(--color-blue-800));

  --_label-radius: var(--label-radius, var(--radius-full));

  --_label-font-size: var(--label-font-size, var(--text));

  --_label-font-weight: var(--label-weight, var(--font-weight-medium));

  --_label-border-size: var(--label-border-size, 0);
  --_label-gap: var(--label-gap, 0.5rem);
  --_label-min-p: var(--label-min-p, 0.75rem);
  --_label-p: var(--label-p, 1.25rem);
  --_label-size: var(--label-size, 2rem);
  --_label-text-hover: var(--label-text-hover, var(--color-white));
  --_label-text-active: var(--label-text-active, var(--color-white));

  --_label-text: var(--label-text, var(--color-white));

  --_label-bg-active: var(--label-bg-active, var(--_color-400));
  --_label-bg-hover: var(--label-bg-hover, var(--_color-800));
  --_label-bg: var(--label-bg, var(--_color-500));
  --_label-border-hover: var(--label-border-hover, var(--_color-800));
  --_label-border: var(--label-border, var(--_color-500));
}

label:not([data-role]) {
  &[data-size="large"] {
    --label-p: 1.5rem;
    --label-min-p: 1rem;
    --label-gap: 0.5rem;
    --label-size: 2.5rem;
    --label-font-size: var(--text-large);
  }

  &[data-size="small"] {
    --label-p: 1rem;
    --label-min-p: 0.5rem;
    --label-gap: 0.25rem;
    --label-size: 1.75rem;
    --label-font-size: var(--text-small);
  }

  &[data-style="outlined"] {
    --label-bg: var(--color-white);
    --label-border-size: var(--border-width-md);

    --label-text: var(--_color-500);
    --label-text-active: var(--_color-500);
    --label-text-hover: var(--_color-800);
    --label-bg-hover: var(--_color-100);
    --label-bg-active: var(--_color-50);
  }

  &[data-style="text"] {
    --label-bg: var(--color-transparent);
    --label-text: var(--_color-500);
    --label-text-active: var(--_color-500);
    --label-text-hover: var(--_color-800);
    --label-bg-hover: var(--_color-100);
    --label-bg-active: var(--_color-50);
  }

  &[data-status="disabled"] {
    --label-text: var(--color-gray-400);
    --label-bg: var(--color-gray-100);

    &[data-style="outlined"],
    &[data-style="text"] {
      --label-bg: var(--color-transparent);
      --label-text: var(--color-gray-300);
      --label-border: var(--color-gray-100);
    }
  }
}

label[data-role="link"],
label[data-role="link-no-underline"] {
  --label-weight: var(--font-weight-normal);
  --label-radius: 0;
  --label-bg: var(--color-transparent);
  --label-text: var(--_color-500);
  --label-text-active: var(--_color-400);
  --label-bg-active: var(--color-transparent);

  --label-text-hover: var(--_color-800);
  --label-bg-hover: var(--color-transparent);
  --label-size: auto;

  --label-p: 0;
  --label-min-p: 0;
  --label-font-size: var(--text);

  &:disabled {
    --label-text: var(--color-gray-400);
  }
}

label[data-color="orange"] {
  --color-50: var(--color-orange-50);
  --color-100: var(--color-orange-100);
  --color-400: var(--color-orange-400);
  --color-500: var(--color-orange-DEFAULT);
  --color-800: var(--color-orange-800);

  --label-text: var(--color-gray-950);
}

label[data-color="red"] {
  --color-50: var(--color-red-50);
  --color-100: var(--color-red-100);
  --color-400: var(--color-red-400);
  --color-500: var(--color-red-500);
  --color-800: var(--color-red-800);
}

label[data-color="black"] {
  --color-50: var(--color-gray-50);
  --color-100: var(--color-gray-100);
  --color-400: var(--color-gray-400);
  --color-500: var(--color-gray-950);
  --color-800: var(--color-gray-800);
}

label[data-color="white"] {
  --color-50: var(--color-gray-50);
  --color-100: var(--color-gray-100);
  --color-400: var(--color-gray-400);
  --color-500: var(--color-white);
  --color-800: var(--color-gray-800);
}
</style>
