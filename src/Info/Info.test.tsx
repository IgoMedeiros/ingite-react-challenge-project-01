import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Info, InfoProps } from './Info'

describe('Info Component', () => {
  it('should render 5 opened tasks and 2 done', () => {
    const tasksSummary: InfoProps = {
      openTasks: 5,
      closeTasks: 2,
    }
    render(<Info {...tasksSummary} />)
    expect(screen.getByTestId('tasks-opened')).toHaveTextContent(
      'Tasks opened 5'
    )
    expect(screen.getByTestId('tasks-closed')).toHaveTextContent(
      'Tasks done 2 of 5'
    )
  })
})
