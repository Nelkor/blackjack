import { RELATIONS } from '@/constants'

export const state = {
  width: null,
  height: null,
  cardWidth: null,
  cardHeight: null,
  xCenter: null,
  cardsOfDealer: [],
  cardsOfPlayer: [],
}

export const setGeometry = (width, height) => {
  state.width = width
  state.height = height
  state.cardWidth = height * .15 + width * .02
  state.cardHeight = state.cardWidth * 1.4
  state.xCenter = width / 2
}

const randomizeAngle = divider => (.5 - Math.random()) * Math.PI / divider

const createDrawableCard = (card, origin, purpose) => ({
  ...card,
  origin,
  purpose,
  updatedAt: Date.now(),
})

const purposeRelation = key => ({
  cardsOfDealer: RELATIONS.DEALER,
  cardsOfPlayer: RELATIONS.PLAYER,
})[key]

const createChangeHandler = key => cards => {
  const now = Date.now()

  state[key] = state[key].filter(c => c.purpose.relation != RELATIONS.REST)

  if (!cards.length) {
    state[key].forEach(card => {
      card.origin = card.purpose
      card.purpose = { relation: RELATIONS.REST }
      card.updatedAt = now
    })

    return
  }

  const newCards = cards.slice(state[key].length - cards.length)
  const indexOffset = cards.length > 3 ? Math.ceil(cards.length / 2) - 1 : 1

  state[key].forEach((card, index) => {
    if (card.purpose.index == index - indexOffset) {
      return
    }

    card.origin = card.purpose
    card.updatedAt = now

    card.purpose = {
      ...card.purpose,
      index: index - indexOffset,
      angle: randomizeAngle(32),
    }
  })

  newCards.forEach((card, index) => {
    const purposeIndex = index - indexOffset + state[key].length

    const origin = {
      relation: RELATIONS.SHOE,
      angle: randomizeAngle(.5),
    }

    const purpose = {
      relation: purposeRelation(key),
      index: purposeIndex,
      angle: randomizeAngle(32),
    }

    const drawableCard = createDrawableCard(card, origin, purpose)

    state[key].push(drawableCard)
  })
}

export const onHandOfDealerChanged = createChangeHandler('cardsOfDealer')
export const onHandOfPlayerChanged = createChangeHandler('cardsOfPlayer')
