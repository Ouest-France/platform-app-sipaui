<template>
  <button
    class="su-button"
    :class="classnames"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    fullwidth: {
      type: Boolean,
      required: false,
      default: false,
    },
    wide: {
      type: Boolean,
      required: false,
      default: false,
    },
    mobile: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  computed: {
    classnames() {
      return {
        'su-disabled': this.disabled,
        'su-small': this.small,
        'su-fullwidth': this.wide && !this.mobile,
        'su-fullwidth-mobile': this.wide && this.mobile,
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../core/scss/variables";
@import "./main";
</style>
