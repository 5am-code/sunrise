
<template>
  <button
    class="flex items-center font-semibold tracking-wide transition duration-300 ease-in-out border rounded-md text-amber-600 border-amber-300 hover:border-amber-600 focus:outline-none bg-amber-100"
    :class="sizeStyling"
  >
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SPrimaryOutlineButton extends Vue {
  @Prop() size?: string;

  get sizeStyling(): string {
    switch (this.size) {
      case "small":
        return "px-2 py-1";

      case "large":
        return "px-8 py-4 text-xl";

      case "default":
      default:
        return "px-4 py-2 ";
    }
  }
}
</script>
<style>
</style>