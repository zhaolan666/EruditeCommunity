<script setup lang="ts">
import ColumnList, { ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue';
const currentUser: UserProps = {
  isLogin: true,
  name: 'invoke'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏，有一段非常有意思的简介，可以更新一下哦',
    avator: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2专栏，有一段非常有意思的简介，可以更新一下哦',
    avator: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png'
  },
  {
    id: 3,
    title: 'test1的专栏',
    description: '这是test3专栏，有一段非常有意思的简介，可以更新一下哦',
    avator: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png'
  },
  {
    id: 4,
    title: 'test2的专栏',
    description: '这是test4专栏，有一段非常有意思的简介，可以更新一下哦',
    // avator: 'https://p0.itc.cn/q_70/images01/20220406/a01312d86b8745619e2ed0075d1c1635.png'
    avator: ''
  },
]



</script>
<template>
  <div class="container">
    <ColumnList :list="testData"></ColumnList>
    <GlobalHeader :user="currentUser" />
  </div>
</template>
