import example from '../example'
import Ripple from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test ripple example', () => {
  const wrapper = mount(example)
  expect(wrapper.html()).toMatchSnapshot()
})

test('test ripple plugin', () => {
  const app = createApp({}).use(Ripple)
  expect(app.component(Ripple.name)).toBeTruthy()
})
