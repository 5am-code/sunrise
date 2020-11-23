
<template>
  <div v-show="isActive"><slot></slot></div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class STab extends Vue {
  @Prop({ required: true }) title!: string;

  public isActive = false;
}
</script>
<style>
</style>