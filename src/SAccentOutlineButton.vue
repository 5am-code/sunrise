
<template>
  <button
    class="flex items-center font-semibold tracking-wide transition duration-300 ease-in-out border rounded-md text-azure-600 border-azure-300 hover:border-azure-600 focus:outline-none bg-azure-100"
    :class="sizeStyling"
  >
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SAccentOutlineButton extends Vue {
  @Prop() size?: string;

  get sizeStyling(): string {
    switch (this.size) {
      case "small":
        return "px-2 py-1";

      case "default":
      default:
        return "px-4 py-2 ";
    }
  }
}
</script>
<style>
</style>