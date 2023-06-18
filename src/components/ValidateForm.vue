<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, onUnmounted } from "vue";
import { emitter } from "../utils/index";
const emit = defineEmits(["form-submit"]);

type ValidateFunc = () => boolean;

let funcArr: ValidateFunc[] = [];

const submitForm = () => {
  const result = funcArr.map((func) => func()).every((result) => result);
  emit("form-submit", result);
};

onMounted(() => {
  emitter.on("form-item-created", callback);
});
onUnmounted(() => {
  emitter.off("form-item-created", callback);
  funcArr = [];
});
const callback = (func: ValidateFunc) => {
  funcArr.push(func);
};
</script>

