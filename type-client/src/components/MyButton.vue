<template>
  <button
    class="el-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
export default defineComponent({
  name: 'ElButton',
  // inject: {
  //   elForm: {
  //     default: ''
  //   },
  //   elFormItem: {
  //     default: ''
  //   }
  // },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  setup (props, context) {
    const buttonSize = computed(
      () => {
        return props.size
      }
    )
    const buttonDisabled = computed(
      () => {
        return props.disabled
      }
    )
    const handleClick = (evt: Event) => {
      context.emit('click', evt)
    }
    return {
      buttonSize, buttonDisabled, handleClick
    }
  }
  // computed: {
  //   _elFormItemSize() {
  //     return (this.elFormItem || {}).elFormItemSize
  //   },
  //   buttonSize() {
  //     return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
  //   },
  //   buttonDisabled() {
  //     return this.disabled || (this.elForm || {}).disabled
  //   }
  // }
})
</script>
