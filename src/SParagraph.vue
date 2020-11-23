
<template>
  <p class="px-5 my-3 text-lg leading-7 text-gray-900 md:text-base">
    <slot></slot>
  </p>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SParagraph extends Vue {}
</script>