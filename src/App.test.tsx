import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('AppComponent', () => {
  it('Render App component', () => {
    render(<App />)
    expect(screen.getByRole('heading')).toHaveTextContent('todo')
  })
  it('Render Empty component when no task', () => {
    render(<App />)
    expect(
      screen.getByText("You don't have any task registered yet")
    ).toBeInTheDocument()
  })
  it('Should add one task', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    const createTaskButton = screen.getByRole('button', { name: 'Create' })
    fireEvent.change(input, { target: { value: 'description 1' } })
    fireEvent.click(createTaskButton)
    expect(screen.getByText('description 1')).toBeInTheDocument()
  })
  it('Should remove one task', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    const createTaskButton = screen.getByRole('button', { name: 'Create' })
    fireEvent.change(input, { target: { value: 'description 1' } })
    fireEvent.click(createTaskButton)
    expect(screen.getByText('description 1')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'remove' }))
    expect(screen.queryByText('description 1')).not.toBeInTheDocument()
  })
  it('should check as done one task', () => {
    render(<App />)
    const input = screen.getByRole('textbox')
    const createTaskButton = screen.getByRole('button', { name: 'Create' })
    fireEvent.change(input, { target: { value: 'description 1' } })
    fireEvent.click(createTaskButton)
    fireEvent.change(input, { target: { value: 'description 2' } })
    fireEvent.click(createTaskButton)
    const checkbox2 = screen.getAllByRole('checkbox')[1]
    fireEvent.click(checkbox2)

    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked()
    expect(checkbox2).toBeChecked()
    expect(screen.getByText('description 1')).not.toHaveClass('done')
  })
})
