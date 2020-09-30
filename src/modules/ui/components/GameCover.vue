<template>
  <div
    :class="['hiding overlay game-cover', { shown: cover } ]"
    @click="startNewGame"
  >
    <component :is="cover"/>
  </div>
</template>

<script>
import { changeStage } from '@engine/store/stage-machine'

import CoverStart from './CoverStart'
import CoverBlackjack from './CoverBlackjack'
import CoverVictory from './CoverVictory'
import CoverDefeat from './CoverDefeat'
import CoverDraw from './CoverDraw'

export default {
  name: 'GameCover',
  components: {
    CoverStart,
    CoverBlackjack,
    CoverVictory,
    CoverDefeat,
    CoverDraw,
  },
  computed: {
    stage() {
      return this.$store.state.engine.stage
    },
    cover() {
      return {
        readyToStart: 'cover-start',
        blackjack: 'cover-blackjack',
        victory: 'cover-victory',
        defeat: 'cover-defeat',
        draw: 'cover-draw',
      }[this.stage]
    },
  },
  methods: {
    startNewGame() {
      if (!this.cover) {
        return
      }

      changeStage('init')
    },
  },
}
</script>
