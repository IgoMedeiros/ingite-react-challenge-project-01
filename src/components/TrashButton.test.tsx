import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, vi, expect } from 'vitest'
import { TrashButton } from './TrashButton'

describe('TrashButton component', () => {
  it('should call 1 time button event', () => {
    const onDelete = vi.fn()
    render(<TrashButton onDelete={onDelete} />)
    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'))
    expect(onDelete).toHaveBeenCalledTimes(2)
  })
})
