
<template>
  <pre
    class="px-6 pb-4 overflow-auto text-sm bg-gray-100 border rounded"
  ><slot></slot></pre>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SCodeBlock extends Vue {}
</script>
<style>
</style>