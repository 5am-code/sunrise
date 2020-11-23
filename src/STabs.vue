
<template>
  <div class="my-4">
    <ul class="flex pl-2 border-b">
      <li
        class="px-5 py-2 mx-1 text-sm font-semibold transition-colors duration-300 border cursor-pointer border-azure-100 hover:text-azure-600"
        :class="
          selectedIndex == index
            ? 'bg-white text-gray-800 '
            : 'bg-azure-50 text-gray-500 '
        "
        :style="
          selectedIndex == index
            ? 'border-bottom: 4px solid #FF453B;'
            : 'border-bottom: 2px solid #E6ECF2;'
        "
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import STab from "./STab.vue";

@Component
export default class STabs extends Vue {
  private selectedIndex = 0;
  private tabs = new Array<STab>();

  created() {
    this.tabs = this.$children as STab[];
  }

  mounted() {
    this.selectTab(0);
  }

  selectTab(i: number) {
    this.selectedIndex = i;

    this.tabs.forEach((tab: STab, index) => {
      tab.$data.isActive = index === i;
    });
  }
}
</script>
<style>
</style>