
<template>
  <div class="text-4xl font-semibold leading-8 font-display">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SSiteTitle extends Vue {}
</script>