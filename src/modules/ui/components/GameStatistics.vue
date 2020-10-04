<template>
  <div class="overlay game-statistics">
    <div class="item">Сыграно игр: {{ history.length }}</div>
    <div class="item">Побед: {{ wins }}</div>
    <div class="item">Доля побед: {{ winRate }}%</div>
    <div class="item">Блэкджеков: {{ blackjacks }}</div>
    <div class="item">Ничьих: {{ draws }}</div>
  </div>
</template>

<script>
export default {
  name: 'GameStatistics',
  computed: {
    history() {
      return this.$store.state.engine.history
    },
    blackjacks() {
      return this.countOf('blackjack')
    },
    wins() {
      return this.countOf('victory') + this.blackjacks
    },
    winRate() {
      return this.history.length
        ? Math.round(this.wins / this.history.length * 100)
        : 0
    },
    draws() {
      return this.countOf('draw')
    },
  },
  methods: {
    countOf(result) {
      return this.history.filter(game => game == result).length
    },
  },
}
</script>

<style lang="scss" scoped>
.game-statistics {
  color: white;
  font-weight: bold;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 16px;
}

.item {
  margin-bottom: 4px;
}
</style>
