<template>
  <div class="game-view">
    <GameCanvas/>
    <GameCover/>
    <GameUI/>
  </div>
</template>

<script>
import GameCanvas from '@game/components/GameCanvas'
import GameCover from '@game/components/GameCover'
import GameUI from '@game/components/GameUI'

export default {
  name: 'GameView',
  components: {
    GameCanvas,
    GameCover,
    GameUI,
  },
}
</script>
