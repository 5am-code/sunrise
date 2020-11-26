
<template>
  <a
    class="bg-repeat-x border-b-2 cursor-pointer border-azure-300 sGradientLink bg-gradient-to-b from-azure-200 to-azure-50"
    ><slot></slot
  ></a>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SGradientLink extends Vue {}
</script>
<style>
a.sGradientLink {
  background-position: 0 100%;
  background-size: 4px 1px;
  transition: background-size 0.4s;
}
a.sGradientLink:hover {
  background-size: 4px 50px;
}
</style>