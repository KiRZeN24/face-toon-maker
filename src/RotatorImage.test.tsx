import { render, screen } from '@testing-library/react'
import RotatorImage from './RotatorImage'

describe('RotatorImage', () => {
  it('renders a <figure>', () => {
    render(<RotatorImage />)
    expect(screen.getByRole('figure')).toBeInTheDocument()
  })
})
