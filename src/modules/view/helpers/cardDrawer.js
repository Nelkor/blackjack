import { SUITS } from '@/constants'
import { state } from './state'
import { suitImage } from './suits'

const suitContent = suit => {
  const color = suit == SUITS.DIAMONDS || suit == SUITS.HEARTS
    ? '#c4302b'
    : '#333'

  return { color, image: suitImage(suit) }
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
  const { color, image } = suitContent(suit)

  ctx.fillStyle = color
  ctx.font = `800 ${width * (value == 10 ? .3 : .4)}px sans-serif`
  ctx.fillText(value, x + padding, y + padding * (value == 10 ? 3.4 : 4))

  const side = padding * 3
  const bigSide = width - padding * 2

  ctx.drawImage(image, x + width - padding * 4, y + padding, side, side)
  ctx.drawImage(image, x + padding, y + padding * 4.8, bigSide, bigSide)
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
