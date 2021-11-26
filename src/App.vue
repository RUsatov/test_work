<template>
  <div id="app">
    <influencers-table />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InfluencersTable from '@/components/InfluencersTable.vue';

export default Vue.extend({
  name: 'TestWork',
  components: { InfluencersTable },
});
</script>

<style lang="scss">
#app {
  display : flex;
  justify-content : center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
