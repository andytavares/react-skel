import React from 'react'
import { render, screen } from '@testing-library/react'
import HelloWorld from '.'

describe('Example component tests', () => {
  it('should have "Hello, World!" in the document.', () => {
    render(<HelloWorld />)
    expect(screen.getByTestId('exampleText').textContent).toBe('Hello, World!')
  })
})
