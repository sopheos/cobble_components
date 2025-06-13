<template>
  <NuxtLink
    class="inline-block h-(--_link-size) min-w-(--_link-size) rounded-(--_link-radius) border-(length:--_link-border-size) border-(color:--_link-border) bg-(--_link-bg) text-center text-(length:--_link-font-size) font-(--_link-font-weight) text-(color:--_link-text) hover:border-(--_link-border-hover) hover:bg-(--_link-bg-hover) hover:text-(--_link-text-hover) active:bg-(--_link-bg-active) active:text-(--_link-text-active) [&:not([data-role])]:underline"
  >
    <span
      class="flex h-full items-center justify-center gap-(--_link-gap)"
      :class="{
        'pr-(--_link-min-p)': !!slots.append && !slots.icon,
        'pl-(--_link-min-p)': !!slots.prepend && !slots.icon,
        'pr-(--_link-p)': !slots.append && !slots.icon,
        'pl-(--_link-p)': !slots.prepend && !slots.icon,
      }"
    >
      <slot v-if="slots.icon" name="icon"></slot>
      <template v-else>
        <slot v-if="!!slots.prepend" name="prepend"></slot>
        <slot></slot>
        <slot v-if="!!slots.append" name="append"></slot>
      </template>
    </span>
  </NuxtLink>
</template>

<script setup>
const slots = useSlots();
</script>

<style scoped>
a {
  --_color-50: var(--color-50, var(--color-blue-50));
  --_color-100: var(--color-100, var(--color-blue-100));
  --_color-400: var(--color-400, var(--color-blue-400));
  --_color-500: var(--color-500, var(--color-blue-500));
  --_color-800: var(--color-800, var(--color-blue-800));

  --_link-text: var(--link-text, var(--_color-500));
  --_link-text-hover: var(--link-text, var(--_color-800));
  --_link-text-active: var(--link-text-active, var(--_color-400));
  --_link-bg-active: var(--link-bg-active, var(--color-transparent));
  --_link-bg: var(--link-bg, var(--color-transparent));
  --_link-bg-hover: var(--link-bg-hover, var(--color-transparent));
  --_link-size: var(--link-size, auto);
  --_link-font-size: var(--link-font-size, var(--text));

  /* Outlined */
  --_link-border-size: var(--link-border-size, 0);
  --_link-border: var(--link-border, var(--_color-500));
  --_link-border-hover: var(--link-border-hover, var(--_color-800));

  --_link-radius: var(--link-radius, 0);
  --_link-font-weight: var(--link-weight, var(--font-weight-normal));

  --_link-gap: var(--link-gap, 0.5rem);

  --_link-min-p: var(--link-min-p, 0);
  --_link-p: var(--link-p, 0);
}

a[data-role="button"] {
  --link-weight: var(--font-weight-medium);

  --link-gap: 0.5rem;
  --link-min-p: 0.75rem;
  --link-p: 1.25rem;
  --link-radius: var(--radius-full);

  --link-text: var(--color-white);
  --link-text-hover: var(--color-white);
  --link-text-active: var(--color-white);
  --link-bg-active: var(--_color-400);
  --link-bg: var(--_color-500);
  --link-bg-hover: var(--_color-800);
  --link-size: 2rem;
  --link-font-size: var(--text);

  &[data-size="large"] {
    --link-p: 1.5rem;
    --link-min-p: 1rem;
    --link-gap: 0.5rem;
    --link-size: 2.5rem;
    --link-font-size: var(--text-large);
  }

  &[data-size="small"] {
    --link-p: 1rem;
    --link-min-p: 0.5rem;
    --link-gap: 0.25rem;
    --link-size: 1.75rem;
    --link-font-size: var(--text-small);
  }

  &[data-style="outlined"] {
    --link-border-size: var(--border-width-md);
    --link-text: var(--_color-500);
    --link-text-hover: var(--_color-800);
    --link-bg: var(--color-white);
    --link-bg-hover: var(--_color-100);
    --link-bg-active: var(--_color-50);
  }

  &[data-style="text"] {
    --link-bg: var(--color-transparent);
    --link-bg-active: var(--color-transparent);
    --link-text: var(--_color-500);
    --link-text-active: var(--_color-500);
    --link-text-hover: var(--_color-800);
    --link-bg-hover: var(--_color-100);
    --link-bg-active: var(--_color-50);
  }
}
a[data-color="orange"] {
  --color-50: var(--color-orange-50);
  --color-100: var(--color-orange-100);
  --color-400: var(--color-orange-400);
  --color-500: var(--color-orange-DEFAULT);
  --color-800: var(--color-orange-800);
}

a[data-color="black"] {
  --color-50: var(--color-gray-50);
  --color-100: var(--color-gray-100);
  --color-400: var(--color-gray-400);
  --color-500: var(--color-gray-950);
  --color-800: var(--color-gray-800);
}

a[data-color="gray"] {
  --color-50: var(--color-gray-50);
  --color-100: var(--color-gray-100);
  --color-400: var(--color-gray-400);
  --color-500: var(--color-gray-700);
  --color-800: var(--color-gray-800);
}
</style>
