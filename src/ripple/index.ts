import Ripple from './Ripple.vue'
import type { App } from 'vue'

Ripple.install = function (app: App) {
  app.component(Ripple.name, Ripple)
}

export const _RippleComponent = Ripple

export default Ripple
