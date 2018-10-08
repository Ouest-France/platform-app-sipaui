<template>
  <button class="su-old-button" :class="[typeClass]">
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
/**
Import du SASS button Sipa UI
**/
</style>
