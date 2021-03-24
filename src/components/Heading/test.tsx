import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Heading Test</Heading>)
    expect(screen.getByRole('heading', { name: /heading test/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black heading when passed', () => {
    renderWithTheme(<Heading color="black">Heading Test</Heading>)
    expect(screen.getByRole('heading', { name: /heading test/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a left border when passed', () => {
    renderWithTheme(<Heading lineLeft>Heading Test</Heading>)
    expect(screen.getByRole('heading', { name: /heading test/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })
  it('should render a bottom border when passed', () => {
    renderWithTheme(<Heading lineBottom>Heading Test</Heading>)
    expect(
      screen.getByRole('heading', { name: /heading test/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
})
