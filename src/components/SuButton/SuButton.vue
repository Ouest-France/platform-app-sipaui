<template>
  <button class="su-button" :class="[typeClass]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    typeClass: 'basic'
  }
};
</script>

<style>
.button {
  padding: 5px;
  cursor: pointer;
  font-size: 15px;
  margin: 1px;
  border: 2px solid black;
  border-radius: 3px;
  color: black;
  background: white;
}
.button_alert {
  color: white;
  background: red;
}
.button_success {
  color: white;
  background: green;
}
</style>
