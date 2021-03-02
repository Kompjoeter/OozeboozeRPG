<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view :player="player"/>
  </div>
</template>

<script>
import {Entity,entityCreate} from './assets/custom/Entity.js'

export default {
  data() {
    return {
      player: this.entityCreate(true,"John","Doe","Immune","Rusty Sword"),
    }
  },
  methods: {
    Entity: Entity,
    entityCreate: entityCreate,
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #343434;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
