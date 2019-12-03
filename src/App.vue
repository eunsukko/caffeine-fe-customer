<template>
  <div id="app">
     <!-- 일단은 단일 페이지로 만들어보자
    만들고 nav 를 지우면 일단은 한 페이지처럼 보임 -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/shops">Shops</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/order">Order</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
