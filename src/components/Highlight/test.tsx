import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Highlight from '.'
import * as S from './styles'

const props = {
  title: 'heading1',
  subtitle: 'heading2',
  buttonLabel: 'buy now',
  buttonLink: 'games/red-dead-redemption-2',
  backgroundImage: 'img/red-dead-img.jpg',
  floatImage: 'img/red-dead-float.png'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.subtitle })
    ).toBeInTheDocument()

    const button = screen.getByRole('link', { name: props.buttonLabel })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', 'games/red-dead-redemption-2')
  })

  it('should render a background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'img/red-dead-img.jpg'
    })
  })

  it('should render a float image', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      'img/red-dead-float.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left when passed', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
