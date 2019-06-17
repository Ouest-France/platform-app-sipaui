<script>
import Vue from 'vue';
export default Vue.extend({
  props: {
    tag: {
      type: String,
      required: false,
      default: 'button',
    },
    title: {
      type: String,
      required: false,
      default: undefined,
    },
    href: {
      type: String,
      required: false,
      default: undefined,
    },
    primary: {
      type: Boolean,
      required: false,
      default: false,
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false,
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    classnames() {
      return {
        'su-button': true,
        'su-primary': this.primary,
        'su-secondary': this.secondary,
        'su-small': this.small,
        'su-disabled': this.disabled,
      };
    },
  },
  render(createElement) {
    const children = this.$slots.default || this.title;
    const options = {
      on: this.$listeners,
      class: this.classnames,
      attrs: {
        href: this.href,
        title: this.title,
        disabled: this.disabled,
      }
    };
    return createElement(this.tag, options, children);
  }
});
</script>

<style lang="scss">
@import "../../../core/scss/variables";
@import "./main";
</style>
