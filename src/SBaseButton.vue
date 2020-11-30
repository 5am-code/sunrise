
<template>
  <button
    class="transition-all duration-300 bg-white border border-transparent rounded shadow text-fog-900 hover:border-fog-300 hover:text-azure-500 focus:outline-none"
    :class="sizeStyling"
  >
    <slot></slot>
  </button>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SBaseButton extends Vue {
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