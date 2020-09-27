<template>
  <div class="game-view">
    <GameCanvas/>
    <GameHands/>
    <PlayerDecision/>
    <GameCover/>
  </div>
</template>

<script>
import PlayerDecision from '@game/components/PlayerDecision'
import GameCanvas from '@game/components/GameCanvas'
import GameCover from '@game/components/GameCover'
import GameHands from '@game/components/GameHands'

export default {
  name: 'GameView',
  components: {
    PlayerDecision,
    GameCanvas,
    GameCover,
    GameHands,
  },
}
</script>
