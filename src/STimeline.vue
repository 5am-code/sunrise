
<template>
  <div class="w-full mx-auto lg:w-3/4 2xl:w-1/2" :class="arrangementClass()">
    <div
      class="flex my-6 group"
      v-for="(point, index) in timelinePoints"
      :key="point.date"
    >
      <div
        v-if="arrangement == 'left'"
        class="flex-shrink-0 w-4 h-4 transition-all duration-300 rounded-full bg-amber-400 group-hover:bg-amber-600"
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
          class="text-sm leading-7 text-gray-600 transition-all duration-150 group-hover:text-gray-900"
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
        class="flex-shrink-0 w-4 h-4 transition-all duration-300 rounded-full bg-amber-400 group-hover:bg-amber-600"
        style="margin-right: -0.55rem"
      ></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

/* It is recommended to place these classes somewhere else outside this component to enable access from within your own components. */
export const enum TimelineArrangement {
  LeftOnly = "left",
  RightOnly = "right",
}

export class TimelinePoint {
  constructor(
    private title: string,
    private date: string,
    private description: string
  ) {}
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

  private timelineDot = `<div
        class="flex-shrink-0 w-4 h-4 -ml-2 transition-all duration-300 rounded-full bg-amber-400 group-hover:bg-amber-600"
      ></div>`;
}
</script>