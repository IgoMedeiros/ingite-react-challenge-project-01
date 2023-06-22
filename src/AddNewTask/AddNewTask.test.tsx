import { fireEvent, render, screen } from '@testing-library/react'
import { describe, vi, expect, it } from 'vitest'
import { AddNewTask } from './AddNewTask'

describe('AddNewTask component', () => {
  it('call on addTask button', () => {
    const addTask = vi.fn()
    render(<AddNewTask addTask={addTask} />)
    fireEvent.click(screen.getByRole('button'))
    expect(addTask).toHaveBeenCalledTimes(1)
  })
  it('submit new task after submit', () => {
    const addTask = vi.fn()
    render(<AddNewTask addTask={addTask} />)
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'description' },
    })
    fireEvent.click(screen.getByRole('button'))
    expect(addTask).toHaveBeenCalledTimes(1)
  })
})
