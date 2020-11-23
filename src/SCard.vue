
<template>
  <a class="w-full lg:w-1/2 xl:w-1/3 group" href="#">
    <div
      class="my-3 overflow-hidden transform bg-white rounded shadow-md lg:mx-3"
    >
      <div class="overflow-hidden h-52">
        <div
          class="w-full h-full transition duration-700 transform bg-center bg-cover group-hover:scale-105"
          :style="'background-image: url(\'' + imagePath + '\')'"
        ></div>
      </div>
      <div class="flex flex-col justify-between px-3">
        <div
          class="pt-5 pb-1 font-semibold tracking-wide uppercase lg:text-sm text-amber-500"
        >
          <slot name="category">{{ category }}</slot>
        </div>

        <s-headline
          ><slot name="title">{{ title }}</slot>
        </s-headline>

        <div class="w-full my-2 lg:text-sm text-azure-700">
          by <slot name="author">{{ author }}</slot>
        </div>

        <p class="leading-7 text-azure-900 lg:text-sm">
          <slot name="excerpt">{{ excerpt }}</slot>
        </p>

        <div
          class="flex items-center justify-between w-full my-4 lg:text-sm text-azure-600"
        >
          <div>
            <slot name="date">{{ date }}</slot>
          </div>
          <div class="text-gray-500">
            <slot name="read">{{ read }}</slot>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SCard extends Vue {
  @Prop() title!: string;
  @Prop() author!: string;
  @Prop() category!: string;
  @Prop() date!: string;
  @Prop() read!: string;
  @Prop() imagePath!: string;
  @Prop() excerpt!: string;
}
</script>
<style>
</style>