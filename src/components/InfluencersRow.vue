<template>
  <div class="influencers-row">
    <div class="influencers-cell user-info">
      <img
        :src="user.avatarUrl"
        :alt="user.name"
        class="user-info__avatar"
      />
      <div class="user-info__text-wrapper">
        <p class="user-info__name">@{{ user.name }}</p>
        <a :href="user.profileUrl" target="_blank" class="user-info__social">Instagram</a>
      </div>
    </div>
    <div class="influencers-cell influencers-cell__followers">{{ user.followers }}</div>
    <div class="influencers-cell influencers-cell__rating">{{ user.erPercent }}%</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { InfluencerType } from '@/models/types';

export default Vue.extend({
  name: 'InfluencersRow',
  props: {
    user: {
      type: Object as () => InfluencerType,
      required: true,
    },
  },
});
</script>
