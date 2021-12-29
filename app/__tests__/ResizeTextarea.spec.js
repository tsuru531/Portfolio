import { shallowMount } from '@vue/test-utils'
import ResizeTextarea from '@/components/atoms/ResizeTextarea'

describe('ResizeTextarea.vue', () => {
  const propsData = {
    text: ''
  }
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(ResizeTextarea, { propsData })
  })
  it('Receive props', () => {
    Object.keys(propsData).forEach(key => {
      expect(wrapper.props()[key]).toBe(propsData[key])
    })
  })
  it('Emit when changing textarea', async () => {
    const textarea = wrapper.find('textarea')
    await textarea.setValue('text')
    expect(wrapper.emitted().change).toBeTruthy()
  })
  it('Automatically change the height', async () => {
    const textarea = wrapper.find('textarea')
    expect(textarea.clientHeight).toBe(textarea.scrollHeight)
    await textarea.setValue('\n\n\n')
    expect(textarea.clientHeight).toBe(textarea.scrollHeight)
  })
})