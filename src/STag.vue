
<template>
  <a
    class="inline-flex items-center justify-between px-3 py-1 m-1 font-semibold tracking-wider uppercase bg-opacity-100 md:text-xs rounded-xl hover:bg-opacity-75"
    :class="tagColor + ' ' + tagTextColor + ' ' + tagCursor"
  >
    <div class="pr-1"><slot name="iconLeft"></slot></div>
    <slot></slot>
    <div class="pl-1"><slot name="iconRight"></slot></div>
  </a>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class STag extends Vue {
  @Prop() color?: string;
  @Prop() textColor?: string;

  private tagColor = "";
  private tagTextColor = "";
  private tagCursor = "";

  mounted() {
    this.tagColor = this.color ?? "bg-azure-200 ";
    this.tagTextColor = this.textColor ?? "text-azure-700 ";

    // check if component has a href attribute and add a pointer cursor
    this.tagCursor =
      this.$attrs != undefined && this.$attrs.href != undefined
        ? "cursor-pointer"
        : "cursor-default";
  }
}
</script>