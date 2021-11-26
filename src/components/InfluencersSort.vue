<template>
  <div class="influencers-row influencers-row--sort">
    <div @click="sort('followers')" class="influencers-cell influencers-cell__followers influencers-cell--sort">
      <button>
        Подписчиков&nbsp;
        <span v-if="sortBy === 'followers'" class="sort-arrow" :class="{'sort-arrow--rotate': direction === 'desc'}">↓</span>
      </button>
    </div>
    <div @click="sort('erPercent')" class="influencers-cell influencers-cell__rating influencers-cell--sort">
      <button>
        Рейтинг увлеченности&nbsp;
        <span v-if="sortBy === 'erPercent'" class="sort-arrow" :class="{'sort-arrow--rotate': direction === 'desc'}">↓</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Sort } from '@/models/types';
import { mapMutations, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'InfluencersSort',
  computed: {
    ...mapGetters('influencers', ['direction', 'sortBy']),
  },
  methods: {
    ...mapMutations('influencers', ['setSortDirection', 'setSortBy', 'sortInfluencers']),

    sort(sortBy: Sort) {
      if (this.sortBy === sortBy) {
        this.setSortDirection(this.direction === 'asc' ? 'desc' : 'asc');
      } else {
        this.setSortDirection('asc');
      }
      this.setSortBy(sortBy);
      this.sortInfluencers();
    },
  },
});
</script>
