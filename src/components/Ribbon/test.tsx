import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toBeInTheDocument()
  })

  it('should render with primary color by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyleRule(
      'background-color',
      '#F231A5'
    )
  })
  it('should render with secondary color when passed', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyleRule(
      'background-color',
      '#3CD3C1'
    )
  })
  it('should render with normal size by default', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '3.6rem',
      'font-size': '1.4rem'
    })
  })
  it('should render with small size when passed', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)
    expect(screen.getByText(/best seller/i)).toHaveStyle({
      height: '2.6rem',
      'font-size': '1.2rem'
    })
  })
})
