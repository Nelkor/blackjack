import { RELATIONS, STANDARD_DELAY } from '@/constants'
import { drawCard } from './cardDrawer'
import { state } from './state'

const createPointGetter = key => (card, calculations) => {
  const {
    shoePoint,
    restPoint,
    yOfDealer,
    yOfPlayer,
    indexWidth,
  } = calculations

  if (card[key].relation == RELATIONS.SHOE) {
    return shoePoint
  }

  if (card[key].relation == RELATIONS.REST) {
    return restPoint
  }

  return {
    x: state.xCenter + card[key].index * indexWidth,
    y: card[key].relation == RELATIONS.DEALER ? yOfDealer : yOfPlayer,
  }
}

const getOrigin = createPointGetter('origin')
const getPurpose = createPointGetter('purpose')

const drawHand = (ctx, cards, calculations) => cards.forEach(card => {
  const origin = getOrigin(card, calculations)
  const purpose = getPurpose(card, calculations)
  const timePassed = Date.now() - card.updatedAt
  const progress = Math.min(1, timePassed / STANDARD_DELAY)
  const xPath = purpose.x - origin.x
  const yPath = purpose.y - origin.y
  const rotation = card.purpose.angle - card.origin.angle
  const angle = card.origin.angle + rotation * progress

  const point = {
    x: origin.x + xPath * progress,
    y: origin.y + yPath * progress,
  }

  drawCard(ctx, point, card, angle)
})

export const startDraw = ctx => {
  const draw = () => {
    // Пересчитываем в каждом кадре, чтобы на лету подстраиваться под resize
    const calculations = {
      shoePoint: { x: state.cardWidth / 2, y: state.cardHeight / -2 },
      restPoint: { x: state.width, y: state.cardHeight / -2 },
      yOfDealer: state.height * .25,
      yOfPlayer: state.height * .75,
      indexWidth: state.cardWidth / 2.6,
    }

    requestAnimationFrame(draw)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    drawHand(ctx, state.cardsOfDealer, calculations)
    drawHand(ctx, state.cardsOfPlayer, calculations)
  }

  draw()
}
