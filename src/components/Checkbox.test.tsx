import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should render', () => {
    const wrapper = render(<Checkbox checked={false} />)
    expect(wrapper.container).toMatchSnapshot()
  })
})
