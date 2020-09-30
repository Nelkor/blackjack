<template>
  <div class="app">
    <GameCanvas/>
    <GameHands/>
    <PlayerDecision/>
    <GameCover/>
  </div>
</template>

<script>
import GameCanvas from '@view/components/GameCanvas'
import GameHands from '@ui/components/GameHands'
import PlayerDecision from '@ui/components/PlayerDecision'
import GameCover from '@ui/components/GameCover'

export default {
  name: 'App',
  components: {
    GameCanvas,
    GameHands,
    PlayerDecision,
    GameCover,
  },
}
</script>
