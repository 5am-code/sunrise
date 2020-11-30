
<template>
  <a
    class="transition duration-300 border-b-2 cursor-pointer border-azure-200 hover:border-transparent"
  >
    <slot></slot>
  </a>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SLink extends Vue {}
</script>