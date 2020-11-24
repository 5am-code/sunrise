
<template>
  <a
    :href="link"
    class="px-2 py-1 m-1 text-xs font-semibold tracking-wider uppercase bg-opacity-100 rounded-xl hover:bg-opacity-75"
    :class="tagColor + ' ' + tagTextColor + ' ' + tagCursor"
  >
    <slot></slot>
  </a>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class STag extends Vue {
  @Prop() link?: string;
  @Prop() color?: string;
  @Prop() textColor?: string;

  private tagColor = "";
  private tagTextColor = "";
  private tagCursor = "";

  mounted() {
    this.tagColor = this.color ?? "bg-azure-200";
    this.tagTextColor = this.textColor ?? "text-azure-700 ";
    this.tagCursor = this.link == undefined ? "" : "cursor-pointer";
  }
}
</script>
<style>
</style>