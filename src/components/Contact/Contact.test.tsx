import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'
import { CONTACT_CONSTANTS } from './constants'

describe('Contact', () => {
  it('renders section title and contact info', () => {
    render(<Contact />)
    expect(screen.getByText(CONTACT_CONSTANTS.sectionTitle)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_CONSTANTS.heading)).toBeInTheDocument()
  })
})