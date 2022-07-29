<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

interface ButtonConfig {
  size: 'large' | 'normal' | 'mini'
  type: 'primary' | 'success' | 'error' | 'warning'
  ghost: boolean
  color: string
  loading: boolean
  onClick?: (event: Event) => void
}

const props = withDefaults(defineProps<ButtonConfig>(), {
  size: 'large',
  type: 'primary',
  ghost: false,
  color: '#009688',
  loading: false,
})
const handleClick = (e: Event) => props.onClick?.(e)
</script>

<script lang="ts">
export default {
  name: 'Button',
}
</script>

<template>
  <button
    class="basic-button"
    :style="{ background: props.color }"
    :loading="loading"
    :size="props.size"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style lang="less">
@import './button';
</style>
