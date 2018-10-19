<template>
  <component-name class="su-component-name" :class="[typeClass]">
    <slot></slot>
  </component-name>
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
Import du SASS component-name Sipa UI
**/
@import component-name.scss
</style>
