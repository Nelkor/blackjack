import { createCard } from '@engine/helpers/card'
import { sum } from '@engine/helpers/adder'

describe('sum', () => {
  test('sum should be defined', () => {
    expect(sum).toBeDefined()
  })

  test('A + A should be 12', () => {
    const card1 = createCard(1, 1)
    const card2 = createCard(1, 2)

    expect(sum([card1, card2])).toBe(12)
  })

  test('A + K should be 21', () => {
    const card1 = createCard(1, 1)
    const card2 = createCard(13, 2)

    expect(sum([card1, card2])).toBe(21)
  })
})
