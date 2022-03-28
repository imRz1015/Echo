import type { App } from 'vue'
import Color from './Color.vue'

Color.install = function (app: App) {
  app.component(Color.name, Color)
}

export const _ColorComponent = Color

export default Color
