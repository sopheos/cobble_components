<template>
  <div
    :data-open="snackbarStore.open"
    class="p-sm fixed bottom-[-5rem] left-1/2 hidden w-full -translate-x-1/2 transform transition-all transition-discrete duration-300 data-[open=true]:bottom-0 data-[open=true]:block data-[open=true]:starting:bottom-[-5rem]"
  >
    <div class="flex justify-center">
      <div
        aria-live="polite"
        role="status"
        class="gap-lg p-sm rounded-xxs flex items-center"
        :class="{
          'bg-info text-bg-info': snackbarStore.isInfo,
          'bg-warning text-bg-warning': snackbarStore.isWarning,
          'bg-error text-bg-error': snackbarStore.isError,
          'bg-success text-bg-success': snackbarStore.isSuccess,
        }"
      >
        <div class="line-clamp-2 flex-grow">
          {{ snackbarStore.message }}
        </div>
        <GButton
          v-if="snackbarStore.action"
          data-role="link-no-underline"
          data-color="white"
          class="flex-none"
          @click="snackbarStore.onAction()"
        >
          {{ snackbarStore.action }}
        </GButton>

        <GButton
          v-show="snackbarStore.close"
          data-role="link"
          data-color="white"
          class="flex-none"
          @click="snackbarStore.onClose()"
        >
          <template #icon>
            <Icon name="fa6-solid:xmark" />
          </template>
        </GButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const snackbarStore = useSnackbarStore();
</script>
