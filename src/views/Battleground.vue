<template>
  <div class="battleground">
    <Log />
    <MenuGame :player="player"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MenuGame from '@/components/MenuGame.vue'
import Log from '@/components/Log.vue'

export default {
  name: 'Battleground',
  components: {
    Log,
    MenuGame,
  },
  props: {
    player: Object,
  }
}
</script>
