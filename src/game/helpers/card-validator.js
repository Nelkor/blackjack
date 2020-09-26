import { SUITS } from '@game/helpers/constants'

export const validateCard = (value, suit) => {
  if (value < 1 || value > 13) {
    throw new Error(`Impossible card value: ${value}`)
  }

  if (!Object.values(SUITS).includes(suit)) {
    throw new Error(`Impossible card suit: ${suit}`)
  }
}
