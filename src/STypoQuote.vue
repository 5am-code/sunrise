
<template>
  <div class="w-full mx-auto my-4 xl:w-1/3 sm:w-3/4">
    <div
      class="absolute hidden w-32 transform -translate-x-20 -translate-y-4 sm:block -z-1 text-azure-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </div>

    <div class="text-3xl font-oblique text-azure-500">
      <slot></slot>
    </div>
    <div class="w-1/4 my-4 border-b-4 border-amber-500"></div>
    <div class="text-sm font-semibold text-right text-fog-700">
      {{ author }}
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class STypoQuote extends Vue {
  @Prop() author?: string;
}
</script>