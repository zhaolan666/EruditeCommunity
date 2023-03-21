<script setup lang="ts">
import { PropType, defineProps } from 'vue';
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

const props = defineProps({
  user: {
    type: Object as PropType<UserProps>,
    required: true
  }
})

</script>

<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">博学社区</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">你好 {{ user.name }}</a></li>
    </ul>
  </nav>
</template>
