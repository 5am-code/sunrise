
<template>
  <div class="w-full mx-auto xl:w-1/3 sm:w-3/4">
    <div class="leading-6 text-gray-800">
      <slot></slot>
    </div>
    <div class="mt-2 text-sm font-semibold">
      {{ author }}
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SSimpleQuote extends Vue {
  @Prop() author?: string;
}
</script>