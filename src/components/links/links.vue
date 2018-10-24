<template>
  <links class="su-links" :class="[typeClass]">
    <slot></slot>
  </links>
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
Import du SASS links Sipa UI
**/
@import links.scss
</style>
