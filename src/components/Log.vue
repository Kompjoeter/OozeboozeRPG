<template>
    <span>
    <v-container fluid>
        <v-col 
        cols="12" 
        v-for="(logEntry, index) in logMessages" v-bind:key="index">
            <v-sheet v-bind:class="{'log-message': true, 'player-message': logEntry.player}">
                <span>{{logEntry.message}}</span>
            </v-sheet>
        </v-col>
    </v-container>
    </span>
</template>

<script>
export default {
    data() {
        return {
            logMessages: ['s','s'],
        };
    },
    computed: {
        getLogActive() {
            return this.$store.getters.getLogActive
        },
    },
    mounted() {
        this.logMessages = this.getLogActive;
    },
}

</script>

<style lang="scss" scoped>
  .container {
    height: 500px;
    max-height: 500px;
    max-width: 90%;
    padding: 8px;
    border: 2px solid whitesmoke;
    border-radius: 3px;
    overflow-y: scroll;
    .col {
      padding: 4px !important;
      .log-message {
        background-color: #7f9d50;
        padding: 8px !important;
        margin: 2px 0px;
        text-align: left;
        color: #484848;
        border-radius: 12px 2px 12px 12px;
        font-weight: bold;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;                    
        &.player-message {
          background-color: #99534a;
          border-radius: 2px 12px 12px 12px;
          color: whitesmoke;
        }
        span {
          margin-left: 16px;
        }
      }
    }
  }
</style>
