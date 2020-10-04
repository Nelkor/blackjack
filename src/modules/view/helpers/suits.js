import { SUITS } from '@/constants'
import clubsSvg from '../assets/clubs.svg'
import diamondsSvg from '../assets/diamonds.svg'
import heartsSvg from '../assets/hearts.svg'
import spadesSvg from '../assets/spades.svg'

const clubs = new Image
const diamonds = new Image
const hearts = new Image
const spades = new Image

clubs.src = clubsSvg
diamonds.src = diamondsSvg
hearts.src = heartsSvg
spades.src = spadesSvg

export const suitImage = suit => ({
  [SUITS.HEARTS]: hearts,
  [SUITS.DIAMONDS]: diamonds,
  [SUITS.SPADES]: spades,
  [SUITS.CLUBS]: clubs,
})[suit]
