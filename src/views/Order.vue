<template>
  <div class="order">
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Order extends Vue {
  @Prop() private msg!: string;
}
</script>
