<template>
  <div :class="['hiding overlay player-decision', { shown: interactive }]">
    <div class="wrapper">
      <h2>Ваше решение</h2>

      <div class="controls">
        <button
          class="btn btn-hit"
          @click="hit"
        >Ещё</button>

        <button
          class="btn btn-stand"
          @click="stand"
        >Всё</button>
      </div>
    </div>
  </div>
</template>

<script>
import { check } from '@engine/store/methods'
import { changeStage } from '@engine/store/stage-machine'

export default {
  name: 'PlayerDecision',
  computed: {
    interactive() {
      return this.$store.state.engine.stage == 'waitForPlayer'
    },
  },
  methods: {
    hit() {
      if (!this.interactive) {
        return
      }

      this.$store.commit('engine/giveToPlayer')

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
