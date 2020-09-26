<template>
  <div
    class="game-cover"
    v-show="covered"
    @click="startNewGame"
  >{{ text }}</div>
</template>

<script>
import { changeStage } from '@game/store/stage-machine'

export default {
  name: 'GameCover',
  computed: {
    stage() {
      return this.$store.state.game.stage
    },
    covered() {
      return [
        'readyToStart',
        'blackjack',
        'victory',
        'defeat',
        'draw',
      ].includes(this.stage)
    },
    text() {
      return {
        readyToStart: 'Начать игру',
        blackjack: 'Блэкджек!',
        victory: 'Победа!',
        defeat: 'Поражение',
        draw: 'Ничья',
      }[this.stage]
    },
  },
  methods: {
    startNewGame() {
      if (!this.covered) {
        return
      }

      changeStage('init')
    },
  },
}
</script>
