<script setup lang="ts">
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import type { RulesProp } from "../typing";
import ValidateForm from "../components/ValidateForm.vue";
import ValidateInput from "../components/ValidateInput.vue";
const store = useStore();
const router = useRouter();
const emailRules: RulesProp = [
  { type: "required", message: "电子邮箱地址不能为空" },
  { type: "email", message: "请输入正确的电子邮箱格式" },
];
const passwordRules: RulesProp = [
  { type: "required", message: "密码不能为空" },
  { type: "password", message: "请输入正确的密码格式" },
];

const inputTypes = reactive({
  password: "password",
  email: "email",
  default: "text",
});

const inputRef = ref<any>();
const emailVal = ref("123");
const emailRef = reactive({
  val: "",
  error: false,
  message: "",
});

const passwordVal = ref("");
const passwordRef = reactive({
  val: "",
  error: false,
  message: "",
});

const emailReg =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordReg =
  /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;

const validateEmail = () => {
  if (emailRef.val.trim() === "") {
    emailRef.error = true;
    emailRef.message = "can not be empty";
  } else if (!emailReg.test(emailRef.val)) {
    emailRef.error = true;
    emailRef.message = "should be valid ";
  }
};

const validPassword = () => {
  if (passwordRef.val.trim() === "") {
    passwordRef.error = true;
    passwordRef.message = "can not be empty";
  } else if (!passwordReg.test(passwordRef.val)) {
    passwordRef.error = true;
    passwordRef.message = "should be valid";
  }
};
const onFormSubmit = (result: boolean) => {
  if (result) {
    router.push("/");
    store.commit("login");
  }
};
</script>

<template>
  <div>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          type="text"
          :rules="emailRules"
          placeholder="请输入邮箱地址"
          v-model:emailVal="emailVal"
          ref="inputRef"
        />
        {{ emailVal }}
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          :rules="passwordRules"
          placeholder="请输入密码"
          v-model="passwordVal"
        />
      </div>
      <template #submit>
        <span class="btn btn-danger">submit</span>
      </template>
    </validate-form>
  </div>
</template>
