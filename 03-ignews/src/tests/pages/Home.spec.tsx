import { render, screen } from '@testing-library/react'
import { stripe } from '../../services/stripe'
import { mocked } from 'ts-jest/utils'
import Home, { getStaticProps } from '../../pages'

jest.mock('next/router')
jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

jest.mock('../../services/stripe')

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home product={{ price_id: 'fake-priceid', amount: '$9.90'}} />)

    expect(screen.getByText('for $9.90 month')).toBeInTheDocument()
  })

  it('loads initial data', async () => {
    const retrieveStripePricesMocked = mocked(stripe.prices.retrieve)

    retrieveStripePricesMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000
    } as any)

    const response = await getStaticProps({})

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00'
          }
        }
      })
    )
  })
})