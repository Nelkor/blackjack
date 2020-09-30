import store from '@/store'

const transitions = {
  readyToStart: ['init'],
  init: ['finish', 'waitForPlayer'],
  waitForPlayer: ['finish', 'defeat', 'waitForPlayer'],
  finish: ['blackjack', 'victory', 'defeat', 'draw', 'finish'],
  blackjack: ['init'],
  victory: ['init'],
  defeat: ['init'],
  draw: ['init'],
}

export const changeStage = nextStage => {
  const stage = store.state.engine.stage
  const availableTransitions = transitions[stage]

  if (!availableTransitions.includes(nextStage)) {
    throw new Error(`Prohibited stage change: ${nextStage} from ${stage}`)
  }

  store.commit('engine/changeStage', nextStage)

  switch (nextStage) {
  case 'init':
    store.dispatch('engine/start')
    break
  case 'finish':
    store.dispatch('engine/finish')
    break
  case 'blackjack':
  case 'victory':
  case 'defeat':
  case 'draw':
    store.commit('engine/saveToHistory')
    break
  }
}
