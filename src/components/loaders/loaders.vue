<template>
  <helpers class="su-helpers" :class="[typeClass]">
    <slot></slot>
  </helpers>
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
Import du SASS helpers Sipa UI
**/
@import helpers.scss
</style>
