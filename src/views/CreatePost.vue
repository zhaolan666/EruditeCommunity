<script setup lang="ts">
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput from "../components/ValidateInput.vue";
import { RulesProp } from "../typing";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import type { GlobalDataProps, PostProps } from "../store";

const titleVal = ref("");
const router = useRouter();
const store = useStore<GlobalDataProps>();
const titleRules: RulesProp = [
  { type: "required", message: "文章标题不能为空" },
];
const contentVal = ref("");
const contentRules: RulesProp = [
  { type: "required", message: "文章详情不能为空" },
];
const onFormSubmit = (result: boolean) => {
  if (result) {
    const { columnId } = store.state.user;
    if (columnId) {
      const newPost: PostProps = {
        id: new Date().getTime(),
        title: titleVal.value,
        content: contentVal.value,
        columnId,
        createAt: new Date().toLocaleString(),
      };
      store.commit("createPost", newPost);
      router.push({
        name: "column",
        params: {
          id: columnId,
        },
      });
    }
  }
};
</script>

<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题： </label>
        <validate-input
          rows="10"
          :rules="titleRules"
          v-model="titleVal"
          placeholder="请输入文章标题"
          type="text"
        >
        </validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情： </label>
        <validate-input
          :rules="contentRules"
          v-model="contentVal"
          placeholder="请输入文章详情"
          type="textarea"
          tag="textarea"
        >
        </validate-input>
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">发表文章</button>
      </template>
    </validate-form>
  </div>
</template>
