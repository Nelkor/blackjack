import { SUITS } from '@/constants'
import { state } from './state'

const suitContent = suit => {
  const color = suit == SUITS.DIAMONDS || suit == SUITS.HEARTS
    ? '#c4302b'
    : '#333'

  const symbol = {
    [SUITS.HEARTS]: '♥',
    [SUITS.DIAMONDS]: '♦',
    [SUITS.SPADES]: '♠',
    [SUITS.CLUBS]: '♣',
  }[suit]

  return { color, symbol }
}

const formatValue = value => [
  'A',
  2, 3, 4, 5, 6, 7, 8, 9, 10,
  'J', 'Q', 'K',
][value - 1]

const frame = (ctx, x, y, width, height, padding) => {
  ctx.fillStyle = '#ddd'
  ctx.strokeStyle = '#777'
  ctx.lineWidth = 2
  ctx.beginPath()

  for (let i = 0; i < 4; i++) {
    ctx.arc(
      x + (Math.abs(1.5 - i) < 1 ? padding : width - padding),
      y + (i < 2 ? height - padding : padding),
      padding,
      i / 2 * Math.PI,
      (i / 2 + .5) * Math.PI,
    )
  }

  ctx.closePath()
  ctx.fill()
  ctx.stroke()
}

const fill = (ctx, x, y, width, height, padding, center, suit, value) => {
  const valueMultiplier = value == 10 ? .3 : .4
  const { color, symbol } = suitContent(suit)

  ctx.fillStyle = color
  ctx.textBaseline = 'top'
  ctx.textAlign = 'left'
  ctx.font = width * valueMultiplier + 'px "arial black"'
  ctx.fillText(value, x + padding, y + padding)

  ctx.textAlign = 'right'
  ctx.font = width * .5 + 'px "arial black"'
  ctx.fillText(symbol, x + width - padding, y + padding * .3)

  ctx.textBaseline = 'bottom'
  ctx.textAlign = 'center'
  ctx.font = width * 1.2 + 'px "arial black"'
  ctx.fillText(symbol, x + center, y + height * 1.1)
}

const flare = (ctx, x, y, width, padding) => {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.28)'
  ctx.beginPath()
  ctx.arc(x + width - padding, y + padding, padding, Math.PI * -.5, 0)
  ctx.arc(x + width, y, width - padding, Math.PI / 2, Math.PI)
  ctx.fill()
}

export const drawCard = (ctx, { x, y }, card, angle) => {
  const value = formatValue(card.value)
  const { cardWidth: width, cardHeight: height } = state
  const padding = width * .1
  const center = width * .5

  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(angle)

  x = -width / 2
  y = -height / 2

  frame(ctx, x, y, width, height, padding)
  fill(ctx, x, y, width, height, padding, center, card.suit, value)
  flare(ctx, x, y, width, padding)

  ctx.restore()
}
