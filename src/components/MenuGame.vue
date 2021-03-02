<template>
  <v-container>
    <v-btn @click="pushMessage">Attack</v-btn>
  </v-container>
</template>

<script>
import { entityAttack } from '../assets/custom/entityActions.js';

export default {
  props: {
    player: Object,
  },
  methods: {
    entityAttack: entityAttack,
    pushMessage() {
      this.$store.commit('pushMessageLogActive',this.entityAttack(this.player));
    },
  }
}
</script>



<style>

</style>