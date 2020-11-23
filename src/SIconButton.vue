<template>
  <button
    class="flex items-stretch px-4 py-2 overflow-hidden border rounded-md focus:outline-none hover:shadow-centered"
  >
    <slot name="icon"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        width="20"
      >
        <path
          fill-rule="evenodd"
          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        /></svg
    ></slot>

    <span class="pl-2"><slot name="text">Eat all the cake!</slot></span>
  </button>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SIconButton extends Vue {}
</script>