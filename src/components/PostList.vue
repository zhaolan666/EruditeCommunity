<script setup lang="ts">
import { PropType } from "vue";
import { PostProps } from "../typing";
const props = defineProps({
  list: {
    required: true,
    type: Array as PropType<PostProps[]>,
  },
});
</script>

<template>
  <div class="post-list">
    <article v-for="post in list" :key="post.id" class="card mb-3 shadow-item">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3">
            <img :src="post.image" :alt="post.title" class="rounded-lg w-15" />
          </div>
          <p
            :class="{
              'col-9': post.image,
            }"
          >
            {{ post.content }}
          </p>
        </div>
        <span class="text-muted">{{ post.createAt }}</span>
      </div>
    </article>
  </div>
</template>
