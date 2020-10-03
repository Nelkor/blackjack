<template>
  <canvas
    class="overlay"
    ref="canvas"
  />
</template>

<script>
import { mapState } from 'vuex'
import { init } from '../helpers/canvas'
import { onHandOfPlayerChanged, onHandOfDealerChanged } from '../helpers/state'

export default {
  name: 'GameCanvas',
  computed: {
    ...mapState('engine', ['handOfDealer', 'handOfPlayer']),
  },
  watch: {
    handOfDealer(cards) {
      onHandOfDealerChanged(cards)
    },
    handOfPlayer(cards) {
      onHandOfPlayerChanged(cards)
    },
  },
  mounted() {
    init(this.$refs.canvas)
  },
}
</script>
