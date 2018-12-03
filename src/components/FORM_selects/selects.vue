<template>
  <selects class="su-selects" :class="[typeClass]">
    <slot></slot>
  </selects>
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
Import du SASS selects Sipa UI
**/
@import selects.scss
</style>
