
<template>
  <div class="w-full mt-24 lg:w-1/2 2xl:w-1/3 group">
    <div class="mx-3 bg-white rounded shadow-centered">
      <div class="flex justify-between pt-1">
        <div
          class="w-24 h-24 mx-auto -mt-12 overflow-hidden transition duration-150 transform bg-center bg-no-repeat bg-cover rounded-full lg:w-32 lg:h-32 lg:-mt-16 group-hover:scale-101"
          :style="'background-image: url(\'' + imagePath + '\')'"
        />
      </div>
      <div class="flex flex-col items-center justify-center mt-2">
        <div
          class="my-2 text-lg font-semibold transition duration-300 text-azure-500 group-hover:text-amber-500"
        >
          <slot name="author">{{ author }}</slot>
        </div>
      </div>

      <div class="flex flex-col justify-between px-2 text-center">
        <div class="text-xl font-semibold leading-8 xl:text-2xl font-display">
          <a href="#">{{ title }}</a>
        </div>
        <s-paragraph class="text-sm text-left text-gray-700">
          {{ excerpt }}
        </s-paragraph>
        <div
          class="pb-4 text-sm transition duration-300 text-azure-300 group-hover:text-azure-500"
        >
          <slot name="date">{{ date }}</slot> &#183;
          <slot name="read">{{ read }}</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SAuthorCard extends Vue {
  @Prop() title!: string;
  @Prop() author!: string;
  @Prop() category!: string;
  @Prop() date!: string;
  @Prop() read!: string;
  @Prop() imagePath!: string;
  @Prop() excerpt!: string;
  @Prop() tags!: Array<string>;
}
</script>