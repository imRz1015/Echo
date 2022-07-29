<!--
 * @Date: 2022-03-25 09:40:40
 * @Description: 
-->
<template>
  <Button color="#03A9F4">组件库从我开始</Button>
</template>

<script>
import Button from '../Button'

export default {
  name: 'ModifyColor',
  components: {
    [Button.name]: Button,
  },
}
</script>
