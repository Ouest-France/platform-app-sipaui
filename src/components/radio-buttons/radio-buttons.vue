<template>
  <radio-buttons class="su-radio-buttons" :class="[typeClass]">
    <slot></slot>
  </radio-buttons>
</template>

<script>
export default {
  props: {
    typeClass: 'basic'
  }
};
</script>

<style>
/**
Import du SASS radio-buttons Sipa UI
**/
@import radio-buttons.scss
</style>
