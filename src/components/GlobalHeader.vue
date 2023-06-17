<script setup lang="ts">
import { PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
import { UserProps } from "../typing/index";

const props = defineProps({
  user: {
    type: Object as PropType<UserProps>,
    required: true,
  },
});
</script>

<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" href="/">博学社区</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2"
          >登录</router-link
        >
      </li>
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2"
          >注册</router-link
        >
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好 ${user.name}`">
          <DropdownItem
            ><a href="#" class="drop-item">新建文章</a></DropdownItem
          >

          <DropdownItem disabled="true"
            ><a href="#" class="drop-item">编辑资料</a></DropdownItem
          >
          <DropdownItem
            ><a href="#" class="drop-item">退出登录</a></DropdownItem
          >
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>
