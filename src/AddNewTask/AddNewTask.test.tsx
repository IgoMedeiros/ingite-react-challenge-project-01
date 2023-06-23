import { fireEvent, render, screen } from '@testing-library/react'
import { describe, vi, expect, it } from 'vitest'
import { AddNewTask } from './AddNewTask'

describe('AddNewTask component', () => {
  it('should not let call add task button without description', () => {
    const addTask = vi.fn()
    render(<AddNewTask addTask={addTask} />)
    fireEvent.click(screen.getByRole('button'))
    expect(addTask).toHaveBeenCalledTimes(0)
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
  it('not let add task without description', () => {
    const addTask = vi.fn()
    render(<AddNewTask addTask={addTask} />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
