import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('AppComponent', () => {
  it('Render App component', () => {
    render(<App />)
    expect(screen.getByText('to')).toBeInTheDocument()
  })
})
