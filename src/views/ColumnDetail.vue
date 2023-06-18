<script setup lang="ts">
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
import PostList from "../components/PostList.vue";
const route = useRoute();
const store = useStore();

const currentId = +route.params.id;
const column = computed(() => store.getters.getColumnById(currentId));
const list = computed(() => store.getters.getPostsById(currentId));
</script>

<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img :src="column.avator" :alt="column.title" class="rounded-circle" />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p>{{ column.description }}</p>
      </div>
    </div>
  </div>
</template>
