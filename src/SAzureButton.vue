
<template>
  <button
    class="flex items-center font-semibold tracking-wide text-white transition duration-300 ease-in-out rounded-md focus:outline-none hover:bg-azure-400 bg-azure-500"
    :class="sizeStyling"
  >
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SAzureButton extends Vue {
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