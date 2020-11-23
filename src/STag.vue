
<template>
  <a
    :href="link"
    class="px-2 py-1 m-1 text-xs font-semibold tracking-wider uppercase rounded-xl"
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
    this.tagColor = this.color ?? "bg-azure-500";
    this.tagTextColor = this.textColor ?? "text-white ";
    this.tagCursor = this.link == undefined ? "" : "cursor-pointer";
  }
}
</script>
<style>
</style>