<script setup lang="ts">
import ColumnList from "./components/ColumnList.vue";
import GlobalHeader from "./components/GlobalHeader.vue";
import { UserProps } from "./typing/index";
import testData from "./api/data";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
console.log(store, "store data from vuex");
const currentUser = computed(() => store.state.user);
const biggerColumnLen = computed(() => store.getters.biggerColumnsLen());
</script>

<template>
  <div class="container">
    <h2>{{ biggerColumnLen }}</h2>
    <column-list :list="testData"></column-list>
    <global-header :user="currentUser" />
    <router-view></router-view>
    <footer class="text-center" py-4 text-secondary bg-light mt-6>
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2023 畅谈专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>
