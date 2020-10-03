export const sum = cards => {
  const notAces = cards.filter(card => card.value != 1)
  const acesCount = cards.length - notAces.length
  const values = notAces.map(card => Math.min(10, card.value))
  const sumOfNotAces = values.reduce((acc, cur) => acc + cur, 0)
  const result = sumOfNotAces + acesCount

  return acesCount && result < 12 ? result + 10 : result
}
