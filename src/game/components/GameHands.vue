<template>
  <div class="overlay game-hands">
    <div class="wrapper">
      <div :class="['hiding hand', { shown: valueOfDealersHand }]">
        <span>Дилер</span>

        <div class="hand-value">{{ valueOfDealersHand }}</div>
      </div>

      <div :class="['hiding hand', { shown: valueOfPlayersHand }]">
        <div class="hand-value">{{ valueOfPlayersHand }}</div>

        <span>Игрок</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const getters = [
  'valueOfPlayersHand',
  'valueOfDealersHand',
]

export default {
  name: 'GameHands',
  computed: {
    ...mapGetters('game', getters),
  },
}
</script>
