import { createCard } from '@engine/helpers/card'
import { sum } from '@engine/helpers/adder'

describe('sum', () => {
  test('sum should be defined', () => {
    expect(sum).toBeDefined()
  })

  test('[] should be 0', () => {
    expect(sum([])).toBe(0)
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

  test('A + A + K should be 12', () => {
    const card1 = createCard(1, 3)
    const card2 = createCard(1, 1)
    const card3 = createCard(13, 2)

    expect(sum([card1, card2, card3])).toBe(12)
  })

  test('8 + A + A should be 20', () => {
    const card1 = createCard(8, 1)
    const card2 = createCard(1, 1)
    const card3 = createCard(1, 3)

    expect(sum([card1, card2, card3])).toBe(20)
  })

  test('8 + A + A + 9 should be 19', () => {
    const card1 = createCard(8, 1)
    const card2 = createCard(1, 1)
    const card3 = createCard(1, 3)
    const card4 = createCard(9, 2)

    expect(sum([card1, card2, card3, card4])).toBe(19)
  })
})
