<template>
  <div class="influencers-table">
    <influencers-sort />
    <influencers-row
      v-for="user in influencers"
      :key="user.id + user.name"
      :user="user"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import InfluencersRow from '@/components/InfluencersRow.vue';
import InfluencersSort from '@/components/InfluencersSort.vue';
import { InfluencerType } from '@/models/types';

export default Vue.extend({
  name: 'InfluencersTable',
  components: { InfluencersSort, InfluencersRow },
  async created() {
    await this.getInfluencers();
  },
  computed: {
    influencers(): InfluencerType[] {
      return this.$store.getters['influencers/influencers'];
    },
  },
  methods: {
    ...mapActions('influencers', ['getInfluencers']),
  },
});
</script>

<style src="@/assets/styles/influencers.scss" lang="scss"/>
