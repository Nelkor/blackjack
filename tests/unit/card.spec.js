import { createCard } from '@game/helpers/card'

describe('card', () => {
  test('createCard should be defined', () => {
    expect(createCard).toBeDefined()
  })

  test('invalid value should throw error', () => {
    expect(() => createCard(14, 1)).toThrow('Impossible card value: 14')
  })

  test('invalid suit should throw error', () => {
    expect(() => createCard(1, 10)).toThrow('Impossible card suit: 10')
  })
})
