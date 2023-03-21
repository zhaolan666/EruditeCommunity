<script setup lang="ts">
import { reactive, PropType, defineEmits, ref } from 'vue'
import type { RulesProp } from '../typing';
const props = defineProps({
  rules: Array as PropType<RulesProp>,
  modelValue: String
})

const inputRef = reactive({
  val: props.modelValue || '',
  error: false,
  message: ""
})

const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/



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

const emit = defineEmits(['update:modelValue'])
const updateValue = (e: KeyboardEvent) => {
  const targetValue = (e.target as HTMLInputElement).value
  const targetValueRef = ref(targetValue)
  inputRef.val = targetValueRef.value
  emit('update:modelValue', targetValueRef.value)
}




</script>

<template>
  <div class="validate-input-container pb-3">
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" :value="inputRef.val"
      @input:update:modelValue="updateValue" @blur="validateInput" :class="{ 'is-invalid': inputRef.error }">
    <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
  </div>
</template>
