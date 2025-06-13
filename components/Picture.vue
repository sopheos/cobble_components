<template>
  <picture ref="picture" class="inline-block">
    <source
      type="image/webp"
      :sizes="`${size ?? imageSize}px`"
      :srcset="srcSet.webp"
    />
    <source
      type="image/jpeg"
      :sizes="`${size ?? imageSize}px`"
      :srcset="srcSet.jpg"
    />
    <img
      v-bind="attrs"
      loading="lazy"
      decoding="async"
      class="object-cover text-center"
      :class="{
        'motion-safe:animate-pulse': status === LOADING,
        'bg-gray-100': status,
      }"
      @load="status = null"
      @error="status = ERROR"
    />
  </picture>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  path: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: null,
  },
  size: {
    type: Number,
    default: null,
  },
});

// Data -------------------------------------------------------------------------------------------

const attrs = useAttrs();
const clientStore = useClientStore();
const picture = useTemplateRef("picture");

const NBR_SIZE = 8;
const EMPTY_JPG =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAAEAAQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAI/9oACAEBAAAAAGF//8QAFAEBAAAAAAAAAAAAAAAAAAAAA//aAAgBAhAAAABP/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//aAAgBAxAAAAA//8QAFBABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQABPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=";
const EMPTY_WEBP =
  "data:image/webp;base64,UklGRigAAABXRUJQVlA4IBwAAABQAQCdASoBAAEAAgA2JZwABAAAAP74ULibahAA";

const LOADING = 1;
const ERROR = 2;
const status = ref(LOADING);

const sizeRatio = computed(() => {
  switch (props.type) {
    case "avatar":
      return 32;
    default:
      return 240;
  }
});

const imageSize = computed(() => {
  if (picture.value && clientStore.width > 0) {
    return picture.value.clientWidth;
  }
  return 1;
});

const srcSet = computed(() => {
  const jpg = [`${EMPTY_JPG} 1w`];
  const webp = [`${EMPTY_WEBP} 1w`];

  if (props.path) {
    for (let index = 0; index < NBR_SIZE; index++) {
      const size = index + 1;
      const width = size * sizeRatio.value;

      const url = props.path.replace("{img_size}", size);

      if (!props.size || (jpg.length === 1 && props.size <= width)) {
        jpg.push(`${url.replace("{img_type}", "jpg")} ${width}w`);
        webp.push(`${url.replace("{img_type}", "webp")} ${width}w`);
      }
    }
  }

  return {
    jpg: jpg.join(","),
    webp: webp.join(","),
  };
});
</script>
