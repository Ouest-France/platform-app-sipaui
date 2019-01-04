<template>
  <text-fields class="su-text-fields" :class="[typeClass]">
    <slot></slot>
  </text-fields>
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
Import du SASS text-fields Sipa UI
**/
@import text-fields.scss
</style>
