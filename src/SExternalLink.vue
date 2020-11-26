
<template>
  <a
    class="inline-flex items-center transition duration-300 border-b cursor-pointer border-azure-300 hover:border-transparent group"
  >
    <slot></slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="15"
      class="ml-1 text-azure-300 group-hover:text-amber-300"
    >
      <path
        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
      />
      <path
        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
      />
    </svg>
  </a>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SExternalLink extends Vue {}
</script>