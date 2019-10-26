<!--
Type:
- feature
- bugfix
- deafult

Color:
- aquamarine (#7fffd4, feature)
- crimson (#990000, bugfix)
- broken white (#f2f2f2, default)
Description: 'string',
Status: (fetched from column name)

-->

<template>
  <div id="app">
    <div class="container" >
      <Table/>
    </div>
  </div>
</template>

<script>
import Table from './components/Table.vue'

export default {
  name: 'app',
  components: {
    Table,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
