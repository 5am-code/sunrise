
<template>
  <a
    class="inline-flex items-center justify-between px-3 py-1 m-1 font-semibold tracking-wider uppercase transition duration-150 transform border md:text-xs rounded-xl hover:shadow-md hover:scale-101"
    :class="tagBorderColor + ' ' + tagTextColor + ' ' + tagCursor"
  >
    <div class="pr-1"><slot name="iconLeft"></slot></div>
    <slot></slot>
    <div class="pl-1"><slot name="iconRight"></slot></div>
  </a>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SOutlineTag extends Vue {
  @Prop() borderColor?: string;
  @Prop() textColor?: string;

  private tagBorderColor = "";
  private tagTextColor = "";
  private tagCursor = "";

  mounted() {
    this.tagBorderColor = this.borderColor ?? "border-azure-400 ";
    this.tagTextColor = this.textColor ?? "text-azure-600 ";

    // check if component has a href attribute and add a pointer cursor
    this.tagCursor =
      this.$attrs != undefined && this.$attrs.href != undefined
        ? "cursor-pointer"
        : "cursor-default";
  }
}
</script>