import { validateCard } from '@game/helpers/card-validator'

export const createCard = (value, suit) => {
  validateCard(value, suit)

  return { value, suit }
}
