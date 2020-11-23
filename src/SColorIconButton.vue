<template>
  <button
    class="flex items-stretch overflow-hidden rounded focus:outline-none group hover:shadow-centered"
  >
    <span
      class="flex items-center p-2 text-white transition duration-300 bg-azure-400 group-hover:bg-azure-500"
    >
      <slot name="icon"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="20"
          fill="currentColor"
        >
          <path
            d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
          /></svg
      ></slot>
    </span>
    <span
      class="p-2 transition duration-300 border border-l-0 rounded-md rounded-l-none"
      style="min-width: 8rem"
    >
      <slot name="text">Eat all the cake!</slot>
    </span>
  </button>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SColorIconButton extends Vue {}
</script>