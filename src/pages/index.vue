<template>
  <section class="container">
    <div>
      <friza-pic/>
      <h1 class="title">
        <b>friza</b>diga
      </h1>
      <h2 class="subtitle">
        {{subtitle}}
      </h2>
      <div class="links">
        <nuxt-link to="/about" class="button--grey">About</nuxt-link>
        <nuxt-link to="/backpages" class="button--grey">Backpages</nuxt-link>
        <a href="https://github.com/frizadiga" class="button--grey">Github</a>
      </div>
    </div>
  </section>
</template>

<script>
import frizaPic from '~/components/friza-pic.vue'

export default {
  // transition: '',
  components: {
    frizaPic
  },
  data: () => ({
    subtitle: 'Simplifying Things...'
  })
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 10vh;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 100;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
