<script setup lang="ts">
import { reactive, PropType, onMounted } from "vue";
import { emitter } from "../utils/index";
import type { RulesProp } from "../typing";
export type TagType = "input" | "textarea";
const props = defineProps({
  rules: Array as PropType<RulesProp>,
  modelValue: String,
  tag: {
    type: String as PropType<TagType>,
  },
});

const emit = defineEmits(["update:emailVal"]);

onMounted(() => {
  emitter.emit("form-item-created", validateInput);
});

const inputRef = reactive({
  val: props.modelValue || "",
  type: props.type || "text" || "email" || "password",
  error: false,
  message: "",
});
const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateInput = () => {
  if (props.rules) {
    const allPassed = props.rules.every((rule: { message: any; type: any }) => {
      let passed = true;
      inputRef.message = rule.message;
      switch (rule.type) {
        case "required":
          passed = inputRef.val.trim() !== "";
          break;
        case "email":
          passed = emailReg.test(inputRef.val);
          break;
        default:
          break;
      }
      return passed;
    });
    inputRef.error = !allPassed;
    return allPassed;
  }
  return true;
};
const updateValue = (e: KeyboardEvent) => {
  const targetValue = (e.target as HTMLInputElement).value;
  const targetType = (e.target as HTMLInputElement).type;
  inputRef.val = targetValue;
  inputRef.type = targetType;
  emit("update:emailVal", targetValue);
};
</script>
<template>
  <div class="validate-input-container pb-3">
    <input
      v-if="tag !== 'textarea'"
      :type="inputRef.type"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      @blur="validateInput"
      :value="inputRef.val"
      @keyup="updateValue"
      :class="{ 'is-invalid': inputRef.error }"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>
