
<template>
  <button
    class="text-fog-900 transition-all duration-300 border border-transparent rounded shadow hover:border-fog-300 hover:text-azure-500 focus:outline-none"
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