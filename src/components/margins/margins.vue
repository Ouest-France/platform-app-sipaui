<template>
  <margins class="su-margins" :class="[typeClass]">
    <slot></slot>
  </margins>
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
Import du SASS margins Sipa UI
**/
@import margins.scss
</style>
