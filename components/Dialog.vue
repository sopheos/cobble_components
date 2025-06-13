<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      v-bind="attrs"
      class="mt-(--_dialog-m-t) mr-(--_dialog-m-r) mb-(--_dialog-m-b) ml-(--_dialog-m-l) h-(--_dialog-height) max-h-full w-(--_dialog-width) max-w-full translate-x-(--_dialog-translate-x) translate-y-(--_dialog-translate-y) rounded-tl-(--_dialog-r-tl) rounded-tr-(--_dialog-r-tr) rounded-br-(--_dialog-r-br) rounded-bl-(--_dialog-r-bl) backdrop:bg-black backdrop:opacity-0 open:flex open:translate-x-0 open:translate-y-0 open:flex-col open:backdrop:opacity-50 open:starting:translate-x-(--_dialog-translate-x) open:starting:translate-y-(--_dialog-translate-y) open:backdrop:starting:opacity-0 [&>section]:grow [&>section]:overflow-y-auto"
    >
      <slot></slot>
    </dialog>
  </Teleport>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const dialog = useTemplateRef("dialog");

defineExpose({
  showModal: () => dialog.value?.showModal(),
  close: () => dialog.value?.close(),
});
</script>

<style scoped>
dialog {
  --_dialog-width: var(--dialog-width, 100vw);
  --_dialog-height: var(--dialog-height, 100vh);

  --_dialog-translate-x: var(--dialog-translate-x, 0);
  --_dialog-translate-y: var(--dialog-translate-y, 0);
  --_dialog-m-t: var(--dialog-m-t, auto);
  --_dialog-m-b: var(--dialog-m-b, auto);
  --_dialog-m-l: var(--dialog-m-l, auto);
  --_dialog-m-r: var(--dialog-m-r, auto);

  --_dialog-r-tl: var(--dialog-r-tl, 0);
  --_dialog-r-tr: var(--dialog-r-tr, 0);
  --_dialog-r-bl: var(--dialog-r-bl, 0);
  --_dialog-r-br: var(--dialog-r-br, 0);

  --_dialog-duration: var(--dialog-duration, 350ms);

  transition:
    overlay var(--_dialog-duration) ease-in-out allow-discrete,
    translate var(--_dialog-duration) ease-in-out allow-discrete,
    transform var(--_dialog-duration) ease-in-out allow-discrete,
    display var(--_dialog-duration) step-end allow-discrete,
    opacity var(--_dialog-duration) ease-in-out allow-discrete,
    overlay var(--_dialog-duration) ease-in-out allow-discrete,
    flex-direction var(--_dialog-duration) step-end allow-discrete;

  &::backdrop {
    transition:
      overlay var(--_dialog-duration) ease-in-out allow-discrete,
      opacity var(--_dialog-duration) ease-in-out allow-discrete;
  }
}
</style>
