<template>
  <icons class="su-icons" :class="[typeClass]">
    <slot></slot>
  </icons>
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
Import du SASS icons Sipa UI
**/
@import icons.scss
</style>
