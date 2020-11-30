
<template>
  <div class="text-lg font-semibold text-azure-900">
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SHeadlineAlternative extends Vue {}
</script>