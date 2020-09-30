import { PURPOSE, STANDARD_DELAY } from '../helpers/constants'
import { changeStage } from './stage-machine'
import store from '@/store'

export const wait = (delay = STANDARD_DELAY) =>
  new Promise(resolve => setTimeout(resolve, delay))

export const check = () => {
  const value = store.getters['engine/valueOfPlayersHand']

  const stage = value > PURPOSE
    ? 'defeat'
    : (value == PURPOSE ? 'finish' : 'waitForPlayer')

  changeStage(stage)
}

export const isBlackjack = () => {
  const handOfPlayer = {
    count: store.state.engine.handOfPlayer.length,
    value: store.getters['engine/valueOfPlayersHand'],
  }

  const handOfDealer = {
    count: store.state.engine.handOfDealer.length,
    value: store.getters['engine/valueOfDealersHand'],
  }

  // Ниже много магических чисел. :(
  // Логика определения блэкджека довольно специфичная,
  // возможно есть способ написать это почище.

  const blackjackOfPlayer = handOfPlayer.count == 2
    && handOfPlayer.value == PURPOSE

  const dealerCanBlackjack = handOfDealer.count == 1
    && handOfDealer.value > 9

  const blackjackOfDealer = handOfDealer.count == 2
    && handOfDealer.value == PURPOSE

  return blackjackOfPlayer && !blackjackOfDealer && !dealerCanBlackjack
}

// Вариант, когда у игрока перебор, не относится к finish,
// а является досрочным поражением с этапа waitForPlayer
export const finishStage = () => {
  const valueOfPlayer = store.getters['engine/valueOfPlayersHand']
  const valueOfDealer = store.getters['engine/valueOfDealersHand']

  return valueOfDealer > PURPOSE || valueOfPlayer > valueOfDealer
    ? 'victory'
    : (valueOfDealer > valueOfPlayer ? 'defeat' : 'draw')
}
