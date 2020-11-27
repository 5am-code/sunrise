
<template>
  <pre
    class="px-6 pb-4 overflow-auto text-sm border rounded bg-azure-50"
  ><slot></slot></pre>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SCodeBlock extends Vue {}
</script>
<style>
</style>