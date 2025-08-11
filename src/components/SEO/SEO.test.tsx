import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { HelmetProvider } from 'react-helmet-async'
import SEO from './SEO'

// Helper component to wrap SEO with HelmetProvider
const SEOWrapper = (props: Parameters<typeof SEO>[0]) => (
  <HelmetProvider>
    <SEO {...props} />
  </HelmetProvider>
)

describe('SEO', () => {
  it('renders without crashing', () => {
    render(<SEOWrapper />)
  })
})