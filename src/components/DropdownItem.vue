<script setup lang="ts">
const props = defineProps({
  disabaled: {
    type: Boolean,
    required: false
  }
})

</script>

<template>
  <li class="dropdown-option">
    <slot></slot>
  </li>
</template>

<style>
.dropdown-option .is-disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
