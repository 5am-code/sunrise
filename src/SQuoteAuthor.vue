
<template>
  <div class="w-full mx-auto my-2 xl:w-3/4 2xl:w-2/3">
    <div
      class="absolute w-48 h-32 transform translate-x-16 translate-y-16 lg:translate-x-0 -z-1 backgroundPattern"
    ></div>
    <div class="flex flex-col items-center justify-between lg:flex-row">
      <div class="lg:pr-12">
        <div
          class="w-40 h-40 my-8 bg-center bg-cover rounded-full lg:my-0"
          :style="'background-image: url(' + authorImage + ')'"
        ></div>
      </div>
      <div class="flex flex-col-reverse lg:flex-col">
        <div class="text-xl lg:text-lg font-oblique text-azure-600">
          <slot></slot>
        </div>

        <div class="text-center lg:text-left">
          <div class="text-lg lg:mt-2 font-display text-amber-800">
            {{ author }}
          </div>
          <div class="mb-2 text-base tracking-wide text-fog-600 lg:text-xs">
            {{ authorSubtitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SQuoteAuthor extends Vue {
  @Prop() author?: string;
  @Prop() authorSubtitle?: string;
  @Prop() authorImage?: string;
}
</script>
<style>
.backgroundPattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cg fill='%234D78A7' fill-opacity='0.3'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
}
</style>