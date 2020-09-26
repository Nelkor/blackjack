<template>
  <div class="game-ui">
    <div class="statistics">
      <p>Сыграно игр: {{ history.length }}</p>
    </div>

    <div class="hands">
      <p>Рука игрока: {{ valueOfPlayersHand }}</p>
      <p>Рука дилера: {{ valueOfDealersHand }}</p>
    </div>

    <div
      class="controls"
      v-show="interactive"
    >
      <button
        @click="hit"
      >Ещё</button>

      <button
        @click="stand"
      >Достаточно</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { check } from '@game/store/methods'
import { changeStage } from '@game/store/stage-machine'

const getters = [
  'valueOfPlayersHand',
  'valueOfDealersHand',
]

export default {
  name: 'GameUI',
  computed: {
    ...mapGetters('game', getters),

    interactive() {
      return this.$store.state.game.stage == 'waitForPlayer'
    },
    history() {
      return this.$store.state.game.history
    },
  },
  methods: {
    hit() {
      if (!this.interactive) {
        return
      }

      this.$store.commit('game/giveToPlayer')

      check()
    },
    stand() {
      if (!this.interactive) {
        return
      }

      changeStage('finish')
    },
  },
}
</script>
