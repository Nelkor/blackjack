<template>
  <div
    :class="['hiding overlay game-cover', { shown: cover } ]"
    @click="startNewGame"
  >
    <component :is="cover"/>
  </div>
</template>

<script>
import { changeStage } from '@game/store/stage-machine'

import CoverStart from '@game/components/CoverStart'
import CoverBlackjack from '@game/components/CoverBlackjack'
import CoverVictory from '@game/components/CoverVictory'
import CoverDefeat from '@game/components/CoverDefeat'
import CoverDraw from '@game/components/CoverDraw'

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
      return this.$store.state.game.stage
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
