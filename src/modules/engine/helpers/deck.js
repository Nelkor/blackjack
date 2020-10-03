import { SUITS } from '@/constants'
import { createCard } from './card'

const fullSetLength = 13

const createSuitFullSet = suit => Array
  .from({ length: fullSetLength })
  .map((_, i) => createCard(i + 1, suit))

export const createStandard52Deck = () => Object.values(SUITS)
  .map(createSuitFullSet)
  .flat()
