import userEvent from '@testing-library/user-event'
import { act, render, screen } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'
import { Checkbox } from './Checkbox'

describe.only('Checkbox', () => {
  it('should render', () => {
    const wrapper = render(<Checkbox checked={false} onChange={vi.fn()} />)
    expect(wrapper.container).toMatchSnapshot()
  })

  it('onChange has been called', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Checkbox checked={false} onChange={onChange} />)
    const checkbox = screen.getByRole('checkbox')
    await act(async () => {
      await user.click(checkbox)
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('checkbox looks like checked as true', async () => {
    render(<Checkbox checked={true} onChange={vi.fn()} />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })
})
