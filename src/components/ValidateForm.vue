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
import mitt from "mitt";
const emit = defineEmits(["form-submit"]);
const emitter = mitt();
type ValidateFunc = () => boolean;

let funcArr: ValidateFunc[] = [];

const submitForm = () => {
  const result = funcArr.map((func) => func()).every((result) => result);
  emit("form-submit", result);
};

const callback = (func: ValidateFunc) => {
  funcArr.push(func);
};
onMounted(() => {
  // @ts-ignore
  emitter.on("form-item-created", callback);
});
onUnmounted(() => {
  // @ts-ignore
  emitter.off("form-item-created", callback);
  funcArr = [];
});
</script>

