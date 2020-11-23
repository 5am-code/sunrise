
<template>
  <p
    class="px-4 mx-5 my-3 text-lg leading-7 transition-colors duration-300 border-l-8 border-amber-200 hover:border-amber-300 font-oblique"
  >
    <slot></slot>
  </p>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SInlineQuote extends Vue {}
</script>