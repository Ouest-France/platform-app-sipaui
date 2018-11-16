<template>
  <checkboxes class="su-checkboxes" :class="[typeClass]">
    <slot></slot>
  </checkboxes>
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
Import du SASS checkboxes Sipa UI
**/
@import checkboxes.scss
</style>
