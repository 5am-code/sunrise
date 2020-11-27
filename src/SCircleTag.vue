
<template>
  <a
    class="inline-flex items-center h-6 py-1 pr-3 m-1 ml-1 font-semibold tracking-wider uppercase rounded-md md:text-xs group"
    :class="tagColor + ' ' + tagTextColor + ' ' + tagCursor"
  >
    <div
      class="flex items-center justify-center mr-2 -ml-1 transition duration-300 transform bg-white border rounded-full hover:rotate-full w-7 h-7 group-hover:scale-110"
      :class="tagIconColor"
    >
      <slot name="circle"></slot>
    </div>
    <slot></slot>
  </a>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SCircleTag extends Vue {
  @Prop() color?: string;
  @Prop() textColor?: string;
  @Prop() iconColor?: string;

  private tagColor = "";
  private tagIconColor = "";
  private tagTextColor = "";
  private tagCursor = "";

  mounted() {
    this.tagColor = this.color ?? "bg-azure-200 ";
    this.tagIconColor = this.iconColor ?? "text-azure-300 ";
    this.tagTextColor = this.textColor ?? "text-azure-700 ";

    // check if component has a href attribute and add a pointer cursor
    this.tagCursor =
      this.$attrs != undefined && this.$attrs.href != undefined
        ? "cursor-pointer"
        : "cursor-default";
  }
}
</script>