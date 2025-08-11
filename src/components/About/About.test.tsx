import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'
import { ABOUT_CONSTANTS } from './constants'

describe('About', () => {
  it('renders section title and content', () => {
    render(<About />)
    expect(screen.getByText(ABOUT_CONSTANTS.sectionTitle)).toBeInTheDocument()
    expect(screen.getByText(ABOUT_CONSTANTS.paragraphs[0])).toBeInTheDocument()
  })
})