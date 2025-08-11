import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './Header'
import { HEADER_CONSTANTS } from './constants'

describe('Header', () => {
  it('renders name and title', () => {
    render(<Header />)
    expect(screen.getByText(HEADER_CONSTANTS.name)).toBeInTheDocument()
    expect(screen.getByText(HEADER_CONSTANTS.title)).toBeInTheDocument()
  })
})