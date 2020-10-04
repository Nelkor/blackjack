<template>
  <div class="app">
    <GameCanvas/>
    <GameStatistics/>
    <GameHands/>
    <PlayerDecision/>
    <GameCover/>
  </div>
</template>

<script>
import GameCanvas from '@view/components/GameCanvas'
import GameStatistics from '@ui/components/GameStatistics'
import GameHands from '@ui/components/GameHands'
import PlayerDecision from '@ui/components/PlayerDecision'
import GameCover from '@ui/components/GameCover'

export default {
  name: 'App',
  components: {
    GameCanvas,
    GameStatistics,
    GameHands,
    PlayerDecision,
    GameCover,
  },
}
</script>
