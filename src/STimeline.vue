
<template>
  <div class="" :class="arrangementClass()">
    <div
      class="flex my-6 group"
      v-for="(point, index) in timelinePoints"
      :key="index"
    >
      <div
        v-if="arrangement == 'left'"
        class="flex-shrink-0 w-4 h-4 transition-all duration-300 rounded-full bg-amber-600 group-hover:bg-amber-500"
        style="margin-left: -0.55rem"
      ></div>
      <div
        class="justify-between w-full mx-8"
        :class="{ 'text-right': arrangement == 'right' }"
      >
        <div class="text-lg font-semibold uppercase lg:text-sm text-azure-500">
          {{ point.date }}
        </div>
        <div class="my-1 text-3xl md:text-xl font-display">
          {{ point.title }}
        </div>
        <div
          class="text-sm leading-7 transition-all duration-150 text-fog-600 group-hover:text-fog-900"
        >
          {{ point.description }}
        </div>

        <div
          class="flex"
          v-if="index + 1 == timelinePoints.length"
          :class="{
            'justify-end': arrangement == 'right',
            'justify-start': arrangement == 'left',
          }"
        >
          <div
            class="w-2 h-2 rounded-full bg-azure-400 -mr-11"
            :class="{
              '-mr-11': arrangement == 'right',
              '-ml-11': arrangement == 'left',
            }"
          ></div>
        </div>
      </div>

      <div
        v-if="arrangement == 'right'"
        class="flex-shrink-0 w-4 h-4 transition-all duration-300 rounded-full bg-amber-600 group-hover:bg-amber-500"
        style="margin-right: -0.55rem"
      ></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import TimelinePoint from "./TimelinePoint";

/* It is recommended to place these classes somewhere else outside this component to enable access from within your own components. */
export const enum TimelineArrangement {
  LeftOnly = "left",
  RightOnly = "right",
}

@Component
export default class STimeline extends Vue {
  @Prop() timelinePoints!: Array<TimelinePoint>;
  @Prop({ default: TimelineArrangement.LeftOnly })
  arrangement?: TimelineArrangement;

  arrangementClass() {
    if (this.arrangement == TimelineArrangement.LeftOnly) return "border-l-2";
    else return "border-r-2";
  }
}
</script>