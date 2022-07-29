<template>
  <Button>组件库从我开始</Button>
</template>

<script>
import Button from '../Button'

export default {
  name: 'BasicUse',
  components: {
    [Button.name]: Button,
  },
}
</script>
