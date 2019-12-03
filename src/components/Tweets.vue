<template>
  <div id="app">
    <h1>Hello Tweets! {{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <div class="view">
      <button :class="[ userType === 'all' ? 'selected' : '']" @click="updateSource('all')">All Posts</button>
      <button :class="[ userType === 'friend' ? 'selected' : '']" @click="updateSource('friend')">Friends' Posts</button>
    </div>
    <TweetComponent v-for="tweet in tweetByUserType" :tweet="tweet" v-bind:key="tweet.id" />
    <!-- <TweetComponent v-for="tweet in tweets" :tweet="tweet" v-bind:key="tweet.id"/> -->
    <!-- <ul>
      <li v-for="tweet in tweets" v-bind:key="tweet.id">
        {{ tweet }}
      </li>
    </ul> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TweetComponent from '@/components/Tweet.vue'

// to use msg field, @Component is needed
@Component({
  components: {
    TweetComponent
  }
})
export default class Tweets extends Vue {
  @Prop() private msg!: string;
  @Prop() private tweets!: object;
  private userType: string = 'all';

  get tweetByUserType (): object {
    let currentTweets: any[]
    currentTweets = this.tweets as any[]

    // 모델로 만들어야하는감??..
    return currentTweets.filter(tweet => (tweet.user_type === this.userType) || (this.userType === 'all'))
  }

  private updateSource (userType: string) {
    this.userType = userType
    console.log(userType)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli:400,800');

body {
  height: 100%;
  background: #e6ecf1;
  font-family: 'Muli', sans-serif;
}

strong {
  font-weight: 800;
}
p {
  line-height: 1.2;
  + p {
    margin-top: 5px;
  }
}

button {
  background-color: #43c594;
  border: 0;
  color: #fff;
  padding: 15px 20px;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &.selected {
    background-color: darken(#43c594, 15%);
  }
}

#app {
  max-width: 600px;
  margin: 30px auto;
}

.view {
  margin-bottom: 20px;
  button + button {
    margin-left: 6px;
  }
}
.tweet {
  background-color: #fff;
  color: #373737;
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  padding: 30px;
  + .tweet {
    margin-top: 20px;
  }
  .media {
    display: flex;
  }
  img {
    width: 64px;
    margin-right: 15px;
  }
  small {
    font-size: 14px;
    color: #657786;
  }
}
</style>
