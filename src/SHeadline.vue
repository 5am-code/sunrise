
<template>
  <div class="text-2xl font-semibold leading-8 font-display">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SHeadline extends Vue {}
</script>