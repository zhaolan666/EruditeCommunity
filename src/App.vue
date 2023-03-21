<script setup lang="ts">
import { reactive, ref } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue';
import type { RulesProp } from './typing';
import ValidateInput from './components/ValidateInput.vue';
const currentUser: UserProps = {
  isLogin: true,
  name: 'invoke'
}
const emailRules: RulesProp = [
  { type: 'required', message: '电子邮箱地址不能为空' },
  { type: 'email', message: '请输入正确的电子邮箱格式' }
]

const emailVal = ref('invoke')
const emailRef = reactive({
  val: "",
  error: false,
  message: ""
})

const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const validateEmail = () => {
  if (emailRef.val.trim() === '') {
    emailRef.error = true
    emailRef.message = 'can not be empty'
  } else if (!emailReg.test(emailRef.val)) {
    emailRef.error = true
    emailRef.message = 'should be valid '
  }
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
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <ValidateInput :rules="emailRules" v-model="emailVal"></ValidateInput>
        {{ emailVal }}

      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          v-model="emailRef.val" @blur="validateEmail">
      </div>
      <div class="from-text" v-if="emailRef.error">{{ emailRef.message }}</div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div>
</template>
