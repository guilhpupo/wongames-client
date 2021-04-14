import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(/235,00/i)
    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(price).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 150,00" />)

    expect(screen.getByText(/235,00/i)).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText(/150,00/i)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a full favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav methoed when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard {...props} onFav={onFav} />)
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
