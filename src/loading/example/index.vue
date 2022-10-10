<template>
  <app-type></app-type>
  <e-loading />
</template>

<script>
import Loading from '..'
import AppType from '@varlet/cli/site/mobile/components/AppType'
import { watchLang } from '@varlet/cli/site/utils'
import { use, pack } from './locale'

export default {
  name: 'LoadingExample',
  components: {
    [Loading.name]: Loading,
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
