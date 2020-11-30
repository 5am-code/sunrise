
<template>
  <div class="py-4 font-semibold font-display">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SParagraphHeadline extends Vue {}
</script>