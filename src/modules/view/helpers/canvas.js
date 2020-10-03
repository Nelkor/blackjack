import { setGeometry } from './state'
import { startDraw } from '@view/helpers/drawer'

export const init = canvas => {
  const resize = () => {
    const { clientWidth: width, clientHeight: height } = canvas

    canvas.width = width
    canvas.height = height

    setGeometry(width, height)
  }

  resize()
  window.addEventListener('resize', resize)

  startDraw(canvas.getContext('2d'))
}
