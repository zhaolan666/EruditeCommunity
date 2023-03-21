<script setup lang="ts">
import { reactive, PropType } from 'vue'

const props = defineProps({
  rules: Array as PropType<RulesProp>
})

const inputRef = reactive({
  val: "",
  error: false,
  message: ""
})

const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

// @ts-ignore
export type RulesProp = RuleProp[]

const validateInput = () => {
  if (props.rules) {
    const allPassed = props.rules.every(rule => {
      let passed = true
      inputRef.message = rule.message
      switch (rule.type) {
        case 'required':
          passed = (inputRef.val.trim() !== '')
          break
        case 'email':
          passed = emailReg.test(inputRef.val)
          break
        default:
          break
      }
      return passed
    })
    inputRef.error = !allPassed
  }
}





</script>

<template>
  <div class="validate-input-container pb-3">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="inputRef.val"
      @blur="validateInput" :class="{ 'is-invalid': inputRef.error }">
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>
