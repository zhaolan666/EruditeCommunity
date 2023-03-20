<script setup lang="ts">
import { defineProps, PropType, computed } from 'vue'
import BoxIcon from '@/assets/box.png'

export interface ColumnProps {
  id: number;
  title: string;
  avator?: string;
  description: string;
}

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  }
})
const columnList = computed(() => {
  return props.list.map(column => {
    if (!column.avator) {
      column.avator = BoxIcon
    }
    return column
  })
})
const propsList = props.list[0]

</script>

<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow=sm" style="width: 18rem;">
        <div class="card-body text-center">
          <img :src="column.avator" class="rounded-circle border border-light w-25 my-3" :alt="column.title">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">{{ column.description }}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>
