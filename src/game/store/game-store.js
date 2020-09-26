import { wait, check, finishStage, isBlackjack } from '@game/store/methods'
import { FIRST_DELAY, LIMIT_OF_DEALER } from '@game/helpers/constants'
import { createStandard52Deck } from '@game/helpers/deck'
import { changeStage } from '@game/store/stage-machine'
import { shuffle } from '@game/helpers/shuffler'
import { sum } from '@game/helpers/adder'

export default {
  namespaced: true,
  state: {
    stage: 'readyToStart',
    history: [],
    handOfPlayer: [],
    handOfDealer: [],
    shoe: [],
    rest: [
      ...createStandard52Deck(),
      ...createStandard52Deck(),
    ],
  },
  mutations: {
    changeStage: (state, value) => state.stage = value,
    dropHands(state) {
      state.rest = [...state.handOfPlayer, ...state.handOfDealer, ...state.rest]
      state.handOfPlayer = []
      state.handOfDealer = []
    },
    reloadShoe(state) {
      state.shoe = [...shuffle(state.rest), ...state.shoe]
      state.rest = []
    },
    giveToPlayer: state => state.handOfPlayer.push(state.shoe.pop()),
    giveToDealer: state => state.handOfDealer.push(state.shoe.pop()),
    saveToHistory: state => state.history.push(state.stage),
  },
  actions: {
    async start(ctx) {
      ctx.commit('dropHands')

      const restLength = ctx.state.rest.length
      const shoeLength = ctx.state.shoe.length

      if (restLength > shoeLength) {
        ctx.commit('reloadShoe')
      }

      await wait(FIRST_DELAY)
      ctx.commit('giveToPlayer')

      await wait()
      ctx.commit('giveToDealer')

      await wait()
      ctx.commit('giveToPlayer')

      check()
    },
    async finish(ctx) {
      if (isBlackjack()) {
        changeStage('blackjack')

        return
      }

      if (ctx.getters.valueOfDealersHand < LIMIT_OF_DEALER) {
        await wait()

        ctx.commit('giveToDealer')
        ctx.dispatch('finish')

        return
      }

      changeStage(finishStage())
    },
  },
  getters: {
    valueOfPlayersHand: state => sum(state.handOfPlayer),
    valueOfDealersHand: state => sum(state.handOfDealer),
  },
}
