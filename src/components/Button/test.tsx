import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render a medium size button by default', () => {
    const { container } = renderWithTheme(<Button>Test Button</Button>)
    expect(screen.getByRole('button', { name: /Test Button/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a small size button when passed', () => {
    renderWithTheme(<Button size="small">Test Button</Button>)
    expect(screen.getByRole('button', { name: /Test Button/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render a large size button when passed', () => {
    renderWithTheme(<Button size="large">Test Button</Button>)
    expect(screen.getByRole('button', { name: /Test Button/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a full width button when passed', () => {
    renderWithTheme(<Button fullWidth>Test Button</Button>)
    expect(screen.getByRole('button', { name: /Test Button/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a withIcon version button when passed', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Test Button</Button>
    )
    expect(screen.getByText(/Test Button/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
