<template>
  <div class="menu">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {
  @Prop() private msg!: string;
}
</script>
