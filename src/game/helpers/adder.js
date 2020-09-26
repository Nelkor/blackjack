const addCard = (acc, { value }) => {
  const addition = value == 1
    ? (acc > 10 ? 1 : 11)
    : Math.min(value, 10)

  return acc + addition
}

export const sum = cards => cards.reduce(addCard, 0)
