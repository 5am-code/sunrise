
<template>
  <div class="w-full mx-auto xl:w-1/3 sm:w-3/4">
    <div class="text-2xl font-oblique text-azure-500">
      <slot></slot>
    </div>
    <div class="text-sm font-semibold text-right text-fog-700">
      {{ author }}
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SQuote extends Vue {
  @Prop() author?: string;
}
</script>