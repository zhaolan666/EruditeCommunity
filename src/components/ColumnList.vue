<script setup lang="ts">
import { PropType, computed } from "vue";
import BoxIcon from "@/assets/box.png";
import { ColumnProps } from "../typing/index";

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },
});
const columnList = computed(() => {
  Array.isArray(props.list) ? props.list : Array.of(props.list);
  // @ts-ignore
  return props.list.testData.map((column) => {
    if (!column.avatar) {
      column.avatar = BoxIcon;
    }
    return column;
  });
});
const propsList = props.list[0];
</script>

<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow=sm" style="width: 18rem">
        <div class="card-body text-center">
          <img
            :src="column.avator"
            class="rounded-circle border border-light w-25 my-3"
            :alt="column.title"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <router-link
            :to="`/column/${column.id}`"
            class="btn btn-outline-primary"
            >进入专栏</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
