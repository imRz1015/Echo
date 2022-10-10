<template>
  <app-type></app-type>
  <e-ripple />
</template>

<script>
import Ripple from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'RippleExample',
  components: {
    [Ripple.name]: Ripple,
    AppType,
  },
  setup() {
    watchLang(use)

    return {
      pack,
    }
  },
}
</script>
