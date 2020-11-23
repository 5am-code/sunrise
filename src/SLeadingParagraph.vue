
<template>
  <p
    class="px-4 my-2 text-xl leading-9 tracking-wide text-azure-500 font-oblique"
  >
    <slot></slot>
  </p>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SLeadingParagraph extends Vue {}
</script>