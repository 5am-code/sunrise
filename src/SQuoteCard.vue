
<template>
  <div
    class="w-11/12 mx-auto mt-12 transition duration-300 bg-white rounded-sm lg:1/2 xl:w-2/5 2xl:w-1/3 shadow-centered hover:shadow-md"
  >
    <div class="w-full pt-1">
      <div
        class="w-20 h-20 mx-auto -mt-12 overflow-hidden bg-center bg-cover border rounded-full shadow border-amber-400"
        :style="'background-image: url(' + authorImage + ')'"
      ></div>
    </div>
    <div class="px-8 py-4">
      <div class="text-center">
        <div class="text-lg font-display">{{ author }}</div>
        <div class="text-base tracking-wide text-fog-600 lg:text-xs">
          {{ authorSubtitle }}
        </div>
      </div>
      <div class="py-4 font-semibold leading-8 text-azure-800">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SQuoteCard extends Vue {
  @Prop() author?: string;
  @Prop() authorSubtitle?: string;
  @Prop() authorImage?: string;
}
</script>